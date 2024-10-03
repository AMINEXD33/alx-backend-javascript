export default class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse.verifierName(name);
    HolbertonCourse.verifierLength(length);
    HolbertonCourse.verifierStudents(students);
    this._name = name;
    this._lenght = length;
    this._students = students;
  }

  static verifierName(someName) {
    if (typeof someName !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static verifierLength(someLength) {
    if (typeof someLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  static verifierStudents(studentsList) {
    if (Array.isArray(studentsList)) {
      for (const element of studentsList) {
        if (typeof element !== 'string') {
          throw new TypeError('an element inside students array is not a string');
        }
      }
    } else {
      throw new TypeError('Length must be an array');
    }
  }

  set name(newName) {
    HolbertonCourse.verifierName(newName);
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    HolbertonCourse.verifierLength(null, newLength);
    this._lenght = newLength;
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    HolbertonCourse.verifierStudents(null, null, newStudents);
    this._students = newStudents;
  }

  get students() {
    return this._students;
  }
}
