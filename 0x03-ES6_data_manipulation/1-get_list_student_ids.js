export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const arr = [];
  array.map((object) => {
    arr.push(object.id);
    return arr;
  });
  return arr;
}
