let body = document.querySelector("body");
let heading = document.querySelector(".logo-heading");
let textBox = document.createElement("input");
var nav = document.querySelector(".nav");
var navLink = nav.querySelectorAll(".nav-link");
let busPic = document.querySelector(".intro").querySelector("img");

//Picture changes as page scrolls
document.addEventListener("scroll", e => {
  if (e.timeStamp / 100 < 376) {
    document
      .querySelectorAll(".content-section")[0]
      .querySelector("img").style.width =
      `${Math.round(e.timeStamp / 100)}` + "px";
    document
      .querySelectorAll(".content-section")[0]
      .querySelector("img").style.height =
      `${Math.round(e.timeStamp / 100)}` + "px";
  }
});
//Second picture changes when double clicked
document
  .querySelectorAll(".content-section")[1]
  .querySelector("img")
  .addEventListener("dblclick", e => {
    if (e.timeStamp / 100 < 376) {
      document
        .querySelectorAll(".content-section")[1]
        .querySelector("img").style.width =
        `${Math.round(e.timeStamp / 100)}` + "px";
      document
        .querySelectorAll(".content-section")[1]
        .querySelector("img").style.height =
        `${Math.round(e.timeStamp / 100)}` + "px";
    }
  });
//Background color changed based on mouse coordinates
body.addEventListener("mousemove", e => {
  body.style.background = `rgb(${Math.round(e.screenX / 3)},${Math.round(
    e.screenY / 3
  )},${Math.round(e.screenY / 2)})`;
});
//Add h1 editing textbox:
textBox.style.display = "none";
document.querySelector(".nav-container").prepend(textBox);
//Change title:
let editTitle = function() {
  this.style.display = "none";
  textBox.style.display = "inline";
  textBox.select();
  textBox.onblur = e => {
    this.innerHTML = textBox.value;
    this.style.display = "inline";
    e.target.style.display = "none";
    return blank();
  };
  //Press enter to update title:
  textBox.addEventListener("keydown", e => {
    if (e.keyCode == 13) {
      heading.innerHTML = textBox.value;
      heading.style.display = "inline";
      e.target.style.display = "none";
    }
    return blank();
  });
  blank = function() {
    if (heading.innerHTML == "") {
      heading.innerHTML = "Click Me!";
    }
    return;
  };
  return;
};
//Change title when clicking on it
heading.onclick = editTitle;
//Remove load from links in navbar
navLink.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});
//Change border and background color when moving mouse over bus picture:
busPic.onmouseenter = function(e) {
  e.target.style.border = "10px solid white";
  return;
};
busPic.onmouseleave = function(e) {
  e.target.style.border = "10px dashed black";
  return;
};
busPic.onmousemove = function(e) {
  e.stopPropagation();
  body.style.background = `rgb(${Math.round(e.pageX / 4)},${Math.round(
    e.pageY - 70
  )},${Math.round(e.pageY - 70)})`;
  if (e.pageX > 559 && e.pageX < 778 && (e.pageY > 177 && e.pageY < 269)) {
    e.target.style.border = "10px solid #ffd800";
  } else {
    e.target.style.border = "10px solid white";
  }
};
//Add paragraph element with breakdown of event listeners on page when page is loaded:
window.onload = e => {
  var p = document.createElement("p");
  var newP = document.querySelector(".intro").appendChild(p);
  newP.innerHTML = `I'm a new paragraph! I was created when the page was loaded. Let me introduce you to my buddies, the Events:
  <!==// Types of event listeners used:
  // Scroll
  // Double Click
  // Mousemove
    // mousemove
  // onClick
    // click/preventDefault();
  // KeyDown
  // Select
  // onblur
  // mouseenter
  // mouseleave
  //load==>
  <br><br>Types of event listeners used on this page:<br>
  <br>1.) Load-The fact that you can read this is proof that my event listener works!
  <br>2.) MouseMove-The background color is determined by the X and Y coordinates of the mouse
  <br>--TOP-LEFT:Black; BOTTOM-RIGHT:WHITE; BOTTOM-LEFT:BLUE; TOP-RIGHT:Red;--
  <br>3.) Click-Click my h1 title and you can change it to whatever you want!
  <br>--Just don't leave it blank or you will break the page!--
  <br>4.) KeyDown-If you press enter after changing the title is will display your new title.
  <br>5.) Blur-Or you can click away instead of pressing enter.
  <br>6.) Select-If you click on the title again, the entire title will be preselected/highlighted.
  <br>7.) MouseEnter-When the mouse enters the school bus picture, the border changes for the picture.
  <br>---It's worth noting, the border is special when hovering over the school bus part of the picture too!
  <br>8.) MouseLeave-When the mouse leaves the school bus picture, the border changes again.
  <br>9.) Scroll-The first picture after the school bus changes size based on how long ago the page was loaded and the last scroll.
  <br>10.) DoubleClick-The next picture also varies in size based on how long ago the page was loaded, but updates only when double clicked. 
  <br><br> stopPropogation()
  <br> -Used inside of the busPic to have a varying background color while the mouse moves inside of the pic.  
  <br><br> preventDefault()
  <br> -This is used to prevent the nav links from reloading the page.  
`;
};
