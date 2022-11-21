function preload() {
}

function setup() {
    canvas = createCanvas(64, 480);
    canvas.position(110, 150);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 1000, 1000, 1000, 1000);
    tint(tint_color)
}

function take_snapshot(){
    save("This_person_has_a_big_face.png")
}

