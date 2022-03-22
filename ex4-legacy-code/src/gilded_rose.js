var { Item } = require("./items/item.js");

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.worsenQuality();
      item.updateBestBeforeDate();
      item.bestBeforeDateAction();
    }
    return this.items;
  }
}

module.exports = {
  Shop,
};
