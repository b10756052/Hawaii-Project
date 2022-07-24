let q_header = document.querySelector("header");
let q_a = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    q_header.style.backgroundColor = "rgba(0,0,0,0.3)";
    q_header.style.color = "white";
    q_a.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    q_header.style = "";
    q_a.forEach((a) => {
      a.style = "";
    });
  }
});

console.log("志j好帥！");
