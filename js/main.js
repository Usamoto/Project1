$(document).ready(function() {

// $('#box1').attr('value', 'A')

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

var $selected = $('.selected');

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

var $boxOne = $('.boxone');

var $gameBoxes = $('.game-boxes');

var $hints = ["This is hint one", 'This is hint two', "This is hint three", "This is hint four"];

var answers = {
  "textbox1":"A",
  "textbox2":"B",
  "textbox3":"C",
  "textbox4":"D",
  "textbox5":"E",
  "textbox6":"F",
  "textbox7":"G",
  "textbox8":"H",
  "textbox9":"I",
  "textbox10":"J",
  "textbox11":"K",
  "textbox12":"L",
  "textbox13":"M",
  "textbox14":"N",
  "textbox15":"O",
  "textbox16":"P",
  "textbox17":"Q",
  "textbox18":"R",
  "textbox19":"S",
  "textbox20":"T",
  "textbox21":"U",
  "textbox22":"V",
  "textbox23":"W",
  "textbox24":"X",
  "textbox25":"Y",
};

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
 if (victorycounter === 25) {
    console.log("Congrats!")
 }
});

// var
// $(gameHints).on('click', function( {
// $hints[Math.floor(Math.random()*$hints.length)];
// });


$box1.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box1.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

  } else  {
  $column1.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');

  }

 });

$box1.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box1.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

  } else  {
  $column1.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');

  }

 });

$box2.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box2.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
   $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box2.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box2.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
   $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box3.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box3.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box3.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box3.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });


$box4.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box4.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box4.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box4.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });


$box5.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box5.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box5.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row1.css('background-color', 'yellow');
  $box5.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box6.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box6.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box6.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box6.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box7.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box7.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });


$box7.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box7.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box8.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box8.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });


$box8.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box8.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box9.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box9.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box9.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box9.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column1.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column1.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box10.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box10.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box10.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box10.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box11.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box11.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box11.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box11.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box12.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box12.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box12.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box12.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box13.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box13.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box13.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box13.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column2.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box14.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box14.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box14.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box14.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box15.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box15.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box15.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box15.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box16.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box16.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box16.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box16.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box17.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box17.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box17.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box17.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column3.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column3.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box18.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box18.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box18.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box18.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box19.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box19.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box19.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box19.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box20.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box20.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box20.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box20.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box21.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box21.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box21.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box21.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column4.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column4.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box22.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box22.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box22.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row2.css('background-color', 'yellow');
  $box22.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box23.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box23.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box23.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row3.css('background-color', 'yellow');
  $box23.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box24.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box24.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box24.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row4.css('background-color', 'yellow');
  $box24.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box25.on('click', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box25.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

$box25.on('keydown', function() {
  $gameBoxes.css("background-color", "white");
  $row5.css('background-color', 'yellow');
  $box25.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });

});

  // });
