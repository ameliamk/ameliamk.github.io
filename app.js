console.log("xcode took 20 minutes to install,, oops");

function rgb(r, g, b) {
    return "#" + (r << 16 | g << 8 | b).toString(16);
}

let dots = [];
const dotlimit = 150;
const dotsize = 2;

const canvaselement = document.getElementById("maincanvas");
const canvasdraw = canvaselement.getContext("2d");

const body = document.getElementsByTagName("body")[0];
width = body.clientWidth;
height = body.clientHeight;

const bgdark = [102, 33, 99];
const bglight = [100, 17, 110];

function createdot() {
    // y pos, x pos, y vel, x vel, brightness
    return [height, Math.floor(Math.random() * width), Math.floor(Math.random() * 10), Math.floor(Math.random() * 2), Math.random()];
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

    backgrad = canvasdraw.createLinearGradient(width / 2, 0, width / 2, height);
    backgrad.addColorStop(0, rgb(bgdark[0], bgdark[1], bgdark[2]));
    backgrad.addColorStop(1, rgb(bglight[0], bglight[1], bglight[2]));
    canvasdraw.fillStyle = backgrad;
    canvasdraw.fillRect(0, 0, width, height);

    for (let i = 0; i != dotlimit; i++) {
        // console.log(dots[i]);
        canvasdraw.globalAlpha = dots[i][4];
        canvasdraw.fillStyle = "#ffffff";
        canvasdraw.fillRect(dots[i][1] + .5, dots[i][0] + .5, dotsize, dotsize);
        dots[i][0] -= dots[i][2] / 50;
        dots[i][1] += dots[i][3] / 50;

        if (dots[i][0] + dotsize < 0) {
            dots[i] = createdot();
        }
    }
    // console.log("------");
}

setInterval(main, 20);