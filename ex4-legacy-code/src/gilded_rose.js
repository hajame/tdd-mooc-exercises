class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.updateQuality();
      item.updateSellInDate();
      item.expiryAction();
    }
    return this.items;
  }
}

module.exports = {
  Shop,
};
