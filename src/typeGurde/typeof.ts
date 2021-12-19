function toUpperCase(arg: string | number): string | void {
  if (typeof arg === "string") {
    return arg.toUpperCase();
  }
  return;
}

console.log(toUpperCase("hello world"));
console.log(toUpperCase(0));

// typeofはプリミティブ型を返す
console.log(typeof "string"); // string
console.log(typeof 0); // number
console.log(typeof undefined); // undefind
console.log(typeof (() => {})); // function
console.log(typeof false); // boolean
console.log(typeof null); // object
console.log(typeof {}); // object
