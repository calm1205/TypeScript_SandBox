function overrideFunction(i: string): string;
function overrideFunction(i: number): number;
function overrideFunction(i: string | number): string | number {
  return i;
}

const i1 = overrideFunction("hello world");
const i2 = overrideFunction(999);
