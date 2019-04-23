const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');
//
let width;
let height;
const scale = window.devicePixelRatio;
//
function setup(){
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.style.width = width + 'px';
	canvas.style.height = height +'px';
	canvas.width = width*scale;
	canvas.height = height*scale;
	context.scale(scale,scale);
	}

function energy(){
    let pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    let pixelData = pixels.data;
    for (let i = 0; i < pixelData.length; i += 44) {
   		pixelData[i] = Math.floor(Math.random() * 0); // red
    	pixelData[i + 1] = Math.floor(Math.random() * 0); // green
        pixelData[i + 2] = Math.floor(Math.random() * 255); // blue
        pixelData[i + 3] = 255; //alpha
		}
    context.putImageData(pixels,0,0); 
    //requestAnimationFrame(energy);
	}

setup();

window.addEventListener('mousemove', energy);
window.addEventListener('resize', function() {
	setup();
	});

