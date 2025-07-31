import NostrPool from "./lib/nostrPool.js";
import CONFIG from "./config/index.js";
import Litd from "./modules/litd.js";
import Rgb from "./modules/rgb.js";
import Singer from "./modules/singer.js";
import Fee from "./modules/fee.js";
import { getNostr } from "./utils/index.js";

/**
 * LnlinkSdk class represents the main SDK for interacting with the NOSTR ASSET PROTOCOL.
 * @class
 * @module LnlinkSdk
 * @exports LnlinkSdk
 */
class LnlinkSdk {
  /**
   * Creates an instance of LnlinkSdkSDK.
   * @constructor
   * @param {Object} options - The options for initializing LnlinkSdk.
   * @param {string} [options.env='development'] - The environment to use.
   * @param {Array} [options.relays] - The relays to use.
   * @param {Object} [options.poolOptions] - The options for initializing NostrPool.
   */
  constructor({
    env,
    relay,
    singer,
    poolOptions,
    timeout = 5000,
    sendTo,
  } = {}) {
    this.env = env || "development";
    this.config = CONFIG[this.env];
    this.singer = singer || getNostr();
    this.relays = relay
      ? relay instanceof Array
        ? relay
        : [relay]
      : CONFIG[this.env].RELAYS;
    this.nostrPool = new NostrPool(
      { ...poolOptions },
      this.relays,
      singer || getNostr()
    );
    this.timeout = timeout;
    this.sendTo = sendTo;
  }

  /**
   * Get the configuration object for the current environment.
   * @returns {Object} The configuration object.
   */
  getConfig() {
    return this.config;
  }

  /**
   * Get the NostrPool instance.
   * @returns {NostrPool} The NostrPool instance.
   */
  getNostrPool() {
    return this.nostrPool;
  }

  /**
   * Get the NostrProvider instance.
   * @returns {NostrProvider} The NostrProvider instance.
   */

  /**
   * Get the Market instance.
   * @returns {Market} The Market instance.
   */
  get litd() {
    return new Litd(
      this.nostrPool,
      this.config,
      this.runCommand.bind(this),
      this.sendTo
    );
  }

  /**
   * Get the Token instance.
   * @returns {Token} The Token instance.
   */
  get rgb() {
    return new Rgb(
      this.nostrPool,
      this.config,
      this.runCommand.bind(this),
      this.sendTo
    );
  }

  /**
   * Get the Utils instance.
   * @returns {Fee} The Fee instance.
   */
  get fee() {
    return new Fee(this.nostrPool, this.config);
  }

  /**
   * Execute a command on the NostrPool.
   * @param {string} command - The command to execute.
   * @param {string} sendTo - The address to send the command to.
   * @param {boolean} [queryOnly=false] - Whether the command is for querying only.
   * @returns {Promise} A promise that resolves with the result of the command execution.
   */
  runCommand(command, sendTo, queryOnly = false) {
    return this.nostrPool.execCommand({
      command,
      sendTo: sendTo || this.sendTo,
      singer: this.singer,
      queryOnly,
    });
  }
}

// export default LnlinkSdk;
export { LnlinkSdk, Singer };
