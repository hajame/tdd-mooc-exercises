var { Item } = require("./item.js");

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  worsenQuality() {
    return;
  }

  updateBestBeforeDate() {
    return;
  }

  bestBeforeDateAction() {
    return;
  }
}

module.exports = {
  Sulfuras,
};
