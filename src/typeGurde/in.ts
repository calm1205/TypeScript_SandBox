// inでプロパティの存在に対してtype gurdeできる。
type Artist = {
  name: string;
  artistName: string;
};
type Human = {
  name: string;
};

function _(arg: Human | Artist): void {
  // arg.artistName // type gurdeしないとアクセス出来ない。
  if ("artistName" in arg) {
    console.log(arg.artistName); // inでartistNameプロパティを保持していることが確定
  }
}
