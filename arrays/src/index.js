export function insertFinal(array, value) {
  array.push(value);
  return array;
}

export function insertFirst(array, value) {
  array.unshift(value);
  return array;
}

export function orderArray(array, order) {
  if (order === "asc") {
    if (typeof array[0] == "number") return array.sort((a, b) => a - b);
    return array.sort((a, b) => a.localeCompare(b));
  }
  if (typeof array[0] == "number") return array.sort((a, b) => b - a);
  return array.sort((a, b) => b.localeCompare(a));
}

export function filterArray(array, value) {
  return array.filter((item) => item === value);
}

export function sumItems(array) {
  return array.reduce((acc, item) => acc + item, 0);
}

export function splitArray(array, size) {
  return array.reduce((acc, item, index) => {
    if (index % size === 0) acc.push([]);
    acc[acc.length - 1].push(item);
    return acc;
  }, []);

  /*
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
  */
}

export function splitArrayEvenOdds(array) {
  const odd = [];
  const even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) even.push(array[i]);
    else odd.push(array[i]);
  }

  return [odd, even];
}
