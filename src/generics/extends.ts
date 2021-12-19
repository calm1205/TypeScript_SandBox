// ===== Extends =====
// extendsをつけることでGenericsに制約をつけることが可能
function copyWord<T extends string>(word: T) {
  return word;
}

const copiedWord = copyWord("hello world");
console.log(typeof copiedWord); // -> string

// const copiedBool = copyWord(false); // 型 'boolean' の引数を型 'string' のパラメーターに割り当てることはできません。
// T extends string により stringしか扱えない。
