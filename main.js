video="";
status="";
objects=[];

function preload() {
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

    webcam=createCapture(VIDEO);
    webcam.hide();

}



function ModelLoaded() {
console.log("Model is Loaded");
status="true";

}
function Start() {
anything=ml5.objectDetector('cocossd',ModelLoaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
InputBox=document.getElementById("Item_Searcher");
}



function gotResult(error,results) {
    if(error) {
        console.error(error);

    }
    else{
        console.log(results);
        objects=results;
    }
    
}
