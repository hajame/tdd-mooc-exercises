var { expect } = require("chai");
var { Shop } = require("../src/gilded_rose.js");
var { Item } = require("../src/items/item.js");

function shopWithItem(itemName, bestBeforeDate, quality) {
  return new Shop([new Item(itemName, bestBeforeDate, quality)]);
}

let shop;

describe("Gilded Rose", function () {
  describe("Normal items", function () {
    it("empty does not do anything", function () {
      shop = new Shop();
      expect(shop.updateQuality()[0]).to.be.undefined;
    });
    it("before best before date, worsen quality by 1", function () {
      shop = shopWithItem("foo", 30, 3);
      expect(shop.updateQuality()[0].quality).to.equal(2);
    });
    it("before best before date, quality does not go below 0", function () {
      shop = shopWithItem("foo", 30, 0);
      expect(shop.updateQuality()[0].quality).to.equal(0);
    });
    it("past best before date, worsen quality by 2", function () {
      shop = shopWithItem("foo", -1, 3);
      expect(shop.updateQuality()[0].quality).to.equal(1);
    });
    it("past best before date, quality does not go below 0", function () {
      shop = shopWithItem("foo", -1, 1);
      expect(shop.updateQuality()[0].quality).to.equal(0);
    });
    it("best before date advances by one", function () {
      shop = shopWithItem("foo", 100, 100);
      expect(shop.updateQuality()[0].sellIn).to.equal(99);
    });
  });
  describe("Aged Brie", function () {
    it("if past best before date and less than 50 quality, improve quality", function () {
      shop = shopWithItem("Aged Brie", 0, 0);
      expect(shop.updateQuality()[0].quality).to.equal(2);
    });
    it("if 50 quality, quality remains", function () {
      shop = shopWithItem("Aged Brie", 0, 50);
      expect(shop.updateQuality()[0].quality).to.equal(50);
    });
    it("if 50+ quality, quality remains", function () {
      shop = shopWithItem("Aged Brie", 0, 100);
      expect(shop.updateQuality()[0].quality).to.equal(100);
    });
  });
  describe("Backstage passes to a TAFKAL80ETC concert", function () {
    describe("one day before concert", function () {
      it("don't raise if 50", function () {
        shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 1, 50);
        expect(shop.updateQuality()[0].quality).to.equal(50);
      });
      it("don't raise if above 50", function () {
        shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 1, 51);
        expect(shop.updateQuality()[0].quality).to.equal(51);
      });
      it("raise from 49 until 50", function () {
        shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 1, 49);
        expect(shop.updateQuality()[0].quality).to.equal(50);
      });
      it("raise from 48 until 50", function () {
        shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 1, 48);
        expect(shop.updateQuality()[0].quality).to.equal(50);
      });
      it("raise from 47 until 50", function () {
        shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 1, 47);
        expect(shop.updateQuality()[0].quality).to.equal(50);
      });
      it("value after concert is 0", function () {
        shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 0, 100);
        expect(shop.updateQuality()[0].quality).to.equal(0);
      });
    });
    it("11 days or more before concert, increase quality by 1", function () {
      shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 11, 30);
      expect(shop.updateQuality()[0].quality).to.equal(31);
    });
    it("under 11 days before concert value increases by 2", function () {
      shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 6, 0);
      expect(shop.updateQuality()[0].quality).to.equal(2);
    });
    it("under 11 days before concert, don't raise when 50", function () {
      shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 6, 50);
      expect(shop.updateQuality()[0].quality).to.equal(50);
    });
    it("under 6 days before concert value increases by 3", function () {
      shop = shopWithItem("Backstage passes to a TAFKAL80ETC concert", 5, 47);
      expect(shop.updateQuality()[0].quality).to.equal(50);
    });
  });
  describe("Sulfuras, Hand of Ragnaros does not weaken", function () {
    it("0 quality, 0 best before date", function () {
      shop = shopWithItem("Sulfuras, Hand of Ragnaros", 0, 0);
      expect(shop.updateQuality()[0].quality).to.equal(0);
    });
    it("0 quality, -1 best before date", function () {
      shop = shopWithItem("Sulfuras, Hand of Ragnaros", -1, 100);
      expect(shop.updateQuality()[0].quality).to.equal(100);
    });
    it("100 quality, 0 best before date", function () {
      shop = shopWithItem("Sulfuras, Hand of Ragnaros", 0, 100);
      expect(shop.updateQuality()[0].quality).to.equal(100);
    });
    it("0 quality, 100 best before date", function () {
      shop = shopWithItem("Sulfuras, Hand of Ragnaros", 100, 0);
      expect(shop.updateQuality()[0].quality).to.equal(0);
    });
    it("100 quality, 100 best before date", function () {
      shop = shopWithItem("Sulfuras, Hand of Ragnaros", 100, 100);
      expect(shop.updateQuality()[0].quality).to.equal(100);
    });
    it("best before date does not advance", function () {
      shop = shopWithItem("Sulfuras, Hand of Ragnaros", 100, 100);
      expect(shop.updateQuality()[0].sellIn).to.equal(100);
    });
  });
});
