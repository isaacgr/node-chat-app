const expect = require("expect");
const { isRealString } = require("../utils/validation");

describe("isRealString", () => {
  it("should reject non string values", () => {
    expect(isRealString(1)).toBeFalsy;
  });
  it("should reject string with white space", () => {
    expect(isRealString("  ")).toBeFalsy;
  });
  it("should allow string with non space characters", () => {
    expect(isRealString("Hello")).toBeTruthy;
  });
});
