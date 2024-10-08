export default function createInt8TypedArray(
  length,
  position,
  value,
) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const arrBuff = new Int8Array(length);
  arrBuff[position] = value;

  return arrBuff;
}
