webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
webcam.attach("camera");

function Take_Snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="image_captured" src="' + data_uri + '"/>'
    });
};

console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier("", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded successfully");
};