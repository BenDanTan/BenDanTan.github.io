function openNav() {
    document.getElementById("sidenav").style.width = "425px";
    document.getElementById("page").style.marginLeft = "425px";
  }
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("page").style.marginLeft= "0";
  }

function loadPage() {
  document.getElementById("titleText").style.opacity = "1";
  document.getElementById("titleImage").style.opacity = "1";
}

function hoverBubble(title) {
  document.getElementById(title).style.opacity = "0.5";
}

function unhoverBubble(title) {
  document.getElementById(title).style.opacity = "1";
}

function clickBubble(title) {
  window.location = title + "/index.html"
}