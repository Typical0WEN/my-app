class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I’m ${this.age} years old.`);
  }
}

const user = new Student("Owen", 16);
user.greet();
