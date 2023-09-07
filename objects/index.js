import { randomUUID } from "node:crypto";

/**
 * Creates an object satisfying test conditions.
 */
export const person = {
  id: randomUUID(),
  name: "person",
  lastName: "10",
  age: 10,
  address: {
    street: "street",
    number: 10,
    city: "city",
  },
};

/**
 * Creates an object with the given properties.
 *
 * @param {string} name - The name of the object.
 * @param {string} description - The description of the object.
 * @param {number} price - The price of the object.
 * @param {number} quantity - The quantity of the object.
 * @param {string} image - The image URL of the object.
 * @return {object} - The created object.
 */
export function createObject(name, description, price, quantity, image) {
  return {
    id: randomUUID(),
    name,
    description,
    price,
    quantity,
    image,
    getValueStock() {
      return quantity * price;
    },
  };
}
