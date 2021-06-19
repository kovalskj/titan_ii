const canvasWidth = 1280;
const canvasHeight = 720;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cursorPositionOutput = document.getElementById("cursor-position")

var cursorPosition = { x: 0, y: 0 };
var redStartPosition = { x: 0, y: 0 };

cursorPositionOutput.innerHTML = "x: "+ cursorPosition.x + " y: " + cursorPosition.y;

ctx.canvas.width = canvasWidth
ctx.canvas.height = canvasHeight

document.addEventListener("mousemove", moveMouse);
document.addEventListener("mousedown", startRedLine);
document.addEventListener("mouseup", mouseUp);

document.getElementById("buttonCube").addEventListener("click", addCube);
document.getElementById("buttonBoar").addEventListener("click", addBoar);

document.addEventListener("keydown", keyMove)

var sceneCamera = new Camera(100, 100, -500);
sceneCamera.showInfo();

function keyMove(e){
    if (e.code === 'KeyW'){
        sceneCamera.goForward(10);
        draw(scene);
    }
    if (e.code === 'KeyS'){
        sceneCamera.goForward(-10);
        draw(scene);
    }
    if (e.code === 'KeyA'){
        sceneCamera.goRight(10);
        draw(scene);
    }
    if (e.code === 'KeyD'){
        sceneCamera.goRight(-10);
        draw(scene);
    }
}

function moveMouse(e){
    cursorPositionOutputUpdate(e);
    if (e.buttons !== 1) return;
    sceneCamera.thetaX += 0.001 * e.movementY;
    sceneCamera.thetaY += 0.001 * e.movementX;
    draw(scene);
}

function cursorPositionOutputUpdate(e){
    cursorPosition.x = Math.min(Math.max(e.clientX - 8, 0), canvasWidth);
    cursorPosition.y = Math.min(Math.max(e.clientY - 158, 0), canvasHeight);
    cursorPositionOutput.innerHTML = "x: "+ cursorPosition.x + " y: " + cursorPosition.y;

    if (e.buttons !== 1) return;
    ctx.beginPath();
    ctx.moveTo(redStartPosition.x, redStartPosition.y);
    ctx.lineTo(cursorPosition.x, cursorPosition.y);

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
}

function startRedLine(e){
    redStartPosition.x = cursorPosition.x
    redStartPosition.y = cursorPosition.y
}

function mouseUp(e){

    //ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}


var test_cube = new Cube(0, 0, 0, 100);

var scene = [test_cube];

function addCube(){
    var x = document.getElementById("x-input").value;
    var y = document.getElementById("y-input").value;
    var z = document.getElementById("z-input").value;
    scene.push(new Cube(x, y, z, 20));
    draw(scene);
}

function addBoar(){
    var x = document.getElementById("x-input").value;
    var y = document.getElementById("y-input").value;
    var z = document.getElementById("z-input").value;
    scene.push(new Boar(x, y, z));
    draw(scene);
}

function draw(objects){
    var sceneSize = objects.length;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    document.getElementById("objectsList").innerHTML = "";

    for (let i = 0; i < sceneSize; i++){
        objects[i].drawLinesIn3D();
        document.getElementById("objectsList").innerHTML += "<li>object " + i + ": " +  objects[i].getInfo() + "</li>";
    }
    sceneCamera.showInfo();
}
