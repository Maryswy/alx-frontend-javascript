export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name);
    this._length = this.validateNumber(length);
    this._students = this.validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateStudents(newStudents);
  }

  validateString(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid type. Expected a string.');
    }
    return value;
  }

  validateNumber(value) {
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
      throw new Error('Invalid type. Expected a number.');
    }
    return value;
  }

  validateStudents(value) {
    if (!Array.isArray(value) || value.some(item => typeof item !== 'string')) {
      throw new Error('Invalid type. Expected an array of strings.');
    }
    return value;
  }
}

