export default function getListStudents() {
  const list = [
    [1, 'Guillaume', 'San Francisco'],
    [2, 'James', 'Columbia'],
    [5, 'Serena', 'San Francisco'],
  ];
  const returnList = [];

  for (const x of list) {
    returnList.push({ id: x[0], firstName: x[1], location: x[2] });
  }
  return returnList;
}
