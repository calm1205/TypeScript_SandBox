class Dog {
  speak = "bow";
  run() {
    console.log("run");
  }
}
class Bird {
  speak = "flutter";
  fly() {
    console.log("fly");
  }
}

function animal(arg: Dog | Bird): void {
  if (arg instanceof Dog) {
    arg.run();
  }
  // arg.fly(); // type gurdeしていないとアクセス出来ない。
}
