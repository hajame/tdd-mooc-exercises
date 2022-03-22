var { Sulfuras } = require("./sulfuras.js");
var { AgedBrie } = require("./aged_brie.js");
var { BackstagePass } = require("./backstage_pass.js");

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
    if (name == "Aged Brie") {
      return new AgedBrie(name, sellIn, quality);
    }
    if (name == "Backstage passes to a TAFKAL80ETC concert") {
      return new BackstagePass(name, sellIn, quality);
    }
    return new Item(name, sellIn, quality);
  }

  isSpecialItem() {
    return false;
  }
  worsenQuality() {
    if (!this.isSpecialItem()) {
      if (this.quality > 0) {
        this.quality = this.quality - 1;
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
  }
}

module.exports = {
  Item,
};
