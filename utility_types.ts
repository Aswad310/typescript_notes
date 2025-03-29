// =======================| Table of Contents |=======================
// 1. Partial<Todo> - Makes all properties of Todo optional
// 2. Readonly<Todo> - Makes all properties of Todo immutable
// 3. Record<K, T> - Creates an object type with keys K and values T
// 4. Pick<T, K> - Picks a set of properties K from type T
// 5. Omit<T, K> - Removes a set of properties K from type T
// ================================================================


// =======================| 5. Omit <T, K> is a utility type that removes a set of properties K from type T |=======================
interface Car {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

const car: Omit<Car, "price" | "color"> = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

console.log(car);




// =======================| 4. Pick<T, K> is a utility type that picks a set of properties K from type T |=======================
interface Surveys {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  contact: number;
}

const AswadSurvey: Pick<Surveys, "firstName" | "lastName"> = {
  firstName: "Aswad",
  lastName: "Ali",
};

console.log(AswadSurvey);




// =======================| 3. Record<K, T> is a utility type that creates an object type whose keys are K and whose values are T |=======================
type User = "aswad" | "abad" | "mohsin";

interface UserData {
  id: number;
  description: string;
}

const userData: Record<User, UserData> = {
  aswad: {
    id: 1,
    description: "aswad",
  },
  abad: {
    id: 2,
    description: "abad",
  },
  mohsin: {
    id: 3,
    description: "mohsin",
  },
};

console.log(userData);




// =======================| 2. Readonly<Todo> is a utility type that makes all properties of Todo immutable |=======================
interface Student {
  age: number;
}

const student: Readonly<Student> = {
  age: 20,
}

// student.age = 21; // Will be error, bcz Readonly makes the properties of the object immutable




// =======================| 1. Partial<Todo> is a utility type that makes all properties of Todo optional |=======================
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

const updatedTodo = updateTodo(todo1, todo2);
console.log(updatedTodo);