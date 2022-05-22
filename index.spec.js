const Calculator = require("./index");

describe("Calculator addition", () => {
  const { add } = Calculator;
  it("Should return 4 when 2,2 are added", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Should return 0 when 0,0 are added", () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe("Calculator subtraction", () => {
  const { sub } = Calculator;
  it("Should return 2 when 2 is subtracted from 4", () => {
    expect(sub(4, 2)).toBe(2);
  });

  it("Should return 0 when 2 is subtracted from 2", () => {
    expect(sub(2, 2)).toBe(0);
  });

  it("Should return -2 when 4 is subtracted from 2", () => {
    expect(sub(2, 4)).toBe(-2);
  });
});

describe("Calculator multiplication", () => {
  const { mul } = Calculator;
  it("Should return 4 when 2 is multiplied with 2", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("Should return 0 when 2 is multiplied with 0", () => {
    expect(mul(2, 0)).toBe(0);
  });

  it("Should return 4 when -2 is multiplied with -2", () => {
    expect(mul(-2, -2)).toBe(4);
  });
});

describe("Calculator Division", () => {
  const { div } = Calculator;
  it("Should return 1 when 2 divided by 2", () => {
    expect(div(2, 2)).toBe(1);
  });
  it("Should return 2 when 4 divided by 2", () => {
    expect(div(4, 2)).toBe(2);
  });
  it("Should return Infinity when 2 divided by 0", () => {
    expect(div(2, 0)).toBe(Infinity);
  });
});
