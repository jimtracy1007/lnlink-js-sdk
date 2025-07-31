import { combineQueryString } from "../utils/index.js";
import { nip19, nip04 } from "nostr-tools";
/**
 * @module modules/Rgb
 * @description Represents a Rgb.
 */
export default class Rgb {
  /**
   * Creates a new Rgb instance.
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
  startRGB() {
    const command = combineQueryString("startRGB", {}, "rgb");
    return this.runCommand(command);
  }
  stopRGB() {
    const command = combineQueryString("stopRGB", {}, "rgb");
    return this.runCommand(command);
  }
  restartRGB() {
    const command = combineQueryString("restartRGB", {}, "rgb");
    return this.runCommand(command);
  }
  getState() {
    const command = combineQueryString("getState", {}, "rgb");
    return this.runCommand(command);
  }
  // On-chain
  getInfo() {
    const command = combineQueryString("getInfo", {}, "rgb");
    return this.runCommand(command);
  }
  async genseed(password) {
    const sk = nip19.decode(this.sendTo).data;
    const toPubkey = sk;
    const encodePassword = await nip04.encrypt(sk, toPubkey, password);
    const command = combineQueryString(
      "genseed",
      { password: encodePassword },
      "rgb"
    );
    return await this.runCommand(command);
  }
  async unlock(password) {
    const sk = nip19.decode(this.sendTo).data;
    const toPubkey = sk;
    const encodePassword = await nip04.encrypt(sk, toPubkey, password);
    const command = combineQueryString(
      "unlock",
      { password: encodePassword },
      "rgb"
    );
    return await this.runCommand(command);
  }
  async initWallet(password) {
    const sk = nip19.decode(this.sendTo).data;
    const toPubkey = sk;
    const encodePassword = await nip04.encrypt(sk, toPubkey, password);
    const command = combineQueryString(
      "initWallet",
      {
        password: encodePassword,
      },
      "rgb"
    );
    return await this.runCommand(command);
  }
  walletBalance() {
    const command = combineQueryString("walletBalance", {}, "rgb");
    return this.runCommand(command);
  }
  newAddress() {
    const command = combineQueryString("newAddress", {}, "rgb");
    return this.runCommand(command);
  }
  sendCoins({ address, amount }) {
    const command = combineQueryString("sendCoins", { address, amount }, "rgb");
    return this.runCommand(command);
  }
  createUtxos({ num, size, fee_rate }) {
    const command = combineQueryString(
      "createUtxos",
      { num, size, fee_rate },
      "rgb"
    );
    return this.runCommand(command);
  }
  listUnspents() {
    const command = combineQueryString("listUnspents", {}, "rgb");
    return this.runCommand(command);
  }
  // Assets
  createRgbInvoice({ asset_id, duration_seconds = 60 * 60 }) {
    const command = combineQueryString(
      "createRgbInvoice",
      {
        asset_id,
        duration_seconds,
      },
      "rgb"
    );
    return this.runCommand(command);
  }
  payRgbInvoice({ invoice, asset_id, amount }) {
    const command = combineQueryString(
      "payRgbInvoice",
      {
        invoice,
        asset_id,
        amount,
      },
      "rgb"
    );
    return this.runCommand(command);
  }
  decodeRgbInvoice(invoice) {
    const command = combineQueryString("decodeRgbInvoice", { invoice }, "rgb");
    return this.runCommand(command);
  }

  // channels
  connectPeer({ pubkey, host }) {
    const command = combineQueryString(
      "connectPeer",
      {
        pubkey,
        host,
      },
      "rgb"
    );
    return this.runCommand(command);
  }
  disconnectPeer({ peer_pubkey }) {
    const command = combineQueryString(
      "disconnectPeer",
      { peer_pubkey },
      "rgb"
    );
    return this.runCommand(command);
  }
  listPeers() {
    const command = combineQueryString("listPeers", {}, "rgb");
    return this.runCommand(command);
  }
  listChannels() {
    const command = combineQueryString("listChannels", {}, "rgb");
    return this.runCommand(command);
  }
  openChannel({
    pubkey,
    host,
    asset_id,
    asset_amount,
    fee_rate_sat_per_vbyte,
  }) {
    const command = combineQueryString(
      "openChannel",
      { pubkey, host, asset_id, asset_amount, fee_rate_sat_per_vbyte },
      "rgb"
    );
    return this.runCommand(command);
  }
  closeChannel({ channel_id, peer_pubkey }) {
    const command = combineQueryString(
      "closeChannel",
      { channel_id, peer_pubkey },
      "rgb"
    );
    return this.runCommand(command);
  }
  createInvoice({ asset_id, asset_amount }) {
    const command = combineQueryString(
      "createInvoice",
      { asset_id, asset_amount },
      "rgb"
    );
    return this.runCommand(command);
  }
  decodeLnInvoice({ invoice }) {
    const command = combineQueryString("decodeLnInvoice", { invoice }, "rgb");
    return this.runCommand(command);
  }
  payInvoice({ invoice }) {
    const command = combineQueryString("payInvoice", { invoice }, "rgb");
    return this.runCommand(command);
  }
}
