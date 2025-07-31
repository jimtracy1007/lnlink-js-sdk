import { combineQueryString } from "../utils/index.js";
import { nip19, nip04 } from "nostr-tools";
/**
 * @module modules/Litd
 * @description Represents a Litd.
 */
export default class Litd {
  /**
   * Creates a new Litd instance.
   * @param {Object} nostrPool - The nostrPool object.
   * @param {Object} config - The configuration object.
   * @param {Function} runCommand - The runCommand function.
   */
  constructor(nostrPool, config, runCommand, sendTo) {
    this.nostrPool = nostrPool;
    this.config = config;
    this.runCommand = runCommand;
    this.sendTo = sendTo;
  }
  // Node
  getInfo() {
    const command = combineQueryString("getInfo", {});
    return this.runCommand(command);
  }
  startLitd() {
    const command = combineQueryString("startLink", {});
    return this.runCommand(command);
  }
  stopLitd() {
    const command = combineQueryString("stopLitd", {});
    return this.runCommand(command);
  }
  restartLitd() {
    const command = combineQueryString("restartLitd", {});
    return this.runCommand(command);
  }
  getState() {
    const command = combineQueryString("getState", {});
    return this.runCommand(command);
  }

  genseed() {
    const command = combineQueryString("genseed", {});
    return this.runCommand(command);
  }
  async initWallet({ password, seed }) {
    const sk = nip19.decode(this.sendTo).data;
    const toPubkey = sk;
    const encodePassword = await nip04.encrypt(sk, toPubkey, password);
    const encodeSeed = await nip04.encrypt(sk, toPubkey, JSON.stringify(seed));
    const command = combineQueryString("initWallet", {
      password: encodePassword,
      cipher_seed_mnemonic: encodeSeed,
      withinfo: true,
    });
    return await this.runCommand(command);
  }
  async unlockWallet({ password }) {
    const sk = nip19.decode(this.sendTo).data;
    const toPubkey = sk;
    const encodePassword = await nip04.encrypt(sk, toPubkey, password);
    const command = combineQueryString("unlock", {
      wallet_password: encodePassword,
    });
    return await this.runCommand(command);
  }
  walletBalance() {
    const command = combineQueryString("walletBalance", {});
    return this.runCommand(command);
  }
  sendBTC({ addr, amount, sat_per_vbyte }) {
    const command = combineQueryString("sendCoins", {
      addr,
      amount,
      sat_per_vbyte,
      send_all: false,
    });
    return this.runCommand(command);
  }
  newAddress(type = 4) {
    const command = combineQueryString("newAddress", {
      type,
    });
    return this.runCommand(command);
  }
  // channel
  openChannel({ host, node_pubkey, amount, push_amount = 0, sat_per_vbyte }) {
    const command = combineQueryString("openChannel", {
      host,
      node_pubkey,
      amount,
      push_amount,
      sat_per_vbyte,
    });
    return this.runCommand(command);
  }
  listChannels() {
    const command = combineQueryString("listChannels", {});
    return this.runCommand(command);
  }
  closeChannel({
    channel_point_str,
    sat_per_vbyte,
    force = false,
    no_wait = true,
  }) {
    const command = combineQueryString("closeChannel", {
      channel_point_str,
      force,
      no_wait,
      sat_per_vbyte,
    });
    return this.runCommand(command);
  }
  listPeers() {
    const command = combineQueryString("listPeers", {});
    return this.runCommand(command);
  }
  connectPeer({ host, pubkey, perm = true }) {
    const command = combineQueryString("connectPeer", {
      host,
      pubkey,
      perm,
    });
    return this.runCommand(command);
  }
  addInvoice({ amt, memo }) {
    const command = combineQueryString("receive", {
      value: amt,
      memo,
    });
    return this.runCommand(command);
  }
  payInvoice({ payment_request, outgoing_chan_id }) {
    const command = combineQueryString("send", {
      invoice: payment_request,
      outgoing_chan_id,
    });
    return this.runCommand(command);
  }

  // taprootassets

  newTapdAddr({ asset_id, amt }) {
    const command = combineQueryString("newTapdAddr", { asset_id, amt });
    return this.runCommand(command);
  }
  decodeTapdAddr(tap_addrs) {
    const command = combineQueryString("decodeAddr", {
      addr: tap_addrs,
    });
    return this.runCommand(command);
  }
  listAssets({ page_index = 0, page_size = 20 }) {
    const command = combineQueryString("listAssets", {
      page_index,
      page_size,
    });
    return this.runCommand(command);
  }
  sendTapdAssets({ tap_addrs, fee_rate }) {
    const command = combineQueryString("sendTapdAssets", {
      tap_addrs,
      fee_rate,
    });
    return this.runCommand(command);
  }
  createTapdChannel({
    asset_amount,
    asset_id,
    node_pubkey,
    fee_rate_sat_per_vbyte,
  }) {
    const command = combineQueryString("createTapdChannel", {
      asset_amount,
      asset_id,
      fee_rate_sat_per_vbyte,
      node_pubkey,
    });
    return this.runCommand(command);
  }
  addTapdInvoice({ asset_amount, asset_id }) {
    const command = combineQueryString("addTapdInvoice", {
      asset_amount,
      asset_id,
    });
    return this.runCommand(command);
  }
  sendTapdPayment({
    asset_amount,
    asset_id,
    payment_request,
    outgoing_chan_id,
  }) {
    const command = combineQueryString("sendTapdPayment", {
      asset_amount,
      asset_id,
      payment_request,
      outgoing_chan_id,
    });
    return this.runCommand(command);
  }
  decodeAssetPayReq({ payment_request, asset_id }) {
    const command = combineQueryString("decodeAssetPayReq", {
      invoice: payment_request,
      asset_id,
    });
    return this.runCommand(command);
  }
}
