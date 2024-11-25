const { readFileSync } = require("fs");

function parser(data) {
  let objects = [];
  // get lines
  const lines = data.split("\n");
  // labels
  const labels = lines[0].split(",");
  for (let line = 1; line < lines.length; line++) {
    let tmp = {};
    let linesSplit = lines[line].split(",");
    for (let var_ = 0; var_ < lines[line].length; var_++) {
      if (labels[var_] === undefined || linesSplit[var_] === undefined) {
        continue;
      }
      tmp[[labels[var_]]] = linesSplit[var_];
    }
    objects.push(tmp);
  }
  return objects;
}

function countBasedOnField(dataObjects) {
  function notIn(element, array) {
    for (let index = 0; index < array.length; index++) {
      if (element === array[index]) {
        return false;
      }
    }
    return true;
  }
  function findAllfields() {
    let fields = [];
    for (let element = 0; element < dataObjects.length; element++) {
      let tmpField = dataObjects[element].field;
      if (notIn(tmpField, fields)) {
        fields.push(tmpField);
      }
    }
    return fields;
  }
  const fields = findAllfields();
  // create entries
  let fieldsFilter = {};
  for (let field of fields) {
    fieldsFilter[[field]] = [];
  }
  // filter data
  for (let index = 0; index < dataObjects.length; index++) {
    fieldsFilter[[dataObjects[index].field]].push(dataObjects[index].firstname);
  }
  return fieldsFilter;
}
function countStudents(path) {
  try {
    const file = readFileSync(path, "utf-8");
    const data = parser(file);
    console.log(`Number of students: ${data.length}`);
    const filteredByField = countBasedOnField(data);
    const keys = Object.keys(filteredByField);
    for (let key of keys) {
      process.stdout.write(
        `Number of students in ${key}: ${filteredByField[[key]].length}. List: `
      );
      for (
        let firstName = 0;
        firstName < filteredByField[[key]].length;
        firstName++
      ) {
        process.stdout.write(`${filteredByField[[key]][firstName]}`);
        if (firstName < filteredByField[[key]].length - 1) {
          process.stdout.write(", ");
        }
      }
      process.stdout.write("\n");
    }
    process.stdout.write("\n");
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;