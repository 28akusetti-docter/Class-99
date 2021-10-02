// var SpeechRecognition = window.webkitSpeechRecognition; 
// var recognition = new SpeechRecognition();
// function start(){
//     document.getElementById("textbox").innerHTML=""
//     recognition.start()
// }
// recognition.onresult=function(event){
//     console.log(event)
//     var content=event.results[0][0].transcript
//     document.getElementById("textbox").innerHTML=content
// }
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
 recognition.onresult = function (event) {
    console.log(event.results[0][0].transcript);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    speak()
} 
function speak(){
    var synth=window.speechSynthesis
    speakdata=document.getElementById("textbox").value
    var utter=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utter)
    Webcam.attach(camera)
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})