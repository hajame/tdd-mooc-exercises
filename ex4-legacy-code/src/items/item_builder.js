var { Item } = require("./item.js");
var { Sulfuras } = require("./sulfuras.js");
var { AgedBrie } = require("./aged_brie.js");
var { BackstagePass } = require("./backstage_pass.js");

class ItemBuilder {
  constructor() {}

  static buildNormal(name, sellIn, quality) {
    return new Item(name, sellIn, quality);
  }

  static buildSulfuras(name, sellIn, quality) {
    return new Sulfuras(name, sellIn, quality);
  }

  static buildAgedBrie(name, sellIn, quality) {
    return new AgedBrie(name, sellIn, quality);
  }

  static buildBackstagePass(name, sellIn, quality) {
    return new BackstagePass(name, sellIn, quality);
  }
}

module.exports = {
  ItemBuilder,
};
