export default function createInt8TypedArray(
  length,
  position,
  value,
) {
  if (length == 0) {
    return [];
  }
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const arrBuff = new Int8Array(length);
  arrBuff[position] = value;

  return arrBuff;
}
