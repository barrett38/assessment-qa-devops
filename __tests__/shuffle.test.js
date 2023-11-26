const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  it("should return an array", () => {
    expect(Array.isArray(shuffle([]))).toBe(true);
  });

  it("should return an empty array when given an empty array", () => {
    expect(shuffle([])).toEqual([]);
  });
});
