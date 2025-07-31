// import { nip04, getEventHash, getPublicKey, getSignature } from "nostr-tools";
import {
  SimplePool,
  nip19,
  nip04,
  generatePrivateKey,
  getPublicKey,
  getEventHash,
} from "nostr-tools";
// import { getNostr } from "../utils/index.js";
export default class NostrPool {
  constructor(options, relays, singer) {
    this.options =
      Object.keys(options).length > 0
        ? options
        : {
            getTimeout: 6 * 1000,
          };
    this.pool = new SimplePool(this.options);
    this.relays = relays;
    this.singer = singer;
    this.storage = this.getStorage(); // 添加存储适配器
  }
  // 添加存储适配器方法
  getStorage() {
    if (typeof window !== "undefined" && window.sessionStorage) {
      return {
        getItem: (key) => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
      };
    } else {
      const nodeStorage = new Map(); // Node.js环境下使用内存存储
      return {
        getItem: (key) => nodeStorage.get(key),
        setItem: (key, value) => nodeStorage.set(key, value),
      };
    }
  }
  async getSignedEvent({ message, kind = 4, targetPubkey, tags }) {
    if (!message) {
      throw new Error("No message provided.");
    }
    let ciphertext = "";

    let nostrAccount = await this.singer.getPublicKey();
    if (kind === 4 && targetPubkey) {
      ciphertext = await this.singer.nip04.encrypt(targetPubkey, message);
    } else {
      ciphertext = message;
    }
    const created_at = parseInt(Date.now() / 1000);
    let event = {
      content: ciphertext,
      kind,
      tags,
      created_at,
      pubkey: nostrAccount,
    };
    event.id = getEventHash(event);
    event = await this.singer.signEvent(event);
    return event;
  }

  async execCommand({ command, sendTo, queryOnly = false }) {
    let robotPrivatekey = "";
    if (!this.storage.getItem("tempNostrPrivateKey")) {
      const sk = generatePrivateKey();
      this.storage.setItem("tempNostrPrivateKey", sk);
    }
    robotPrivatekey = this.storage.getItem("tempNostrPrivateKey");

    const decodeSendTo = nip19.decode(sendTo).data;

    const receiver = getPublicKey(robotPrivatekey);
    let result = null;
    const kind = 4;
    const tags = [
      ["p", decodeSendTo],
      ["r", "json"],
    ];
    if (!queryOnly) {
      tags.push(["a", receiver]);
    }
    console.log("approve", command);

    const signedEvent = await this.getSignedEvent({
      message: command,
      kind,
      targetPubkey: decodeSendTo,
      privateKey: robotPrivatekey,
      tags,
    });

    const since = parseInt(Date.now() / 1000) - 10;
    const filter = {
      kinds: [kind],
      since,
      "#e": [signedEvent.id],
      // "#p": [receiver],
    };
    const relays = this.relays;

    await Promise.any(this.pool.publish(relays, signedEvent));
    const event = await this.pool.get(relays, filter);
    if (!event) {
      return { code: 400, data: "timeout", message: "timeout" };
    }
    const content = event.content;
    const decryptContent = await nip04.decrypt(
      robotPrivatekey,
      decodeSendTo,
      content
    );

    if (decryptContent) {
      result = JSON.parse(decryptContent);
      console.log("Result--->:", result);
      return result;
    }
  }
}
