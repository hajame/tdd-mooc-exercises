var { Item } = require("./item.js");

class AgedBrie {
  constructor(name, sellIn, quality) {
    this.name = "Aged Brie";
    this.sellIn = sellIn;
    this.quality = quality;
  }

  isSpecialItem() {
    return true;
  }

  worsenQuality() {
    if (this.quality >= 50) {
      return;
    }
    this.quality = this.quality + 1;
  }

  updateBestBeforeDate() {
    this.sellIn = this.sellIn - 1;
  }

  bestBeforeDateAction() {
    if (this.sellIn >= 0) {
      return;
    }
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
  }
}

module.exports = {
  AgedBrie,
};
