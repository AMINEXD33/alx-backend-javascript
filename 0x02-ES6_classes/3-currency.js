export default class Currency {
  constructor(code, name) {
    Currency.validator(code);
    Currency.validator(name, true);
    this._code = code;
    this._name = name;
  }

  static validator(isitText, flag = false) {
    if (flag) {
      if (typeof isitText !== 'string') {
        throw new TypeError('Name must be a string');
      }
    } else if (typeof isitText !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  set code(newCode) {
    Currency.validator(newCode);
    this._code = newCode;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    Currency.validator(newName, true);
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
