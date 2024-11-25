const bglight = "#332266";
const bgdark = "#441166";

const dotlimit = 150;
const dotsize = 2;
const dotspeed = 15;

const canvaselement = document.getElementById("maincanvas");
const canvasdraw = canvaselement.getContext("2d");

const body = document.getElementsByTagName("body")[0];
var width = body.clientWidth;
var height = body.clientHeight;

var dots = [];

function createdot() {
    // y pos, x pos, y vel, x vel, brightness
    return [height, 
        Math.floor(Math.random() * width), 
        Math.floor((height / 1000) * (Math.random() * dotspeed)), 
        Math.floor((width / 1000) * ((Math.random() * dotspeed / 2) - dotspeed / 4)), 
        Math.random()];
}

for (let i = 0; i != dotlimit; i++) {
    dots.push(createdot());
    dots[i][0] = Math.floor(Math.random() * height);
}

function main() {
    width = body.clientWidth;
    height = body.clientHeight;
    canvaselement.height = height;
    canvaselement.width = width;

    let backgrad = canvasdraw.createLinearGradient(width / 2, 0, width / 2, height);
    backgrad.addColorStop(0, bglight);
    backgrad.addColorStop(1, bgdark);
    canvasdraw.fillStyle = backgrad;
    canvasdraw.fillRect(0, 0, width, height);

    for (let i = 0; i != dotlimit; i++) {
        canvasdraw.globalAlpha = dots[i][4];
        canvasdraw.fillStyle = "#ffffff";
        canvasdraw.fillRect(dots[i][1] + .5, dots[i][0] + .5, dotsize, dotsize);
        dots[i][0] -= dots[i][2] / 50;
        dots[i][1] += dots[i][3] / 50;

        if (dots[i][0] + dotsize < 0) {
            dots[i] = createdot();
        }
    }
}

setInterval(main, 20);