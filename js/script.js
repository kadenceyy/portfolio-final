document .querySelector(".openChatBtn") .addEventListener("click", openForm);
document.querySelector(".btn_close").addEventListener("click", closeForm);
function openForm() {
    document.querySelector(".openChat").style.display = "block";
}
function closeForm() {
    document.querySelector(".openChat").style.display = "none";
}

const svg = document.getElementById("heart1");
const length = svg.getTotalLength();


svg.style.strokeDasharray = length;

svg.style.strokeDashoffset = length;

window.addEventListener("scroll", function () {
  const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  const draw = length * scrollpercent;

  svg.style.strokeDashoffset = length - draw;

});