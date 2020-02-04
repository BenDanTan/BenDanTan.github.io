function openNav() {
    document.getElementById("sidenav").style.width = "425px";
    document.getElementById("page").style.marginLeft = "425px";
  }
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("page").style.marginLeft= "0";
  }

function loadMainPage() {
  document.getElementById("titleText").style.opacity = "1";
  document.getElementById("titleImage").style.opacity = "1";

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
       document.getElementById("page").style.backgroundColor = "#121212"
       document.getElementById("header").style.opacity = "0"
       document.getElementById("sidenav").style.backgroundColor = "#333333"
       $('.bubble-text').css('background-color','#333333')
    }
    if ($(this).scrollTop() < 100) {
       document.getElementById("page").style.backgroundColor = "#333333"
       document.getElementById("header").style.opacity = "1"
       document.getElementById("sidenav").style.backgroundColor = "#121212"
       $('.bubble-text').css('background-color','#121212')
    }
 })
}

function loadProjectPage() {
    document.getElementById("titleText").style.opacity = "1";
  

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
       document.getElementById("page").style.backgroundColor = "#121212"
       document.getElementById("header").style.opacity = "0"
       document.getElementById("sidenav").style.backgroundColor = "#333333"
       $('.ProjectPage-col').css('background-color','#333333')
       $('.ProjectPage-bubble-row').css('background-color','#333333')
    }
    if ($(this).scrollTop() < 100) {
       document.getElementById("page").style.backgroundColor = "#333333"
       document.getElementById("header").style.opacity = "1"
       document.getElementById("sidenav").style.backgroundColor = "#121212"
       $('.ProjectPage-col').css('background-color','#121212')
       $('.ProjectPage-bubble-row').css('background-color','#121212')
       $('.bubble-text').css('background-color','#333333')
    }
 })
}

function loadSubProjectPage() {
  document.getElementById("page").style.backgroundColor = "#121212"
  document.getElementById("sidenav").style.backgroundColor = "#333333"
  $('.ProjectPage-bubble-row').css('background-color','#333333')
  $('.bubble-row').css('background-color','#333333')
}

function hoverBubble(title) {
  document.getElementById(title).style.opacity = "0.5";
}

function unhoverBubble(title) {
  document.getElementById(title).style.opacity = "1";
}

function clickBubble(address) {
  window.location = address
}

function goHome() {
  window.location = "http://bendantan.github.io"
}

function clickContact() {
  $('.contact-link').css('display','block')
  window.scrollBy(0,5000); 
}

function clickReflection() {
  $('.reflection').css('display','block')
  window.scrollBy(0,5000); 
}

function toggleVisible(id, code) {
  var x = document.getElementById(id);
  var y = document.getElementById(code);
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.height = "100%";
  } else {
    x.style.display = "none";
    y.style.height = "28vh";
  }
}
