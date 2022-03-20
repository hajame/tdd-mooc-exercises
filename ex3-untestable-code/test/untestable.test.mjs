import { expect } from "chai";
import { UntestableSingleton } from "../src/untestable.mjs";

let singleton = new UntestableSingleton();

describe("Singleton depending on time, a file and randomness", () => {
  it("Produces a result", () => {
    singleton.setMaximumRandomSeconds(1000000000);
    expect(singleton.secondsBetweenFileDateAndRandomFuture()).to.not.equals(0);
  });

  it("Randomness works with at least 10% accuracy on sample size of 1000", () => {
    singleton.setMaximumRandomSeconds(1000);
    let randomIntervals = repeat(1000);
    randomIntervals.sort((a, b) => a - b);
    let smallest = randomIntervals[0];
    let largest = randomIntervals[randomIntervals.length - 1];
    let median = randomIntervals[randomIntervals.length / 2];
    expect(
      Math.abs(median - smallest - (largest - median))
    ).to.be.lessThanOrEqual(100);
  });
});

function repeat(iterations) {
  let result = new Array();
  for (let i = 0; i < iterations; i++) {
    result.push(singleton.secondsBetweenFileDateAndRandomFuture());
  }
  return result;
}
