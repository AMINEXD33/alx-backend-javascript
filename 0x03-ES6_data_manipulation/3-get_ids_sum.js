export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  const sum = array.reduce((prev, current) => prev + current.id, 0);
  return sum;
}
