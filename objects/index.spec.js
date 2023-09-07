import { describe, expect, it } from "vitest";

import { createObject, person } from "./";

const isUUID = (value) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  );

// crie tests para objetos
describe("[ Objects ] - Person", () => {
  it("should have 5 properties", () => {
    const countProperties = Object.keys(person);

    expect(countProperties).toHaveLength(5);
  });

  it("should have 3 methods", () => {
    expect(person).toHaveProperty("id", expect.any(String));
    expect(isUUID(person.id)).toBeTruthy();
    expect(person).toHaveProperty("name", expect.any(String));
    expect(person).toHaveProperty("lastName", expect.any(String));
    expect(person).toHaveProperty("age", expect.any(Number));
  });

  it("should have address property", () => {
    expect(person).toHaveProperty("address");
  });

  it("should have street, number and city properties in address", () => {
    expect(person.address).toHaveProperty("street", expect.any(String));
    expect(person.address).toHaveProperty("number", expect.any(Number));
    expect(person.address).toHaveProperty("city", expect.any(String));
  });
});

describe("[ Objects ] - Function create object", () => {
  it("should have 5 properties", () => {
    const obj = createObject("water", "mineral water", 2, 10, "any_link");

    expect(obj).toHaveProperty("id", expect.any(String));
    expect(isUUID(obj.id)).toBeTruthy();
    expect(obj).toHaveProperty("name", expect.any(String));
    expect(obj).toHaveProperty("description", expect.any(String));
    expect(obj).toHaveProperty("price", expect.any(Number));
    expect(obj).toHaveProperty("quantity", expect.any(Number));
    expect(obj).toHaveProperty("image", expect.any(String));
  });

  it("should have method getValueStock", () => {
    const obj = createObject("water", "mineral water", 2, 10, "any_link");

    expect(obj).toHaveProperty("getValueStock", expect.any(Function));
  });

  it("should return storage value 20", () => {
    const obj = createObject("water", "mineral water", 2, 10, "any_link");

    expect(obj.getValueStock()).toEqual(20);
  })

  it("should return storage value 87.5", () => {
    const obj = createObject("water", "mineral water", 3.5, 25, "any_link");

    expect(obj.getValueStock()).toEqual(87.5);
  })
});
