import { expect } from "chai";
import { sum, now } from "../src/untestable.mjs";

describe("Testing the untestable", () => {
  it("Example test", () => {
    expect(now()).to.equal(new Date(Date.now()).toISOString());
  });
});
