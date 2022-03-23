var { Item } = require("./item.js");

class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    super.updateQuality();
    super.updateQuality();
  }

  expiryAction() {
    super.expiryAction();
    super.expiryAction();
  }
}

module.exports = {
  Conjured,
};
