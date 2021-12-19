type User2 = {
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

// 汎用的に配列の型を削除 T[] -> T
type UnpackArray<T> = T extends (infer U)[] ? U : boolean;
type UnpackFriends = UnpackArray<User2["friends"]>;
// type bool = UnpackArray<string>; // boolean

const firend2: UnpackFriends = {
  firstName: "Michael",
  lastName: "Jordan",
  becomeFriendDay: new Date(),
};
