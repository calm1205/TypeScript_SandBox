// type aliasでの関数定義
type FuncTypeAlias = (arg: string) => void;

// interfaceでの関数定義
interface FuncTypeInterface {
  (arg: string): void;
}

const funcAlias: FuncTypeAlias = (arg) => {
  console.log(arg);
};
funcAlias("hello world");

const funcInterface: FuncTypeAlias = (arg) => {
  console.log(arg);
};
funcInterface("hello world");
