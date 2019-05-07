// canvas setup 
const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');
//
let width = window.innerWidth;
let height = window.innerHeight;
const scale = window.devicePixelRatio;
//
function setup(){
	canvas.style.width = width +'px';
	canvas.style.height = height +'px';
	canvas.width = width*scale;
	canvas.height = height*scale;
	context.scale(scale,scale);
	}
		//console.log(width);
		//console.log(height);
// get mouse position
function position(event) {
        let x = event.clientX;
       	console.log(x);
       	energy(x);
}
// draw to canvas
function energy(x){
	let pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    let pixelData = pixels.data;
    	for (let i = 0; i < pixelData.length; i+=114) {
        pixelData[i] = Math.floor(Math.random() * 255); // red
        pixelData[i + 1] = Math.floor(Math.random() * 0); // green
        pixelData[i + 2] = Math.floor(Math.random() * 0); // blue
        pixelData[i + 3] = 255; //  
   		}
    context.putImageData(pixels,0,0); 
    requestAnimationFrame(energy);
	}

	window.addEventListener('mousemove', position);

setup();

window.addEventListener('click', energy);
window.addEventListener('resize', function() {
	setup();
  energy();
	});


