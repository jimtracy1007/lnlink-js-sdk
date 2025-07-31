// import NostrPool from "../lib/nostrPool.js";
import { nip04, nip19, getPublicKey, getSignature } from "nostr-tools";
function getHexPrivateKey(privKey) {
  if (!privKey) {
    throw new Error("The private key is required");
  } else if (privKey.startsWith("nsec")) {
    try {
      const { type, data } = nip19.decode(privKey);
      if (type === "nsec") return data; // nsec
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      throw new Error("Invalid nsec private key");
    }
  } else if (/^[0-9a-f]{64}$/i.test(privKey)) {
    return privKey; // hex
  } else {
    throw new Error("Invalid private key format");
  }
}

class CustomNip04 {
  constructor({ privateKey }) {
    this.privateKey = getHexPrivateKey(privateKey);
  }

  async encrypt(targetPubkey, message) {
    return await nip04.encrypt(this.privateKey, targetPubkey, message);
  }
}
/**
 * PerpApi handles perp trading related API requests.
 */
class Signer {
  /**
   * Initializes Signer instance.
   * @param {string} privateKey - Private key for authentication.
   */
  constructor({ privateKey } = {}) {
    this.privateKey = getHexPrivateKey(privateKey);
    this.nip04 = new CustomNip04({
      privateKey,
    });
  }
  async getPublicKey() {
    return getPublicKey(this.privateKey);
  }

  async signEvent(event) {
    const signature = getSignature(event, this.privateKey);
    return {
      ...event,
      sig: signature,
    };
  }
}

export default Signer;
