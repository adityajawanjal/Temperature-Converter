var cel = document.querySelector("#cel");
var far = document.querySelector("#far");
var btn = document.querySelector(".btn");

cel.addEventListener("input", function () {
  let c = this.value;
  let f = (c / 5) * 9 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(3);
  }
  far.value = f;
});

far.addEventListener("input", function () {
  let f = this.value;
  let c = ((f - 32) / 9) * 5;
  if (!Number.isInteger) {
    c = c.toFixed(3);
  }
  cel.value = c;
});

btn.addEventListener("click", function () {
  far.value = "";
  cel.value = "";
});
