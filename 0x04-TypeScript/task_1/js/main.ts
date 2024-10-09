export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [index: string]: any
}

export interface Directors extends Teacher {
  numberOfReports: number;
}


export interface printTeacherFunction {
  (firstName: string, lastName: string): string
}
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  let firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
}

export interface thisClass {
  workOnHomework(): string,
  displayName(): string
}

export class StudentClass implements thisClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastname: string) {
    this._firstName = firstName;
    this._lastName = lastname;
  }
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this._firstName;
  }

}
// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17