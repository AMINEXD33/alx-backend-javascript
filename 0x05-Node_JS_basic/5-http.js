const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 1245;

const { readFile } = require("fs");

function parser(data) {
  let objects = [];
  // get lines
  const lines = data.split("\n");
  // labels
  const labels = lines[0].split(",");
  for (let line = 1; line < lines.length; line++) {
    let tmp = {};
    if (lines[line].trim() === "") {
      continue;
    }
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
  return new Promise((resolve, reject) => {
    const file = readFile(path, "utf-8", (err, filedata) => {
      try {
        let returns = "";
        const data = parser(filedata);
        returns += `This is the list of our students\n`;
        returns += `Number of students: ${data.length}\n`;
        const filteredByField = countBasedOnField(data);
        const keys = Object.keys(filteredByField);
        for (let key of keys) {
          returns += `Number of students in ${key}: ${
            filteredByField[[key]].length
          }. List: `;
          for (
            let firstName = 0;
            firstName < filteredByField[[key]].length;
            firstName++
          ) {
            returns += `${filteredByField[[key]][firstName]}`;
            if (firstName < filteredByField[[key]].length - 1) {
              returns += ", ";
            }
          }
          returns += "\n";
        }
        resolve(returns);
      } catch (err) {
        reject(new Error("Cannot load the database"));
      }
    });
  });
}

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    countStudents("database.csv")
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        throw err;
      });
  }
});
app.listen(port, hostname, () => {});

module.exports = app;
