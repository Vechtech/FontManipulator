noseX = 0;
noseY = 0;
right_wristX = 0;
left_wristX = 0;
difference = 0;
function setup(){
  canvas = createCanvas(400,250);
  canvas.position(800,300);
  video = createCapture(VIDEO);
  video.position(300,300);
  video.size(400,250);
  posenet = ml5.poseNet(video,modelloaded);
  posenet.on('pose',gotposes);
 }

 function modelloaded(){
   console.log("model has loaded");
 }

 function gotposes(results){
   if(results.length>0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    left_wristX = results[0].pose.leftWrist.x;
    right_wristX = results[0].pose.rightWrist.x;
    difference = floor(left_wristX - right_wristX);
   }
 }

function draw(){
  background("cyan");
  document.getElementById("size").innerHTML = difference + "px";
  input_t = document.getElementById("input_text").value;
  input_c = document.getElementById("input_color").value;
  if(input_t.length==0){
    input_t="Hello World";
  }
  fill(input_c);
  textSize(difference);
  text(input_t,noseX,noseY);
}
