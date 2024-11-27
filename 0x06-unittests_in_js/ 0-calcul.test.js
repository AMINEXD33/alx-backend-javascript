const { describe } = require("node:test");
const calculateNumber = require("./0-calcul");
const assert = require('assert');

describe("calculateNumber", function () {
  describe("PositiveInts", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(12, 12);
      const val2 = calculateNumber(12, 1);
      const val3 = calculateNumber(1, 121);
      const val4 = calculateNumber(0, 12);
      const val5 = calculateNumber(0, 0);

      assert.strictEqual(val1, (12 + 12));
      assert.strictEqual(val2, (12 + 1));
      assert.strictEqual(val3, (1 + 121));
      assert.strictEqual(val4, (0 + 12));
      assert.strictEqual(val5, (0));
    });
  });
  describe("NegativeInts", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(-12, -12);
      const val2 = calculateNumber(-12, -1);
      const val3 = calculateNumber(-1, -121);
      const val4 = calculateNumber(-0, -12);
      const val5 = calculateNumber(0, 0);

      assert.strictEqual(val1, (-12 + -12));
      assert.strictEqual(val2, (-12 + -1));
      assert.strictEqual(val3, (-1 + -121));
      assert.strictEqual(val4, (0 + -12));
      assert.strictEqual(val5, 0);
    });
  });
  describe("PositiveFloats", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(12.34, 12.5663);
      const val2 = calculateNumber(12.34, 1.5663);
      const val3 = calculateNumber(1.34, 121.5663);
      const val4 = calculateNumber(0.34, 12.5663);
      const val5 = calculateNumber(0, 0);

      assert.strictEqual(val1, (12 + 13));
      assert.strictEqual(val2, (12 + 2));
      assert.strictEqual(val3, (1 + 122));
      assert.strictEqual(val4, (0 + 13));
      assert.strictEqual(val5, 0);
    });
  });
  describe("NegativeFloats", function () {
    it("should round any number befor adding", function () {
      const val1 = calculateNumber(-12.34, -12.5663);
      const val2 = calculateNumber(-12.34, -1.5663);
      const val3 = calculateNumber(-1.34, -121.5663);
      const val4 = calculateNumber(-0.34, -12.5663);
      const val5 = calculateNumber(0, 0);

      assert.strictEqual(val1, (-12 + -13));
      assert.strictEqual(val2, (-12 + -2));
      assert.strictEqual(val3, (-1 + -122));
      assert.strictEqual(val4, (-0 + -13));
      assert.strictEqual(val5, 0);
    });
  });
});
