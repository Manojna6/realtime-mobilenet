function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobilenet', modelLoaded);
}
function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}
function modelLoaded() {
  console.log('model loaded');
}
function gotResult(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
    document.getElementById('object_name').innerHTML = result[0].label;
    document.getElementById('object_accuracy').innerHTML = result[0].confidence.toFixed(4);
  }
}