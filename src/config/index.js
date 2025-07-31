const CONFIG = {
  development: {
    RELAYS: ["wss://dev-relay.lnfi.network"],
    MEMOPOOL_BASE_URL: "https://mempool.space/", // http://regtest.lnfi.network:8889/api/v1/fees/recommended
  },
  production: {
    RELAYS: ["wss://relay01.lnfi.network"],
    MEMOPOOL_BASE_URL: "https://mempool.space/", // https://mempool.space/api/v1/fees/recommended
  },
};
export default CONFIG;
