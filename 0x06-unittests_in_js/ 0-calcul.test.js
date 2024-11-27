const { describe } = require("node:test");
const calculateNumber = require("./0-calcul");
const { assert } = require("console");

describe("calculateNumber", function () {
  describe("PositiveInts", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(12, 12);
      const val2 = calculateNumber(12, 1);
      const val3 = calculateNumber(1, 121);
      const val4 = calculateNumber(0, 12);
      const val5 = calculateNumber(0, 0);

      assert(val1, 12 + 23);
      assert(val2, 12 + 1);
      assert(val3, 1 + 121);
      assert(val4, 0 + 12);
      assert(val5, 0);
    });
  });
  describe("NegativeInts", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(-12, -12);
      const val2 = calculateNumber(-12, -1);
      const val3 = calculateNumber(-1, -121);
      const val4 = calculateNumber(-0, -12);
      const val5 = calculateNumber(0, 0);

      assert(val1, -12 + -23);
      assert(val2, -12 + -1);
      assert(val3, -1 + -121);
      assert(val4, -0 + -12);
      assert(val5, 0);
    });
  });
  describe("PositiveFloats", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(12.34, 12.5663);
      const val2 = calculateNumber(12.34, 1.5663);
      const val3 = calculateNumber(1.34, 121.5663);
      const val4 = calculateNumber(0.34, 12.5663);
      const val5 = calculateNumber(0, 0);

      assert(val1, 12 + 13);
      assert(val2, 12 + 2);
      assert(val3, 1 + 122);
      assert(val4, 0 + 13);
      assert(val5, 0);
    });
  });
  describe("NegativeFloats", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(-12.34, -12.5663);
      const val2 = calculateNumber(-12.34, -1.5663);
      const val3 = calculateNumber(-1.34, -121.5663);
      const val4 = calculateNumber(-0.34, -12.5663);
      const val5 = calculateNumber(0, 0);

      assert(val1, -12 + -13);
      assert(val2, -12 + -2);
      assert(val3, -1 + -122);
      assert(val4, -0 + -13);
      assert(val5, 0);
    });
  });
});
