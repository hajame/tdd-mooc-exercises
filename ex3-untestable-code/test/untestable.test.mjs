import { expect } from "chai";
import { UntestableSingleton } from "../src/untestable.mjs";

let singleton = new UntestableSingleton();

describe("Testing the untestable", () => {
  it("Test we depend on randomness and time", () => {
    expect(singleton.nowPlusRandom(10)).to.equal(
      new Date(Date.now()).toISOString()
    );
  });
  it("Test we depend on files", () => {
    expect(singleton.readFile()).to.equal(new Date(Date.now()).toISOString());
  });
});
