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
// draw to canvas
function energy(){
	let pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    let pixelData = pixels.data;
    	for (let i = 0; i < pixelData.length; i+=6) {
        pixelData[i] = Math.floor(Math.random() * 0); // red
        pixelData[i + 1] = Math.floor(Math.random() * 0); // green
        pixelData[i + 2] = Math.floor(Math.random() * 255); // blue
        pixelData[i + 3] = 255; //  
   		}
    context.putImageData(pixels,0,0); 
    requestAnimationFrame(energy);
}
setup();
window.addEventListener('click', energy);


