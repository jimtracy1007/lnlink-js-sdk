export function numberWithCommas(x) {
  if (!x && x != 0) {
    return "0";
  }

  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
export function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

export function getNostr() {
  if (typeof window === "undefined") {
    throw new Error("Nostr must be used in Windows environment");
  } else {
    const nostr =
      window?.nostrasset?.nostr ||
      window?.okxwallet?.nostr ||
      window?.tokenpocket?.nostr ||
      window?.alby?.nostr ||
      window.nostr;
    if (!nostr) {
      throw new Error("Nostr provider not available");
    }
    return nostr;
  }
}
export const combineQueryString = (method, params = {}, node_type = "") => {
  const obj = {
    method,
    params,
  };
  if (node_type) {
    obj.node_type = node_type;
  }
  return JSON.stringify(obj);
};
