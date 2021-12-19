type HumanType = {
  name: string;
  age: number;
  isForeign: boolean;
};

const human: HumanType = {
  name: "john",
  age: 29,
  isForeign: true,
};

// オブジェクトのkeyからユニオン型生成
// Object key → Union Type
type KeyUnion = keyof typeof human;

// オブジェクトのvalueからユニオン型生成
// Object values → Union Type
const valueHuman = {
  name: "john",
  age: 29,
  isForeign: true,
} as const;
type ValueUnion = typeof valueHuman[keyof typeof valueHuman];

// 配列からユニオン型生成
// Array → Union Type
const humanAttribute = ["name", "age", "isForeign"] as const;
type ArrayUnion = typeof humanAttribute[number];
