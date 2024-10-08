export interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string
}

export interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

export class Director implements DirectorInterface {
  constructor() {
  }
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  constructor() {

  }
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  let _salary: number = 0;
  if (typeof salary === "string") {
    _salary = Number(salary);
  }
  else {
    _salary = salary;
  }

  if (_salary < 500) {
    console.log("making a teacher cause of the salary == ", _salary);
    return new Teacher();

  }
  return new Director();
}

export function isDirector(employee: Director | Teacher) {
  return employee instanceof Director;
}

export function executeWork(employee: any) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  else if (todayClass === "History") {
    return "Teaching History";
  }

}
