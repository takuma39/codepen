const scrollNum = document.getElementById("scroll");
const bar = document.querySelector(".bar");

// 最大スクロール量
const max =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
  //現在のスクロール量
  let now = window.pageYOffset;
  //％計算
  let percent = (now / max) * 100;
  //%表示
  scrollNum.textContent = percent;
  //barスタイル変更
  bar.style.width = percent + "%";
});
