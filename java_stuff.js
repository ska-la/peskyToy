/*------------------------ Global js place -----------------------*/
"use strict";

var curSlide = 0;
var mI;

w3IncludeHTML();

function hw02SlideShow() {
  var i;
  var es = document.getElementsByClassName("hwRev02");
  var es_m = document.getElementsByClassName("hwRev02m");
  var es_s = document.getElementsByClassName("hwRev02s");
  var bgs = document.getElementsByClassName("idBadges");
  var bgs_m = document.getElementsByClassName("idM_Badges");
  var es_l = es.length;
  for ( i = 0; i < es_l; i++ ) {
    es[i].style.display = "none";
    es_m[i].style.display = "none";
    es_s[i].style.display = "none";
    bgs[i].className = bgs[i].className.replace(" w3-white"," w3-grey");
    bgs_m[i].className = bgs_m[i].className.replace(" w3-white","");
  }
  if ( curSlide === es_l ) { curSlide = 0; }
  es[curSlide].style.display = "block";
  es_m[curSlide].style.display = "block";
  es_s[curSlide].style.display = "block";
  bgs[curSlide].className = bgs[curSlide].className.replace(" w3-grey"," w3-white");
  bgs_m[curSlide].className += " w3-white";
  curSlide++;
}

function showImg(i) {
  curSlide = i - 1;
}

mI = setInterval(hw02SlideShow, 3000);

function openRightNav() {
  document.getElementById("idRightNav").style.display = "block";
}
function closeRightNav() {
  document.getElementById("idRightNav").style.display = "none";
}

function switchToMedium(strMC) {
  var i;
  var es = document.getElementsByClassName("myContMedium");
  var es_l = es.length;
  for ( i = 0; i < es_l; i++ ) {
    es[i].style.display = "none";
  }
  document.getElementById(strMC).style.display = "block";
}

function switchTo(strMC) {
  document.getElementById(strMC).style.display = "block";
}

function openMyAccord(strAcc) {
  var e = document.getElementById(strAcc);
  if ( e.className.indexOf("w3-show") === -1 ) {
    e.className += " w3-show";
    if ( strAcc === "idVideoSmall" ) {
      document.getElementById("idVideoMedium").style.display = "block";
    }
  } else
    e.className = e.className.replace(" w3-show", "");
    if ( strAcc === "idVideoSmall" ) {
      document.getElementById("idVideoMedium").style.display = "none";
    }
}


