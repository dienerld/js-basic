import { describe, expect, it } from "vitest";
import { fibonacci } from "./fibonacci";

describe("Test Functions fibonacci", () => {
  it("should return factorial of 5", () => {
    const result = fibonacci(5);
    expect(result).toEqual(5);
  });

  it("should return fibonacci of 0", () => {
    const result = fibonacci(0);
    expect(result).toEqual(0);
  });

  // it("should return fibonacci of 100000", () => {
  //   const result = fibonacci(1000);
  //   expect(result).toEqual(Infinity);
  // });

  it("should return fibonacci of 10", () => {
    const result = fibonacci(10);
    expect(result).toEqual(55);
  });

  it("should return fibonacci of 50", () => {
    const result = fibonacci(50);
    expect(result).toEqual(12586269025);
  });
});
