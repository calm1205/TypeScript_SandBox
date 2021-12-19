// interfaceは基本的にオブジェクトの型定義
interface ObjectType {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: undefined;
  prop5: {
    subProp1: string;
    subProp2: number;
  };
}

declare namespace _ {
  interface func1 {
    (input: string): string;
  }
  interface func2 {
    (input: number): number;
  }
}

const nameFunction: _.func1 = (input) => {
  return input;
};
