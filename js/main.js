$(document).ready(function() {

var $row1 = $('.row1');
var $row2 = $('.row2');
var $row3 = $('.row3');
var $row4 = $('.row4');
var $row5 = $('.row5');

var counter = 0;
var victorycounter = 0;

var $column1 = $('.column1');
var $column2 = $('.column2');
var $column3 = $('.column3');
var $column4 = $('.column4');
var $column5 = $('.column5');

var $box1 = $('#box1');
var $box2 = $('#box2');
var $box3 = $('#box3');
var $box4 = $('#box4');
var $box5 = $('#box5');
var $box6 = $('#box6');
var $box7 = $('#box7');
var $box8 = $('#box8');
var $box9 = $('#box9');
var $box10 = $('#box10');
var $box11 = $('#box11');
var $box12 = $('#box12');
var $box13 = $('#box13');
var $box14 = $('#box14');
var $box15 = $('#box15');
var $box16 = $('#box16');
var $box17 = $('#box17');
var $box18 = $('#box18');
var $box19 = $('#box19');
var $box20 = $('#box20');
var $box21 = $('#box21');
var $box22 = $('#box22');
var $box23 = $('#box23');
var $box24 = $('#box24');
var $box25 = $('#box25');

var answers = {
  "textbox3":"R",
  "textbox5":"A",
  "textbox8":"W",
  "textbox10":"G",
  "textbox12":"H",
  "textbox14":"U",
  "textbox15":"B",
  "textbox16":"I",
  "textbox17":"N",
  "textbox18":"G",
  "textbox20":"T",
  "textbox22":"G",
  "textbox23":"O",
};

var $questionone = $('.questionone');
var $questiontwo = $('.questiontwo');
var $questionthree = $('.questionthree');
var $questionfour = $('.questionfour');

var $gameBoxes = $('.game-boxes');
var $hintButton = $('.hints');
var $submitButton = $('.submit');
var $questionBox = $('.questionbox');
var $autoFill = $('.autofill');

var hints = ["Museum located in the vibrant neighborhood of Chelsea", 'Abbreviation for a popular Chelsea gallery', "A museum with four locations worldwide", "A museum located between the High Line and the Hudson River"];

var clickedBox;

$autoFill.one('click', function() {

    $box3.append('R');
    $box5.append('A');
    $box8.append('W');
    $box10.append('G');
    $box12.append('H');
    $box14.append('U');
    $box15.append('B');
    $box16.append('I');
    $box17.append('N');
    $box18.append('G');
    $box20.append('T');
    $box22.append('G');
    $box23.append('O');

    $submitButton.on('click', function() {
      $(".game-boxes input").css('background-color', 'black');
    });
});

$(".game-boxes input").on("blur", function() {
    var expectedAnswer = answers[$(this).attr("class")];
    var ourAnswer = $(this).val();

    if (expectedAnswer === ourAnswer) {
      console.log("Nice!");
      victorycounter +=1;
    } else {
      console.log("Wrong");
    }

    console.log(victorycounter)

    $submitButton.on('click', function() {

    if (expectedAnswer === ourAnswer) {
      $(".game-boxes input").css('background-color', 'black');
    } else {
      $(".game-boxes input").css('background-color', 'red');
    }
 });
});

$hintButton.on("click", function() {

    if (clickedBox <= 4) {
    alert(hints[clickedBox - 1]);

    } else {
    alert("Click on the beginning of the word for a hint!")

  };
});

$box3.on('click keydown', function() {
    clickedBox = 1;
    $gameBoxes.css("background-color","white");
    $questionBox.css('background-color','white');
    $questionone.css('background-color','');
    $column3.css('background-color','#94C7FF');
    $box3.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color','white');
    $questionone.css('background-color','#94C7FF');
    $(this).css('background-color', '#4B79A1');

    } else {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questionone.css('background-color', '#94C7FF');
    $column3.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});

$box5.on('click keydown', function() {
    clickedBox = 2;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column5.css('background-color', '#94C7FF');
    $questiontwo.css('background-color', '#94C7FF');
    $box5.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questiontwo.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');

    } else {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questiontwo.css('background-color', '#94C7FF');
    $column5.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});

$box8.on('click keydown', function() {
    clickedBox = 4;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questionfour.css('background-color', '#94C7FF');
    $row4.css('background-color','#94C7FF');
    $box8.css('background-color','#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questionfour.css('background-color', '#94C7FF');
    $column1.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');

    } else  {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questionfour.css('background-color', '#94C7FF');
    $row4.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});

$box10.on('click keydown', function() {
    clickedBox = 3;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questionthree.css('background-color', '#94C7FF');
    $row2.css('background-color', '#94C7FF');
    $box10.css('background-color', '#4B79A1');
    counter +=1;

    if (counter % 2 === 0) {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questionthree.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');

    } else  {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $questionthree.css('background-color', '#94C7FF');
    $row2.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
   }
});

$box12.on('click keydown', function() {
    clickedBox = 12;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row4.css('background-color', '#94C7FF');
    $box12.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $(this).css('background-color', '#4B79A1');

    } else  {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row4.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
   }
});

$box14.on('click keydown', function() {
    clickedBox = 14;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row2.css('background-color', '#94C7FF');
    $box14.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column3.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');

    } else  {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row2.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});

$box15.on('click keydown', function() {
    clickedBox = 15;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column3.css('background-color', '#94C7FF')
    $box15.css('background-color', '#4B79A1');
    $box15.addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $(this).css('background-color', '#4B79A1');

    } else {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column3.css('background-color', '#94C7FF')
    $(this).css('background-color', '#4B79A1');
  };
});

$box16.on('click keydown', function() {
    clickedBox = 16;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row4.css('background-color', '#94C7FF');
    $box16.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column3.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');

    } else  {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row4.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});

$box17.on('click keydown', function() {
    clickedBox = 17;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column3.css('background-color','#94C7FF');
    $box17.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $(this).css('background-color', '#4B79A1');

    } else  {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column3.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  }
});

$box18.on('click keydown', function() {
    clickedBox = 18;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row2.css('background-color', '#94C7FF');
    $box18.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $(this).css('background-color', '#4B79A1');

    } else  {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row2.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});

$box20.on('click keydown', function() {
    clickedBox = 20;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row4.css('background-color', '#94C7FF');
    $box20.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $box20.css('background-color', '#4B79A1');
    } else  {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row4.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});

$box22.on('click keydown', function() {
    clickedBox = 22;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row2.css('background-color', '#94C7FF');
    $box22.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column5.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');

    } else  {

    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $row2.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  }
});

$box23.on('click keydown', function() {
    clickedBox = 23;
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column5.css('background-color', '#94C7FF');
    $box23.css('background-color', '#4B79A1');
    $(this).addClass('selected');
    counter +=1;

    if (counter % 2 === 0) {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $(this).css('background-color', '#4B79A1');

    } else  {
    $gameBoxes.css("background-color", "white");
    $questionBox.css('background-color', 'white');
    $column5.css('background-color', '#94C7FF');
    $(this).css('background-color', '#4B79A1');
  };
});
});
