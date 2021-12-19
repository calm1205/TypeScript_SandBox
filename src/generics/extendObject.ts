// extendsにオブジェクトを指定することで補完可能

function objectCopy<T extends { name: string }>(obj: T) {
  return obj.name;
}
const lastName = objectCopy({ name: "山田" });
console.log(lastName); // -> 山田

// function objectCopy<T>(obj: T) {
//   return obj.name; // プロパティ 'name' は型 'T' に存在しません
// }
