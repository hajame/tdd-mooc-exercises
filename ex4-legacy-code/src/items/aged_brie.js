var { Item } = require("./item.js");

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality >= 50) {
      return;
    }
    this.quality = this.quality + 1;
  }

  expiryAction() {
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
