function openNav() {
  document.getElementById("mySidepanel").style.right = "0";
  document.getElementById("side-panel-container").style.display = "block";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.right = "-250px";
  document.getElementById("side-panel-container").style.display = "none";
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

document
  .getElementById("wallet-dropdown-menu")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
document
  .getElementById("account-dropdown-menu")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });



