/**
 * 集中管理内部数据
 */
class Store {
  constructor() {{
    this.store = {};
  }}
  get(key) { return this.store[key]; }
  set(key, value) {
    if(typeof value === "function") {
      this.store[key] = value(this.store[key])
    } else {
      this.store[key] = value;
    }
  }
}

export default new Store();
