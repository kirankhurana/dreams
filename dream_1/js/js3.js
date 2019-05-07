let monsters = document.querySelectorAll('.mask');
let xBrowserRatio;
let yBrowserRatio;
//update position of cursor
function look (xPos, yPos) {
  let xRotation = 45 - Math.ceil(yPos / yBrowserRatio); // half the scaled rotation value
  let yRotation = -45 + Math.ceil(xPos / xBrowserRatio);
    for (let i = 0; i < monsters.length; i++) {
      monsters[i].style.transform = 'rotateX('+xRotation+'deg)'+''+'rotateY('+yRotation+'deg)';
  } 
}
//get cursor position
function mouse(event) {
  let xPos = event.clientX; 
  let yPos = event.clientY; 

  look(xPos, yPos);
}

//wind function combined with function gathering current location of cursor
window.addEventListener('mousemove', mouse);


// ask about this
function scaleRatio() {
  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;

  xBrowserRatio = browserWidth / 180; 
  yBrowserRatio = browserHeight / 180; //you choose the maximum degree it will turn to
}

window.addEventListener('load', scaleRatio);

//