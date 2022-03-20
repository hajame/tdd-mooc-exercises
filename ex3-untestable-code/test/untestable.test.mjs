import { expect } from "chai";
import { sum, readFile, now } from "../src/untestable.mjs";

describe("Testing the untestable", () => {
  it("Test we depend on time", () => {
    expect(now()).to.equal(new Date(Date.now()).toISOString());
  });
  it("Test we depend on files", () => {
    console.log(readFile());
    expect(readFile()).to.equal(new Date(Date.now()).toISOString());
  });
});
