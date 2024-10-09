export const weakMap = new WeakMap();

export function queryAPI(obj) {
  if (weakMap.has(obj)) {
    const oldval = weakMap.get(obj);
    weakMap.set(obj, oldval + 1);
  } else {
    weakMap.set(obj, 1);
  }

  if (weakMap.get(obj) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
