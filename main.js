function setup(){
   canvas = createCanvas(279,211);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bPnzmBL_q/model.json',modelLoaded)
}

function modelLoaded(){
    console.log('model has been loaded :)');
}

function draw(){
image(video ,0,0,279,211);
classifier.classify(video,gotResults);
}


function gotResults(error,results){

    if (error) {

 console.error(error);
    }else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;  
        document.getElementById("result_object_acc-").innerHTML = results[0].confidence.toFixed(3);  
    }
}















