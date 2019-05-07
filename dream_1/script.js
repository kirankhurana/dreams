let monsters = document.querySelectorAll('.mask');
let xRatio;
let yRatio;
//scale ratio / maximum degree
function scale(){
	let width = window.innerWidth;
	let height = window.innerHeight;

	xRatio = width /180; //maximum degree it will turn to 
	yRatio = height/180;
}
window.addEventListener('load',scale);
//update position of cursor
function mouse(event){
	let x = event.clientX;
	let y = event.clientY;
	look(x,y);
}
//rotation
function look(x,y){
	let xRotation = 90 - Math.ceil(y / yRatio); 
	let yRotation = -90 + Math.ceil(x / xRatio);
		for (let i = 0; i < monsters.length; i++){
			monsters[i].style.transform = 'rotateX(' + xRotation + 'deg)'+''+'rotateY('+ yRotation +'deg)';
		}
	}
//combine cursor position with function
window.addEventListener('mousemove',mouse);


