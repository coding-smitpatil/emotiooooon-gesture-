
prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera= document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(dataurl){
        document.getElementById("result").innerHTML='<img id="pic" src="'+dataurl+'"/>';
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/17XA7P7Kb/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak1="first prediction is "+prediction1;
    speak2="second prediction is "+prediction2;
    var saythis = new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(saythis);
}

function check(){
    img=document.getElementById("pic");
    classifier.classify(img,getresult);
}

function getresult(error,results){
if(error){
    console.error(error);

}
else{
  console.log(results)
  prediction1=results[0].label;
  prediction2=results[1].label; 
  document.getElementById("emotion1").innerHTML=prediction1;
  document.getElementById("emotion2").innerHTML=prediction2;
  speak();

  if(prediction1=="victory")
  {document.getElementById("emoji1").innerHTML="&#9996;";}

  
  if(prediction1=="thumbs up")
  {document.getElementById("emoji1").innerHTML="&#128077";}



  
  if(prediction2=="victory")
  {document.getElementById("emoji2").innerHTML="&#9996;";}

  
  if(prediction2=="thumbs up")
  {document.getElementById("emoji2").innerHTML="&#128077";}
}

}

