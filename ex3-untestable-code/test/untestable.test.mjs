import { expect } from "chai";
import { UntestableSingleton } from "../src/untestable.mjs";

let singleton = new UntestableSingleton();

describe("Singleton depending on time, a file and randomness", () => {
  it("Failing test", () => {
    expect(singleton.secondsBetweenFileDateAndRandomFuture()).to.equal(100000);
  });
});
