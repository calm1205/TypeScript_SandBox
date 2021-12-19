// ===== Generics =====
function copy<T>(word: T): T {
  return word;
}

const copyNumber = copy(9);
console.log(typeof copyNumber); // -> number

const copyString = copy("hello world");
console.log(typeof copyString); // -> string

const copyBoolean = copy(false);
console.log(typeof copyBoolean); // -> boolean
