export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `Airport [SFO] { _name: ${this._name}, _code: ${this._code} }`;
  }
}
