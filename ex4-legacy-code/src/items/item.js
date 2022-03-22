var { Sulfuras } = require("./sulfuras.js");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  static of(name, sellIn, quality) {
    if (name == "Sulfuras, Hand of Ragnaros") {
      return new Sulfuras(name, sellIn, quality);
    }
    return new Item(name, sellIn, quality);
  }

  isSpecialItem() {
    return this.name == "Aged Brie" || this.name == "Backstage passes to a TAFKAL80ETC concert";
  }
  worsenQuality() {
    if (!this.isSpecialItem()) {
      if (this.quality > 0) {
        this.quality = this.quality - 1;
      }
    }
    if (this.name == "Aged Brie") {
      if (this.quality >= 50) {
        return;
      }
      this.quality = this.quality + 1;
    }
    if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
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
  }

  updateBestBeforeDate() {
    this.sellIn = this.sellIn - 1;
  }

  bestBeforeDateAction() {
    if (this.sellIn >= 0) {
      return;
    }
    if (!this.isSpecialItem()) {
      if (this.quality > 0) {
        this.quality = this.quality - 1;
      }
    }
    if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
      this.quality = this.quality - this.quality;
    }
    if (this.name == "Aged Brie") {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }
}

module.exports = {
  Item,
};
