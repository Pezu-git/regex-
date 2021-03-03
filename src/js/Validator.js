export default class Validator {
  constructor(name) {
    this.name = name;
    this.validateUsername(name);
  }

  // eslint-disable-next-line class-methods-use-this
  validateUsername(value) {
    if (/^[A-Za-z]+[\w-]+[\w]$/.test(value) && !/[\d]{4,}/.test(value)) {
      return true;
    }
    throw new Error('Не подходящее имя');
  }
}
