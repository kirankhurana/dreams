let scene, camera, renderer, controls;

function init() {
    //scene
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;
    //camera
  camera = new THREE.PerspectiveCamera(45, width/height, 10, 2500);
  camera.position.z = 700;
  camera.position.y = 0;
  scene.add(camera);
    //renderer
  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
    //controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  document.body.appendChild(renderer.domElement);
}

  // cubemap
    //CURRENT CUBEMAP MADE USING ONLINE GENERATOR (https://jonaszeitler.se/cubemap-toastmap-generator/)
    //I will make my own cubemap for this project
function map(){
  scene.background = new THREE.CubeTextureLoader()
    .setPath( 'final/' )
    .load( [
      'px.png',
      'nx.png',
      'py.png',
      'ny.png',
      'pz.png',
      'nz.png'



    ] );
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update(); 
  }

init();
map();
animate();

window.addEventListener('resize', function() {
  init();
  });

