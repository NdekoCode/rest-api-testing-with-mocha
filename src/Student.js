export default class Student {
  constructor(firstName, lastName, age = 18) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  presentation() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAge() {
    return this.age;
  }
  makeApoint(cb) {
    setTimeout(() => {
      this.age++;
      cb(this.age);
    }, 1000);
  }
}
