var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  describe("Normal items", function () {
    it("before best before date, worsen quality by 1", function () {
      const gildedRose = new Shop([new Item("foo", 30, 3)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });
    it("before best before date, quality does not go below 0", function () {
      const gildedRose = new Shop([new Item("foo", 30, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
    it("past best before date, worsen quality by 2", function () {
      const gildedRose = new Shop([new Item("foo", -1, 3)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(1);
    });
    it("past best before date, quality does not go below 0", function () {
      const gildedRose = new Shop([new Item("foo", -1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
  });
  describe("Aged Brie", function () {
    it("if past best before date and less than 50 quality, improve quality", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });
    it("if 50+ quality, quality remains", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 100)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(100);
    });
  });
  describe("Backstage passes to a TAFKAL80ETC concert", function () {
    it("0 quality, 10 best before date", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });
    it("0 quality, 5 best before date", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(3);
    });
    it("value after best before date is 0", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 100)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
  });
  describe("Sulfuras, Hand of Ragnaros does not weaken", function () {
    it("0 quality, 0 best before date", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
    it("100 quality, 0 best before date", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 100)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(100);
    });
    it("0 quality, 100 best before date", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 100, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
    it("100 quality, 100 best before date", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 100, 100)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(100);
    });
  });
});
