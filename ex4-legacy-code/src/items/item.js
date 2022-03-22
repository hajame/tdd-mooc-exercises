class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  worsenQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }

  updateBestBeforeDate() {
    this.sellIn = this.sellIn - 1;
  }

  bestBeforeDateAction() {
    if (this.sellIn >= 0) {
      return;
    }
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }
}

module.exports = {
  Item,
};
