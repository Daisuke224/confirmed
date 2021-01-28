const unfollow = () => {
  console.log("フォローを外します。");
};
const canceltweet = () => {
  console.log("ツイートをキャンセルします。");
};
const repository = () => {
  console.log("リポジトリを削除します。");
};
function confirmed(fn) {
  const input = window.prompt("実行しますか？");
  if (input === "実行") {
    fn();
  }
}
confirmed(repository);
