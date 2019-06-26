/* global describe, it, before */

import chai from "chai";

chai.expect();

const expect = chai.expect;

let lib;

describe("Super awesome test", () => {
  it("should return two", () => {
    const isDefinitelyTwo = 1 + 1;

    expect(isDefinitelyTwo).to.be.equal(2);
  });
});
