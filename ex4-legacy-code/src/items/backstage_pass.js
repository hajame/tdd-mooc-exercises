var { Item } = require("./item.js");

class BackstagePass {
  constructor(name, sellIn, quality) {
    this.name = "Backstage passes to a TAFKAL80ETC concert";
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
    if (this.sellIn < 11) {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
    if (this.sellIn < 6) {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }

  updateBestBeforeDate() {
    this.sellIn = this.sellIn - 1;
  }

  bestBeforeDateAction() {
    if (this.sellIn >= 0) {
      return;
    }
    this.quality = this.quality - this.quality;
  }
}

module.exports = {
  BackstagePass,
};
