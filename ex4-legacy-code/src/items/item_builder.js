var { Item } = require("./item.js");
var { Sulfuras } = require("./sulfuras.js");
var { AgedBrie } = require("./aged_brie.js");
var { BackstagePass } = require("./backstage_pass.js");

class ItemBuilder {
  constructor() {}

  static build(name, sellIn, quality) {
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
}

module.exports = {
  ItemBuilder,
};
