export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
export const stud1: Student = {
  firstName: "test1",
  lastName: "test1_",
  age: 22,
  location: "some_where_over_the_rainbow"
};
export const stud2: Student = {
  firstName: "test2",
  lastName: "test2_",
  age: 25,
  location: "some_where_in_LA"
};
export const studentsList: Array<Student> = [
  stud1,
  stud2
];


export const renderTb: Function = (studentsArray: Array<Student>) => {
  let tb: HTMLElement = document.createElement("table");
  const headers: Array<string> = ["firstName", "location"];

  // append headers
  let tr: HTMLElement = document.createElement("tr");
  for (let header of headers) {
    let fname = document.createElement("th");
    fname.innerText = header;
    tr.appendChild(fname);
  }
  tb.appendChild(tr);

  for (let student of studentsArray) {
    tr = document.createElement("tr");
    let name: HTMLElement = document.createElement("td");
    let location: HTMLElement = document.createElement("td");

    name.innerText = student.firstName;
    location.innerText = student.location;
    tr.appendChild(name);
    tr.appendChild(location);

    tb.appendChild(tr);
  }
  document.body.appendChild(tb);
};