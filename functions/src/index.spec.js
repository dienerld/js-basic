import { describe, expect, it } from "vitest";
import { calculator, factorial } from ".";

describe("Test Functions factorial", () => {
  it("should return factorial of 5", () => {
    const result = factorial(5);
    expect(result).toEqual(120);
  });

  it("should return factorial of 0", () => {
    const result = factorial(0);
    expect(result).toEqual(1);
  });

  it("should return factorial of 100000", () => {
    const result = factorial(1000);
    expect(result).toEqual(Infinity);
  });

  it("should return factorial of -5", () => {
    const result = factorial(-5);
    expect(result).toEqual(1);
  });

  it("should return factorial of 50", () => {
    const result = factorial(50);
    expect(result).toEqual(3.0414093201713376e64);
  });
});

describe("Test Functions calculator", () => {
  it("should return calculator of 5 + 5", () => {
    const result = calculator(5, 5, "+");
    expect(result).toEqual(10);
  });

  it("should return calculator of 5 - 5", () => {
    const result = calculator(5, 5, "-");
    expect(result).toEqual(0);
  });

  it("should return calculator of 5 * 5", () => {
    const result = calculator(5, 5, "*");
    expect(result).toEqual(25);
  });

  it("should return calculator of 5 / 5", () => {
    const result = calculator(5, 5, "/");
    expect(result).toEqual(1);
  });

  it("should return calculator of 5 / 0", () => {
    const result = calculator(5, 0, "/");
    expect(result).toEqual("error");
  });

  it("should return string error if value invalid", () => {
    const result = calculator(undefined, 5, "/");
    expect(result).toEqual("error");
  });
});
