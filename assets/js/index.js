let logoStroke = document.getElementsByClassName("logo_text__stroke");
let logoFill = document.getElementsByClassName("logo_text__fill");
let logoSvg = document.getElementById("logo_svg");

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let newWidth = document.documentElement.clientWidth;
let newHeight = document.documentElement.clientHeight;

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
window.onresize = function(e) {resizeLogo(e);}

function scrollFunction() {
  if (document.body.scrollTop > 76 || document.documentElement.scrollTop > 76) {
    for (let child of document.getElementById("header-menu").children) {
        child.style.padding = "30px 30px 0px";
    }
  } else {
    for (let child of document.getElementById("header-menu").children) {
        child.style.padding = "60px 30px 0px";
    }
  }
}

function resizeLogo (e) {
  newWidth = document.documentElement.clientWidth;
  newHeight = document.documentElement.clientHeight;

  let logoWidth = (newWidth / width) * logoSvg.clientWidth;
  let logoHeight = (newHeight / height) * logoSvg.clientHeight;

  logoSvg.setAttribute("width", logoWidth);
  logoSvg.setAttribute("height", logoHeight);

  width = newWidth;
  height = newHeight;
}