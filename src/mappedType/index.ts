// リテラル型を展開してループ処理が可能
type MappedType = {
  [P in "first" | "second" | "third"]: string;
};

// type MappedType = {
//   first: string;
//   second: string;
//   third: string;
// }

type Fruits = {
  apple: "apple";
  banana: "banana";
  remon: "remon";
  grape: "grape";
  orange: "orange";
};

type FruitsColor = {
  [P in keyof Fruits]: string;
};
