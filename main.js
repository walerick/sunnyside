const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".container");

//function to open nav links
function openNavLinks() {
  if (navLinks.style.transform === "scaleY(1)") {
    navLinks.style.transform = "scaleY(0)";
  } else {
    navLinks.style.transform = "scaleY(1)";
  }
}

//run function when menuBtn is clicked
menuBtn.addEventListener("click", openNavLinks);
