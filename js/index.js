// Your code goes here
// <header class="main-navigation">
//   <div class="container nav-container">
//     <h1 class="logo-heading">Fun Bus</h1>
let body = document.querySelector("body");
let heading = document.querySelector(".logo-heading");
let textBox = document.createElement("input");

body.addEventListener("mousemove", e => {
  body.style.background = `rgb(${Math.round(e.pageX / 3)},${Math.round(
    e.pageY / 3
  )},${Math.round(e.pageY / 3)})`;
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
  if (
    e.clientX > 559 &&
    e.clientX < 778 &&
    (e.clientY > 177 && e.clientY < 269)
  ) {
    e.target.style.border = "10px solid #ffd800";
  } else {
    e.target.style.border = "10px solid white";
  }
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
