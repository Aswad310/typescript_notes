class Dog1 {
  first_name: string = "";
  last_name: string = "";

  constructor(first_name: string, last_name: string) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
}

class Cat1 {
  first_name: string = "";

  constructor(first_name: string) {
    this.first_name = first_name;
  }
}

// Type Guard
// Type guards are functions that return a boolean value and have a type predicate in the return type.
function isDog(pet: Dog1 | Cat1): pet is Dog1 {
  return (pet as Dog1).last_name !== undefined;
}

function getName(animal: Dog1 | Cat1): string {
  if (isDog(animal)) {
    return animal.first_name + " " + animal.last_name;
    
  } else {
    return animal.first_name;
  }
}


const inst = new Dog1("Fido", "Smith");
const inst2 = new Cat1("Fido");

const whatAnimal = getName(inst2);

console.log(whatAnimal);