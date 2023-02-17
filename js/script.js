let aboutUsSideButton = document.getElementById("about-us-side-button");
let sideMenu = document.getElementById("side-bar");
let xMark = document.getElementById("x-mark");

// when click the side menu button the side menu will display
aboutUsSideButton.addEventListener("click", function () {
  sideMenu.style.display = "block";
  sideMenu.style.right = "0";
});

// when click the x-mark button the side menu section will hide
xMark.addEventListener("click", function () {
  sideMenu.style.display = "none";
});
