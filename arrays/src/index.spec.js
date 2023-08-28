import { describe, expect, it } from "vitest";
import {
  filterArray,
  insertFinal,
  insertFirst,
  orderArray,
  splitArray,
  splitArrayEvenOdds,
  sumItems,
} from ".";

const makeArray = () =>
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

describe("Test Insert Arrays", () => {
  it("should insert a number at the end", () => {
    const array = [1, 2, 3];
    const result = insertFinal(array, 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should insert a char at the end", () => {
    const array = ["a", "b", "c"];
    const result = insertFinal(array, "d");
    expect(result).toEqual(["a", "b", "c", "d"]);
  });

  it("should insert a value at the first position", () => {
    const array = [1, 2, 3];
    const result = insertFirst(array, 0);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  it("should insert a char at the first position", () => {
    const array = ["a", "b", "c"];
    const result = insertFirst(array, "d");
    expect(result).toEqual(["d", "a", "b", "c"]);
  });
});

describe("Test Order Arrays", () => {
  it("should return array order ascending 1", () => {
    const array = [3, 4, 7, 23, 124, 5, 1, 656, 0, 7454, 13, 1];
    const result = orderArray(array, "asc");
    expect(result).toEqual([0, 1, 1, 3, 4, 5, 7, 13, 23, 124, 656, 7454]);
  });

  it("should return array order ascending 2", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 0, 111, 2, 3, 5, 6, 7, 8];
    const result = orderArray(array, "asc");

    expect(result).toEqual([0, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 111]);
  });

  it("should return array order ascending with random numbers", () => {
    const array = makeArray();

    const result = orderArray([...array], "asc");

    expect(result).toEqual(array.sort((a, b) => a - b));
  });

  it("should return array order descending with random numbers", () => {
    const array = makeArray();

    const result = orderArray([...array], "desc");

    expect(result).toEqual(array.sort((a, b) => b - a));
  });

  it("should return array order descending 1", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 0, 111, 2, 3, 5, 6, 7, 8];
    const result = orderArray(array, "desc");
    expect(result).toEqual([111, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 2, 2, 1, 0]);
  });

  it("should return array order descending 2", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 0, 111, 2, 3, 5, 6, 7, 8];
    const result = orderArray(array, "desc");
    expect(result).toEqual([111, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 2, 2, 1, 0]);
  });

  // using char

  it("should return array order ascending 1", () => {
    const array = ["a", "b", "c", "d", "e", "f", "g"];
    const result = orderArray(array, "asc");
    expect(result).toEqual(["a", "b", "c", "d", "e", "f", "g"]);
  });

  it("should return array order ascending 2", () => {
    const array = ["a", "f", "b", "c", "e", "g", "d"];
    const result = orderArray(array, "asc");
    expect(result).toEqual(["a", "b", "c", "d", "e", "f", "g"]);
  });

  it("should return array order descending 1", () => {
    const array = ["a", "f", "b", "c", "e", "g", "d"];
    const result = orderArray(array, "desc");
    expect(result).toEqual(["g", "f", "e", "d", "c", "b", "a"]);
  });

  it("should return array order descending 2", () => {
    const array = ["a", "f", "b", "c", "e", "g", "d"];
    const result = orderArray(array, "desc");
    expect(result).toEqual(["g", "f", "e", "d", "c", "b", "a"]);
  });
});

describe("Test Filter Arrays", () => {
  it("should return array containing 3 and length 1", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterArray(array, 3);
    expect(result).toHaveLength(1);
    expect(result.every((item) => item === 3)).toBeTruthy();
  });

  it("should return array containing 3 and length 3", () => {
    const array = [1, 2, 3, 4, , 3, 5, 6, 7, 3, 8, 9, 10];
    const result = filterArray(array, 3);
    expect(result).toHaveLength(3);
    expect(result.every((item) => item === 3)).toBeTruthy();
  });

  // char

  it("should return array containing d", () => {
    const array = ["a", "b", "c", "d", "e", "f", "g"];
    const result = filterArray(array, "d");
    expect(result).toHaveLength(1);
    expect(result.every((item) => item === "d")).toBeTruthy();
  });

  it("should return array containing Doe and length 2", () => {
    const array = ["John", "Doe", "Jane", "Doe", "James"];
    const result = filterArray(array, "Doe");
    expect(result).toHaveLength(2);
    expect(result.every((item) => item === "Doe")).toBeTruthy();
  });
});

describe("Test Sum Items", () => {
  it("should return sum items", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = sumItems(array);
    expect(result).toBe(55);
  });

  it("should return sum random items", () => {
    const array = makeArray();
    const result = sumItems(array);
    let sum = 0;
    // faça implementação diferente | tente usar métodos de array
    array.forEach((item) => (sum += item));
    expect(result).toBe(sum);
  });
});

describe("Test Split Array", () => {
  it("should split array in 4 parts", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = splitArray(array, 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  it("should return array containing 2 arrays of 50 items", () => {
    const array = makeArray();

    const result = splitArray(array, 50);
    expect(result).toHaveLength(2);
    result.forEach((item) => expect(item).toHaveLength(50));
  });

  it("should return array containing 4 arrays of 30 items", () => {
    const array = makeArray();

    const result = splitArray(array, 30);
    expect(result).toHaveLength(4);
    const tail = result.pop();
    expect(tail).toHaveLength(10);
  });
});

describe("Test Split Array even and odd", () => {
  it("should return 2 arrays containing even and odd numbers", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [odd, even] = splitArrayEvenOdds(array);
    expect(even.every((item) => item % 2 === 0)).toBeTruthy();
    expect(odd.every((item) => item % 2 !== 0)).toBeTruthy();
  });

  it("should return 2 arrays containing even and odd numbers", () => {
    const array = makeArray();
    const [odd, even] = splitArrayEvenOdds(array);
    expect(even.every((item) => item % 2 === 0)).toBeTruthy();
    expect(odd.every((item) => item % 2 !== 0)).toBeTruthy();
  });
});
