//scroll to top for load screen
// window.location.className ="loadingContainer";
// window.location.hash='loadingContainer';
// window.scrollTo(0, 0);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let parent = document.querySelector('.menu-section').parentElement;

while (parent) {
  const hasOverflow = getComputedStyle(parent).overflow;
  // if (hasOverflow !== 'visible') {
  //   console.log(hasOverflow, parent);
  // }
  parent = parent.parentElement;
}
document.querySelector('.all').style.display = "hidden";

function afterTopLoad() {
  let userAgent = navigator.userAgent,
    browserName;
  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }
  return browserName;
}
/* ---------- mens der testes --------- */
// let stop = document.getElementsByTagName("body")[0];
// const stop = document.querySelector("body");
// stop.style.overflow = "auto"; //slet mig
// setTimeout(() => {
//   stop.style.overflow = "auto";
//   stop.style.height = "100%";
// }, 10000);
// window.scrollTo(0, 1);
/* --------- end mens der testes -------- */

//holder styr på cursoren når man panorer rundt over snowflakes
let cursor = document.getElementById('cursor');
window.onmousemove = function (e) {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
}

function reloadCss() {
  var links = document.getElementsByTagName("link");
  for (var cl in links) {
    var link = links[cl];
    if (link.rel === "stylesheet")
      link.href += "";
  }
}

function calcpage() {
  try {
    // reloadCss();
    // Prøver at få styr på snebaggrund og kasserne
    let containerOfSnow = document.getElementsByClassName('containerOfSnow')[0],
      flakerow = document.getElementsByClassName("row")[0],
      flakeHeight = flakerow.clientHeight,
      flakeWidth = flakerow.children[0].clientWidth,
      body = document.body,
      html = document.documentElement,
      height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    startFlakes = document.getElementsByClassName("topContainer")[0].clientHeight + document.getElementsByClassName("menu-section")[0].clientHeight + 30; //find the top of the snowflake background
    bodyCards = document.getElementsByClassName("bodyCards")[0];
    containerOfSnowHeight = Math.max(containerOfSnow.offsetHeight, bodyCards.offsetHeight);// get the tallest of containerOfSnow or bodyCards


    bodyCards.style.height = containerOfSnowHeight + "px";
    containerOfSnow.style.height = (containerOfSnowHeight + (16 * (7 + 12))) + "px"; // 7em som containerOfSnow starter over bodyCards + 12em for at komme lidt under den sidste boks

    // containerOfSnow.style.top = startFlakes + "px"; //set the top of snowflakes
    let xtraFlakes = 1; // ekstra lines of snowflakes under the last box
    // let antalFlakeRows = Math.ceil(height / flakeHeight) + xtraFlakes; // how many snowflakes to the cover under the boxes
    let antalFlakeRows = Math.ceil(containerOfSnowHeight / flakeHeight * 1.75) + xtraFlakes; // how many snowflakes to the cover under the boxes (the flakes overlap that why the 1.75)
    // console.log("antalFlakeRows", antalFlakeRows);

    let antalFlakesPrRow = Math.ceil(window.outerWidth / flakeWidth); //get the amount of snowflakes in a row
    // console.log("antalFlakesPrRow", antalFlakesPrRow);
    // let cardsAreaHeight = bodyCards.clientHeight; // the height of the main area of boxes
    let introHeight = document.getElementsByClassName("topContainer")[0].clientHeight; // the height of the intro area (img fullscreen start of page)

    // make the rows of snowflakes in the background

    for (x = 0; x < antalFlakeRows; x++) {
      let flake_Row = document.createElement('div');
      flake_Row.className = "row";
      flake_Row.style.zIndex = "20000";
      for (i = -1; i < antalFlakesPrRow; i++) { // for at passe i siden på safari
        let snowFlake = document.createElement('div');
        snowFlake.className = "snowflake"
        flake_Row.appendChild(snowFlake)
      }
      containerOfSnow.appendChild(flake_Row)
    }
    let browserName = afterTopLoad();
    if (browserName == "safari") {
      document.getElementsByClassName("orgrow")[0].style.transform = "translateY(0)"
    }

    document.getElementById("testbox").innerHTML = "height:" + height + "\nintroHeight:" + introHeight
  } catch (error) {
    console.log("calcpage error:", error);
  }
}
calcpage();


// function isTheTopImagesLoaded(images) {
//   // console.log("isTheTopImagesLoaded is loaded");
//   for (var x = 0; x < images.length; x++) {
//     var isLoaded = images[x].complete && images[x].naturalHeight !== 0;
//   }
//   if (!isLoaded) {
//     // console.log("images still need to be loaded");
//     isTheTopImagesLoaded(images)
//   }
//   else {
//     setTimeout(() => {
//       // console.log("should show the page...");
//       document.querySelector(".toploading").style.display = "none";
//       document.querySelector('.all').style.visibility = "visible";
//       // document.querySelector('.all').style.display = "flexbox";
//       document.querySelector('.largeImage').style.display = "none";
//     }, 100);
//   }
// }

// window.addEventListener("load", event => {
//   let images = document.querySelectorAll('.topContainer img');
//   isTheTopImagesLoaded(images);
// })



