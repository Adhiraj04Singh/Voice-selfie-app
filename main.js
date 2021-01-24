var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").value = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").value = content;
    if (content == "take my selfie") {
        speak();
    }
    console.log(content);
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata = "taking selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    console.log(utterthis);
    console.log(speakdata);
    Webcam.attach(cam);
    setTimeout(function() {
        take_snap();
        Save();
    }, 5000);
}
var cam = document.getElementById("webcam_show");
Webcam.set({
    width: 335,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
});

function take_snap() {
    Webcam.snap(function(img_url) {
        document.getElementById("selfie_result").innerHTML = "<img id='selfie' src='" + img_url + "'>"
    });
}

function Save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}