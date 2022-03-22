class Item {
  qualityWorseningBehavior;
  bestBeforeDateBehavior;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  isSpecialItem() {
    return (
      this.name == "Aged Brie" ||
      this.name == "Backstage passes to a TAFKAL80ETC concert" ||
      this.name == "Sulfuras, Hand of Ragnaros"
    );
  }
  worsenQuality() {
    if (!this.isSpecialItem()) {
      if (this.quality > 0) {
        this.quality = this.quality - 1;
      }
    }
    if (this.name == "Aged Brie" || this.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
        if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
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
    }
  }

  updateBestBeforeDate() {
    if (this.name != "Sulfuras, Hand of Ragnaros") {
      this.sellIn = this.sellIn - 1;
    }
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

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let item = this.items[i];

      item.worsenQuality();
      item.updateBestBeforeDate();
      item.bestBeforeDateAction();
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
