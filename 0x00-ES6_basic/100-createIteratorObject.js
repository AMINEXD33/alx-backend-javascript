export default function createIteratorObject(report) {
  const decompressed = report.allEmployees;
  const depKeys = Object.keys(decompressed);

  const allEmployees = [];
  for (const key of depKeys) {
    const employees = decompressed[key];
    for (const employee of employees) {
      allEmployees.push(employee);
    }
  }
  return allEmployees;
}
