export default class Fee {
  constructor(nostrPool, config) {
    this.nostrPool = nostrPool;
    this.config = config;
  }
  async getFeeRate() {
    const baseUrl = this.config.MEMOPOOL_BASE_URL;
    const url = `${baseUrl}api/v1/fees/recommended`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
