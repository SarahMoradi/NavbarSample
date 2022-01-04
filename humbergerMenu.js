function openNav() {
  document.getElementById("mySidepanel").style.right = "0";
  document.getElementById("side-panel-container").style.display = "block";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.right = "-250px";
  document.getElementById("side-panel-container").style.display = "none";
}
