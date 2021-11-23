let posX;
let posY;

let velX;
let velY;

let radius;

let circleClr;

//UI

let sliderHue;
let clickCounter;

function setup() {
    let myCanvas = createCanvas(600, 600);
    myCanvas.parent ('canvasParent');

    colorMode (HSB, 360, 100, 100);
    sliderHue = createSlider (1, 120, 35, 1);
    sliderHue.parent ('canvasUI');
    sliderHue.style('width', '600px')

    posX = width/2;
    posY = height/2;

    velX = 1;
    velY = 1;

    radius = 50;
    circleClr = color(255, 241, 230);

    clickCounter = 0;
}

function draw() {
    background (60, 10, 100);
    fill(255, 0, 100);
    stroke(175, 15, 90);
    strokeWeight(2);
    rect(5, 5, 70, 30);

    textSize(20);
    fill(1, 1, 0);
    text(clickCounter, 12, 27);

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