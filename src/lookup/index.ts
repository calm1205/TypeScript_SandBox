type User = {
  id: number;
  attribute: {
    firstName: string;
    lastName: string;
    age: number;
    isForeign: boolean;
  };
  friends: Array<{
    firstName: string;
    lastName: string;
    becomeFriendDay: Date;
  }>;
};

type ID = User["id"]; // number
type Age = User["attribute"]["age"]; // number
type Friend = User["friends"][number];

const friend: Friend = {
  firstName: "Michael",
  lastName: "Jackson",
  becomeFriendDay: new Date(),
};

// 関数の型の返り値を返すGenerics
type GetReturnValue<T> = T extends (...arg: any[]) => infer R ? R : T;

type FunctionType = (arg: string) => string;
type FunctionTypeReturn = GetReturnValue<FunctionType>;

const returnValue: FunctionTypeReturn = "return";
console.log(typeof returnValue); // -> string
