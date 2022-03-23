var { Item } = require("./item.js");

class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
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
