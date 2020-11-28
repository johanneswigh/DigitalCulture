// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/Hm7_V5cHg/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
  soundFile = loadSound ('nature.wav');

}

function setup() {
  createCanvas(640, 520);
  frameRate(5);

//  sound = loadSound('beat.wav');

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);


}

function draw() {
  background(0);

  textAlign(CENTER, CENTER);

  let emoji = "🎧";
  let lyd = soundFile;
  lyd = soundFile.stop();

if (label == "Traffic") {
frameRate(0.1);
    emoji = "🚂";
    soundFile.play();
print(1);


  } else if (label == "Kids") {
frameRate(0.1);
    emoji = "🏃";
    soundFile.play();
    print(2);

  } else if (label == "Talking") {
frameRate(0.1);
    emoji = "🗣️";
    soundFile.play();
    print(3);

  }
  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);

}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}


//https://teachablemachine.withgoogle.com/models/H2NpMO0uh/model.json
