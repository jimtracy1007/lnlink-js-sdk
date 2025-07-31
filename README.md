# LnLink JS SDK

LnLink JS SDK is a powerful JavaScript library that allows developers to interact with a remote Lightning Network node (LND) and manage RGB assets. Communication is handled securely via the Nostr protocol, typically by leveraging a NIP-07 compatible browser extension (like Alby) for signing events.

This SDK simplifies complex operations such as node management, wallet control, channel operations, and asset transfers into a straightforward programmatic interface.

## Features

- **Lightning Network (LND) Management:**
  - Start, stop, and restart your LND node.
  - Get node status and information.
  - Manage your on-chain wallet (generate seeds, initialize, unlock, check balance).
  - Open, close, and list channels.
  - Connect to and list peers.
  - Create and pay Lightning invoices.
- **Taproot Assets Management:**
  - Create Taproot asset addresses.
  - Send and receive Taproot assets.
  - Manage Taproot asset channels.
- **RGB Asset Management:**
  - Manage the RGB node lifecycle.
  - Handle on-chain wallet operations for RGB.
  - Create and manage RGB asset channels.
  - Work with RGB-specific invoices.
- **Secure Communication:** All commands are sent as encrypted Nostr events, signed by a user-controlled key (e.g., from a browser wallet extension).

## Installation

Install the package using npm or yarn:

```bash
npm install lnlink-js-sdk
```

or

```bash
yarn add lnlink-js-sdk
```

## Quick Start

Here's a basic example of how to use the SDK in a browser environment with a NIP-07 compliant Nostr extension.

```javascript
import { LnlinkSdk } from 'lnlink-js-sdk';

// Initialize the SDK
const lnlinkSdk = new LnlinkSdk({
  // 'development' or 'production'
  env: 'development', 
  // A NIP-07 compatible signer, usually window.nostr from a browser extension
  singer: window.nostr,
  // The npub of the remote node you want to control
  sendTo: 'npub1reg0m7776sqmjsgrw59pq9un2u430g7pxeygyszge6nct5sv5fks3n9f4n',
});

// Example: Get LND node info
async function getNodeInfo() {
  try {
    console.log("Fetching LND node info...");
    const info = await lnlinkSdk.litd.getInfo();
    console.log('Node Info:', info);
  } catch (error) {
    console.error('Error getting node info:', error);
  }
}

// Example: Get the current recommended fee rates
async function getFeeRate() {
  try {
    console.log("Fetching fee rates...");
    const rates = await lnlinkSdk.fee.getFeeRate();
    console.log('Fee Rates:', rates);
  } catch (error) {
    console.error('Error getting fee rates:', error);
  }
}


// Call the functions
getNodeInfo();
getFeeRate();
```

## API Reference

The SDK is organized into modules based on functionality.

### `lnlinkSdk.litd`

This module contains all functions related to managing the LND node, on-chain funds, Lightning channels, and Taproot assets.

#### Node Management
- `getInfo()`: Get information about the LND node.
- `startLitd()`: Start the LND node.
- `stopLitd()`: Stop the LND node.
- `restartLitd()`: Restart the LND node.
- `getState()`: Get the current state of the LND node.

#### Wallet Management
- `genseed()`: Generate a new wallet seed.
- `initWallet({ password, seed })`: Initialize a new wallet.
- `unlockWallet({ password })` : Unlock an existing wallet.
- `walletBalance()`: Get the on-chain wallet balance.
- `newAddress(type)`: Generate a new on-chain address.
- `sendBTC({ addr, amount, sat_per_vbyte })`: Send BTC on-chain.

#### Channel Management
- `openChannel({ host, node_pubkey, amount, ... })`: Open a new channel.
- `listChannels()`: List all open channels.
- `closeChannel({ channel_point_str, ... })`: Close an existing channel.
- `listPeers()`: List connected peers.
- `connectPeer({ host, pubkey, perm })`: Connect to a new peer.

#### Invoices
- `addInvoice({ amt, memo })`: Create a new Lightning invoice.
- `payInvoice({ payment_request, ... })`: Pay a Lightning invoice.

#### Taproot Assets
- `newTapdAddr({ asset_id, amt })`: Create a new Taproot Asset address.
- `sendTapdAssets({ tap_addrs, fee_rate })`: Send a Taproot Asset.
- `createTapdChannel({...})`: Open a channel for a Taproot Asset.
- `addTapdInvoice({...})`: Create an invoice for a Taproot Asset.
- `sendTapdPayment({...})`: Pay a Taproot Asset invoice.

---

### `lnlinkSdk.rgb`

This module provides functionality for managing RGB assets and the RGB node.

#### Node Management
- `startRGB()`
- `stopRGB()`
- `restartRGB()`
- `getState()`
- `getInfo()`

#### Wallet & On-chain
- `genseed(password)`
- `unlock(password)`
- `initWallet(password)`
- `walletBalance()`
- `newAddress()`
- `sendCoins({ address, amount })`
- `createUtxos({ num, size, fee_rate })`
- `listUnspents()`

#### Channels & Payments
- `connectPeer({ pubkey, host })`
- `listPeers()`
- `listChannels()`
- `openChannel({...})`
- `createInvoice({ asset_id, asset_amount })`
- `payInvoice({ invoice })`
- `decodeLnInvoice({ invoice })`

---

### `lnlinkSdk.fee`

- `getFeeRate()`: Retrieves recommended fee rates from Mempool.space.

## Development

To run the project locally for development:

1.  Clone the repository.
2.  Install dependencies: `npm install` or `yarn install`.
3.  Run the development server: `npm run dev` or `yarn dev`. This will open a test page.
4.  To create a production build: `npm run build` or `yarn build`.

## License

MIT License

Copyright (c) 2024 Lnfi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
