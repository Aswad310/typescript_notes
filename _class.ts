class Person {
  protected fullName: string;

  constructor(fullName: string) {
    this.fullName = fullName;
  }

  getfullName(): string {
    if (this.fullName.length > 5) return "";
    return this.fullName
  }

  setfullName(fullName: string) {
    this.fullName = fullName
  }

  greet() {
    console.log(`Hello my fullName is ${this.fullName}`)
  }
}

class Employ extends Person {
  callMe() {
    console.log(this.fullName);
  }
}

const person = new Person("Aswad");