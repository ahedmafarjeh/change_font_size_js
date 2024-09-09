
function increaseFontSize(){
  document.querySelector("h2").classList.add("increase_font");
  document.querySelector("p").classList.add("increase_font");
}
function decreaseFontSize(){
  document.querySelector("h2").classList.remove("increase_font");
  document.querySelector("p").classList.remove("increase_font");
}
document.querySelector(".increase_size_btn").onclick = increaseFontSize;
document.querySelector(".decrease_size_btn").onclick = decreaseFontSize;