noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 600)

    canvas = createCanvas(600, 600)
    canvas.position(550, 150);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FF69B4');
    fill("#ADD8E6");
    stroke("#00008B")
    square(noseX, noseY, difference);
    document.getElementById("square_sides").innerHTML = "Width and Height of the Square is  " + difference + "px";

}

function modelLoaded() {
    console.log('PoseNet Is Intialized ')

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =  " + noseX + "noseY =  " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("    leftWristX  =   " + leftWristX + "    RightwristX   =    " + rightWristX + "    difference =  " + difference);
    }

}