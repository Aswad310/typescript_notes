
function processFeedback(input: unknown): void {
  if (typeof input == "string") {
    console.log(`Processing text ${input}`)

  } else if (typeof input == "number") {
    console.log(`Processing rating ${input}`)

  } else if (input instanceof Blob) {
    console.log(`Processing file ${input}`)

  } else {
    console.log('Unsupported type of input');
  }
}

processFeedback("Hello")
processFeedback(5)
processFeedback(new Blob())
processFeedback([12, 45])



// function processFeedback (number: any) : void {
//   console.log(`Some type of ${number}`)
// }

// processFeedback("Hello")
// processFeedback(5)
// processFeedback(new Blob())





// any | unknown

// let y: unknown = 1;

// if (typeof y == 'number') {
//   const result = y + 1;
// } else if (typeof y == 'string') {
//   const result = y.length;
// }

// as <type casting>

// let z = 1;

// const result = (z as number) + 1;