
var circle = document.querySelector(".circle");
var area = document.body;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;


function move(e){
  var mhposition =  windowWidth - e.clientX - 15;
  var mvposition = windowHeight - e.clientY - 15;

  circle.style.left = mhposition + 'px';
  circle.style.top = mvposition + 'px';
}

function change(){
  circle.style.borderStyle = "dotted";
  circle.style.backgroundColor = "#ffff4d";
}

area.addEventListener('mousemove',move,false);
circle.addEventListener('mouseenter',change,false);
circle.addEventListener('mouseleave', function(){circle.removeAttribute("style");}, false);
