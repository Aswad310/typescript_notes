/**
 * In TypeScript, a namespace is a way to organize and group related code, 
 * such as classes, functions, interfaces, and variables, under a single name.
 * 
 * This helps avoid naming conflicts in larger projects by encapsulating code within a specific scope.
 */

namespace Utils {
  export class MyClass {

  }

  export function myFunction() {
    console.log("Hello from myFunction!");
  }

  export const NAME = "MyClass";

  export interface MyInterface {
    myMethod(): void;
  }
}

namespace MyCode {
  export class MyClass {

  }

  export function myFunction() {
    console.log("Hello from myFunction!");
  }

  export const NAME = "MyClass";

  export interface MyInterface {
    myMethod(): void;
  }
}