let posX;
let posY;

let velX;
let velY;

let radius;

let circleClr;

let button;

//UI

let sliderHue;
let clickCounter;
let changeSize;



function setup() {
    colorMode (HSB, 360, 100, 100);
    sliderHue = createSlider (10, 120, 35, 1);
    sliderHue.parent ('canvasUI');
    sliderHue.style('width', '450px');

    createCanvas(400, 100);
    background(0);
    button = createButton('Size Up');
    button.position(540, 750);
    button.mousePressed(changeSZ);
    button.style("font-family", "VT323");
    button.size(600, 80);
    button.style("font-size", "30px");




    let myCanvas = createCanvas(600, 600);
    myCanvas.parent ('canvasParent');

    posX = width/2;
    posY = height/2;

    velX = 2;
    velY = 1.3;

    radius = 80;
    circleClr = color(255, 241, 230);

    clickCounter = 0;
}

function changeSZ() {
    let val = random(255);
    radius += 4;
}

function draw() {
    background (60, 10, 100);
    fill(60, 10, 100);
    stroke(200, 25, 80);
    strokeWeight(3);
    rect(10, 10, 100, 40);

    textSize(36);
    fill(1, 1, 0);
    text(clickCounter, 20, 40);
    textFont('VT323');

    circleClr = color(sliderHue.value(), 80, 100);
    fill(circleClr);
    strokeWeight (0);
    circle(posX, posY, radius * 2);
    if(posX + radius >= width || posX - radius <= 0) {
        velX = velX * -1;
    }
    if (posY + radius >=height || posY - radius <= 0) {
        velY = velY * -1;
    }
    posX += velX;
    posY += velY;

} // end of draw

function mouseReleased(){
    if (dist(mouseX, mouseY, posX, posY) < radius) {
        // circleClr = color(255, 80, 100);
        radius -= 3;
        clickCounter++;
        if (velX > 0) {
            velX++;
        }
        else{
            velX--;
        }
        if (velY > 0) {
            velY++;
        }
        else{
            velY--;
        }
    }
    else {
        // circleClr = color(0, 80, 100);
    }
}