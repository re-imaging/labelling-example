let img;
let diagram_button, sensor_button, unsure_button;
let x, y;
let imageList =

  ['56562.jpg', '38244.jpg', '77972.jpg', '36854.jpg', '129597.jpg', '49261.jpg', '45166.jpg',
  '6234.jpg', '153040.jpg', '139856.jpg', '102597.jpg', '124945.jpg', '172425.jpg', '44472.jpg', '111245.jpg',
  '108460.jpg', '100930.jpg', '80323.jpg', '43216.jpg', '57456.jpg', '147305.jpg', '27003.jpg', '62943.jpg',
  '170697.jpg', '161153.jpg', '5765.jpg', '156364.jpg', '164368.jpg', '19289.jpg', '64841.jpg', '64159.jpg',
  '135194.jpg', '22310.jpg', '33062.jpg', '88809.jpg', '150958.jpg', '133703.jpg', '27731.jpg', '18093.jpg',
  '127862.jpg', '161580.jpg', '17403.jpg', '60238.jpg', '63035.jpg', '18595.jpg', '124903.jpg', '121213.jpg',
  '19967.jpg', '90834.jpg', '7692.jpg', '16398.jpg', '11905.jpg', '134224.jpg', '108140.jpg', '133089.jpg',
  '41143.jpg', '22011.jpg', '138808.jpg', '19789.jpg', '41253.jpg', '159528.jpg', '31444.jpg', '19209.jpg',
  '158361.jpg', '162889.jpg', '34999.jpg', '19158.jpg', '16795.jpg', '169317.jpg', '9467.jpg', '145409.jpg',
  '125292.jpg', '161772.jpg', '5600.jpg', '149106.jpg', '133217.jpg', '154580.jpg', '153856.jpg', '39624.jpg',
  '81734.jpg', '121848.jpg', '159687.jpg', '6875.jpg', '107188.jpg', '10263.jpg', '100418.jpg', '113725.jpg',
  '116863.jpg', '88950.jpg', '166435.jpg', '135180.jpg', '81674.jpg', '12318.jpg', '94606.jpg', '119145.jpg',
  '161294.jpg', '41640.jpg', '55685.jpg', '171118.jpg', '512.jpg']

// let imageList =
//   ["512.jpg", "5600.jpg", "5765.jpg",
//   "6234.jpg", "6875.jpg", "7692.jpg"]

let accreditations = []

let counter = 0;

let total_d = 0;
let total_s = 0;
let total_u = 0;

let lastAction = "";

let bComplete = false;

let results = {};
let namekeys = {
  0: "diagram",
  1: "sensor",
  2: "unsure"
};

function setup() {
  var cnv = createCanvas(800, 3000);
  cnv.position(0, 65);
//  cnv.parent('sketch-holder');

  img = loadImage("images/".concat(imageList[counter]));

  x = 10;
  y = 65;

  diagram_button = createButton('diagram');
  diagram_button.position(x, y);
  diagram_button.size(200, 50);
  diagram_button.mousePressed(assign_diagram);
  x += 200;

  sensor_button = createButton('sensor');
  sensor_button.position(x, y);
  sensor_button.size(200, 50);
  sensor_button.mousePressed(assign_sensor);
  x += 200;

  unsure_button = createButton('unsure');
  unsure_button.position(x, y);
  unsure_button.size(200, 50);
  unsure_button.mousePressed(assign_unsure);

  unsure_button = createButton('download results as csv');
  unsure_button.id('download_link');
  unsure_button.position(10, 725);
  unsure_button.size(400, 50);
  unsure_button.mousePressed(download_csv);
}

function download_csv() {
  console.log("downloading data")

  // organise results into name,label
  var csvContent = ""
  for(var key in results) {
      var value = results[key];
      csvContent += key.concat(",").concat(namekeys[value]).concat("\n");
    }

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
  element.setAttribute('download', "labelling_data.csv");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}

function assign_diagram() {
  console.log("assign diagram");
  results[imageList[counter]] = 0;
  if(!bComplete) {
    total_d += 1;
  }
  next_image();
}

function assign_sensor() {
  console.log("assign sensor");
  results[imageList[counter]] = 1;
  if(!bComplete) {
    total_s += 1;
  }
  next_image();
}

function assign_unsure() {
  console.log("assign unsure");
  results[imageList[counter]] = 2;
  if(!bComplete) {
    total_u += 1;
  }
  next_image();
}

function next_image() {
  if (counter < imageList.length - 1) {
    counter += 1;
    img = loadImage("images/".concat(imageList[counter]));
  } else {
    img = loadImage("blank.jpg")
    bComplete = true;
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    console.log("current results")
    console.log(results)
  } else {
    console.log("some other key pressed")
  }
}

function draw() {
  background(255);
  // image(img, 20, 40, img.width, img.height);
  
  let x = 512;
  let y = 512;
  let ratio = img.height / img.width;
  let xBigger = img.width > img.height ? true : false;
  
//  let verbose = true;
  let verbose = false;
  
  if(verbose) {
    console.log("xBigger: ".concat(xBigger));
    console.log("img.width: ".concat(img.width));
    console.log("img.height: ".concat(img.height));
  }
  
  // resize image based on which axis is bigger
  if(xBigger) {
    if(true) {
      x = 512;
      y = 512 * (img.height / img.width);
    }
  } else {
    if(true) {
      y = 512;
      x = 512 * (img.width / img.height);
    }
  }
  if(verbose) {
    console.log("x: ".concat(x));
    console.log("y: ".concat(y));
  }
  
  image(img, 10, 80, x, y);

  if(true) {
    text(str(counter + 1).concat(" / ").concat(imageList.length), 20, 760)
  }

  let ypos = 750 + 50;
  for(var key in results) {
    var value = results[key];
    text(key.concat(": ").concat(namekeys[value]), 20, ypos)
    ypos += 20;
  }
  // text(results, 20, img.height + 30);

  // let total_d
  text("// totals", 256, 800);
  text("diagram: ".concat(total_d), 256, 820);
  text("sensor: ".concat(total_s), 256, 840);
  text("unsure: ".concat(total_u), 256, 860);

  if(bComplete === true) {
    text("all images labelled", 100, 100);
  }
}
