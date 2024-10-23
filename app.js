console.log("xcode took 20 minutes to install,, oops");

function rgb(r, g, b) {
    return r << 16 | g << 8 | b;
}

let dots = [];
let dotlimit = 100;

const canvaselement = document.getElementById("maincanvas");
const canvasdraw = canvaselement.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;

canvaselement.height = height;
canvaselement.width = width;

function createdot() {
    // y pos, x pos, y vel, x vel, brightness
    dots.push([0, Math.floor(Math.random() * width), Math.floor(Math.random() * 10), Math.floor(Math.random() * 2), Math.floor(Math.random() * 255)]);
}

for (let i = 0; i != dotlimit; i++) {
    createdot();
    dots[i][0] = Math.floor(Math.random() * height)
}

function main() {
    canvasdraw.fillStyle = "#000000";
    canvasdraw.fillRect(0, 0, width, height);

    for (let i = 0; i != dotlimit; i++) {
        // console.log(dots[i]);
        // canvasdraw.fillStyle = rgb(dots[i][4], dots[i][4], dots[i][4]);
        canvasdraw.fillStyle = "#dddddd";
        canvasdraw.fillRect(dots[i][1] + .5, dots[i][0] + .5, 2, 2);
        dots[i][0] -= dots[i][2] / 50;
        dots[i][1] += dots[i][3] / 50;

        if (dots[i][0] < 0) {
            createdot();
        }
    }
    // console.log("------");
}

setInterval(main, 20);