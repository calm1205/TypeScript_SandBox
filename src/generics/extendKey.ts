type Dareka = {
  name: string;
  age: number;
  isForeign: boolean;
};

// T には name,age,isForeignのどれかしか入らない
function returnKey<T extends keyof Dareka>(key: T) {
  return key;
}
console.log(returnKey("age")); // -> age

// よく使われるextends
function returnValueOfKey<T extends Dareka, U extends keyof Dareka>(
  obj: T,
  key: U
) {
  return obj[key];
}
const user: Dareka = {
  name: "山田",
  age: 23,
  isForeign: false,
};

const age = returnValueOfKey(user, "age");
console.log(age); // -> 23
