export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  const oldsum = 0;
  const sum = array.reduce((prev, current) => oldsum + current.id);

  return sum;
}
