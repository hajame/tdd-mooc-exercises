var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  describe("Normal items", function () {
    it("item foo with 1 quality", function () {
      const gildedRose = new Shop([new Item("foo", 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
    it("item foo with -1 sellIn", function () {
      const gildedRose = new Shop([new Item("foo", -1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
  });
  describe("Aged Brie", function () {
    it("0 quality, 0 sellIn", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });
    it("50+ quality", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 100)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(100);
    });
  });
  describe("Backstage passes to a TAFKAL80ETC concert", function () {
    it("0 quality, 10 sellIn", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });
    it("0 quality, 5 sellIn", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(3);
    });
    it("if sellIn 0, quality is 0", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 100)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
  });
  describe("Sulfuras, Hand of Ragnaros", function () {
    it("0 quality, 0 sellIn", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
  });
});
