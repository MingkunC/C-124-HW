noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(200, 100);

    canvas = createCanvas(500, 500);
    canvas.position(1000, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    document.getElementById("font_size").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    background('#969A97');
    fill('black');
    stroke('black');
    textSize(difference)
    text('Mingkun', noseX, noseY,);
}

function modelLoaded()
{
    console.log('Pose net loaded')
}            

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
    }
}