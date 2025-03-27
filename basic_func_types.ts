function mul(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunction(
  funcs: ((x: number, y: number) => number)[],
  values: number[][]
): number[] {

  const results = [] as number[];

  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }

  return results;
}

applyFunction([mul, div], [[1, 2], [3, 4]]);