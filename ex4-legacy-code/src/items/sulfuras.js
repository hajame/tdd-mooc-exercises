var { Item } = require("./item.js");

class Sulfuras {
  constructor(name, sellIn, quality) {
    this.name = "Sulfuras, Hand of Ragnaros";
    this.sellIn = sellIn;
    this.quality = quality;
  }

  isSpecialItem() {
    return true;
  }

  worsenQuality() {
    return;
  }

  updateBestBeforeDate() {
    return;
  }

  bestBeforeDateAction() {
    return;
  }
}

module.exports = {
  Sulfuras,
};
