// Your code goes here
// <header class="main-navigation">
//   <div class="container nav-container">
//     <h1 class="logo-heading">Fun Bus</h1>
let body = document.querySelector("body");
let heading = document.querySelector(".logo-heading");
let textBox = document.createElement("input");

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

body.addEventListener("mousemove", e => {
  body.style.background = `rgb(${Math.round(e.screenX / 3)},${Math.round(
    e.screenY / 3
  )},${Math.round(e.screenY / 2)})`;
});

textBox.style.display = "none";
document.querySelector(".nav-container").prepend(textBox);

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
heading.onclick = editTitle;

var nav = document.querySelector(".nav");
var navLink = nav.querySelectorAll(".nav-link");

navLink.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});

//     <nav class="nav">
//       <a class="nav-link" href="#">Home</a>
//       <a class="nav-link" href="#">About Us</a>
//       <a class="nav-link" href="#">Blog</a>
//       <a class="nav-link" href="#">Contact</a>
//     </nav>
//   </div>
// </header>

// <div class="container home">
//   <header class="intro">
let busPic = document.querySelector(".intro").querySelector("img");
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
    e.pageY-70
  )},${Math.round(e.pageY-70)})`;
  if (
    e.pageX > 559 &&
    e.pageX < 778 &&
    (e.pageY > 177 && e.pageY < 269)
  ) {
    e.target.style.border = "10px solid #ffd800";
  } else {
    e.target.style.border = "10px solid white";
  }
};
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
//     <img src="img/fun-bus.jpg" alt="bus in the sand">
//     <h2>Welcome To Fun Bus!</h2>
//     <p>Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.</p>
//   </header>
//   <section class="content-section">
//     <div class="text-content">
//       <h2>Let's Go!</h2>
//       <p>Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.</p>
//       <p>Expedition colorful design simple excursion blogger blogger design WordPress design, design organized website theme.</p>
//     </div>
//     <div class="img-content">
//       <img src="img/adventure.jpg" alt="Let's go on an adventure!">
//     </div>
//   </section>
//   <section class="content-section inverse-content">
//     <div class="img-content">
//         <img src="img/fun.jpg" class="img-fluid rounded" alt="Lets have fun!">
//     </div>
//     <div class="text-content">
//       <h2>Adventure Awaits</h2>
//       <p>Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.</p>
//       <p>Expedition colorful design simple excursion blogger blogger design WordPress design, design organized website theme.</p>
//     </div>

//   </section>
//   <section class="content-destination">
//     <h2>Pick Your Destination</h2>
//     <p>Expedition excursion design darn excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.</p>
//     <img src="img/destination.jpg" alt="Second slide">
//   </section>
//   <section class="content-pick">

//     <div class="destination">
//       <h4>Fun In The Sun</h4>
//       <p>Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.</p>
//       <div class="btn">Sign Me Up!</div>
//     </div>
//     <div class="destination">
//       <h4>Mountain Excursion</h4>
//       <p>Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.</p>
//       <div class="btn">Sign Me Up!</div>
//     </div>
//     <div class="destination">
//       <h4>Island Getaway</h4>
//       <p>Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.</p>
//       <div class="btn">Sign Me Up!</div>
//     </div>
//   </section>
// </div><!-- container -->

// <footer class="footer">
//   <p>Copyright Fun Bus 2018</p>
// </footer>
