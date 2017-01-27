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


var $questionone = $('.questionone');
var $questiontwo = $('.questiontwo');
var $questionthree = $('.questionthree');
var $questionfour = $('.questionfour');
var $questionfive = $('.questionfive');
var $questionsix = $('.questionsix');
var $questionseven = $('.questionseven');

var $boxOne = $('.boxone');

var $gameBoxes = $('.game-boxes');

var $hintButton = $('.hints');
var $submitButton = $('.submit');


var $questionBox = $('.questionbox');

var hints = ["This is hint one", 'This is hint two', "This is hint three", "This is hint four"];

var submitCorrect = ["Congrats! You completed the crossword puzzle!"]

var clickedBox;

var answers = {
  "textbox1":"",
  "textbox2":"",
  "textbox3":"R",
  "textbox4":"",
  "textbox5":"A",
  "textbox6":"",
  "textbox7":"",
  "textbox8":"W",
  "textbox10":"G",
  "textbox11":"",
  "textbox12":"H",
  "textbox13":"",
  "textbox14":"U",
  "textbox15":"B",
  "textbox16":"I",
  "textbox17":"N",
  "textbox18":"G",
  "textbox19":"",
  "textbox20":"T",
  "textbox21":"",
  "textbox22":"G",
  "textbox23":"O",
  "textbox24":"",
  "textbox25":"",
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

 if (victorycounter === 13) {
    $(".game-boxes input").css('background-color', 'black');
 }

});

$hintButton.on("click", function() {
  alert(hints[clickedBox - 1]);
});

// $submitButton.on("click", function() {
//   alert(submitCorrect[victorycounter === 13]);
// });

// $box1.on('click keydown', function() {
//   clickedBox = 1;
  $gameBoxes.css('background-color', 'white');
//   $questionBox.css('background-color', 'white');
//   $questionone.css('background-color', '#FFD855');
//   $row1.css('background-color', '#FFD855');
//   $box1.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', '#FFD855');
//   $row1.css('background-color', 'white');
//   $(this).css('background-color', 'green');
//   $questionone.css('background-color', '#FFD855');


//   } else  {
//   $column1.css('background-color', 'white');
//   $row1.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//   $questionone.css('background-color', '#FFD855');


//   }
//  });


// $box2.on('click keydown', function() {
//   clickedBox = 2;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $questiontwo.css('background-color', '#FFD855');
//   $row1.css('background-color', '#FFD855');
//   $box2.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column2.css('background-color', '#FFD855');
//   $row1.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column2.css('background-color', 'white');
//   $row1.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

$box3.on('click keydown', function() {
  clickedBox = 3;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', '#FFD855');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', 'white');
  $row1.css('background-color', 'white');
  $(this).css('background-color', 'green');

 };

//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $questionthree.css('background-color', '#FFD855');
//   $box3.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column3.css('background-color', '#FFD855');
//   $row1.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column3.css('background-color', 'white');
//   $row1.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

  });


// $box4.on('click keydown', function() {
//   clickedBox = 4;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $questionfour.css('background-color', '#FFD855');
//   $row1.css('background-color', '#FFD855');
//   $box4.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column4.css('background-color', '#FFD855');
//   $row1.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column4.css('background-color', 'white');
//   $row1.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });


$box5.on('click keydown', function() {
  clickedBox = 5;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row1.css('background-color', '#white');
  $column5.css('background-color', '#FFD855');
  $questionfive.css('background-color', '#FFD855');
  $box5.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column5.css('background-color', 'white');
  $row1.css('background-color', '#white');
  $box5.css('background-color', 'green');
 };
  // $row1.css('background-color', 'white');
  // $(this).css('background-color', 'green');

  //   } else  {
  // $column5.css('background-color', '#FFD855');
  // $row1.css('background-color', '#FFD855');
  // $(this).css('background-color', 'green');
  //  }

  });

// $box6.on('click keydown', function() {
//   clickedBox = 6;
//   $gameBoxes.css("background-color", "white");
//   $row2.css('background-color', '#FFD855');
//   $questionBox.css('background-color', 'white');
//   $questionsix.css('background-color', '#FFD855');
//   $box6.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', '#FFD855');
//   $row2.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column1.css('background-color', 'white');
//   $row2.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

// $box7.on('click keydown', function() {
//   clickedBox = 7;
//   $gameBoxes.css("background-color", "white");
//   $row3.css('background-color', '#FFD855');
//   $questionBox.css('background-color', 'white');
//   $questionseven.css('background-color', '#FFD855');
//   $box7.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color','#FFD855');
//   $row3.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column1.css('background-color', 'white');
//   $row3.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

$box8.on('click keydown', function() {
  clickedBox = 8;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row4.css('background-color', '#FFD855');
  $box8.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column1.css('background-color', '#FFD855');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column1.css('background-color', 'white');
  $row4.css('background-color', '#FFD855');
  $(this).css('background-color', 'green');
   }

  });

// $box9.on('click keydown', function() {
//   // $gameBoxes.css("background-color", "white");
//   clickedBox = 9;
//   $row5.css('background-color', '#FFD855');
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $box9.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', '#FFD855');
//   $row5.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column1.css('background-color', 'white');
//   $row5.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

$box10.on('click keydown', function() {
  clickedBox = 10;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column2.css('background-color', 'white');
  $row2.css('background-color', '#FFD855');
  $(this).css('background-color', 'green');
  counter +=1;


  // $gameBoxes.css("background-color", "white");
  // $questionBox.css('background-color', 'white');
  // $row2.css('background-color', '#FFD855');
  // $box10.css('background-color', 'green');
  // $(this).addClass('selected');
  // counter +=1;

  if (counter % 2 === 0) {
  // $column2.css('background-color', '#FFD855');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');
  };

  //   } else  {
  // $column2.css('background-color', 'white');
  // $row2.css('background-color', '#FFD855');
  // $(this).css('background-color', 'green');
  //  }

  });

// $box11.on('click keydown', function() {
//   // clickedBox = 11;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $row3.css('background-color', '#FFD855');
//   $box11.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column2.css('background-color', '#FFD855');
//   $row3.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column2.css('background-color', 'white');
//   $row3.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

$box12.on('click keydown', function() {
  clickedBox = 12;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row4.css('background-color', '#FFD855');
  $box12.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column2.css('background-color', 'white');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

  };
  //   } else  {
  // $column2.css('background-color', 'white');
  // $row4.css('background-color', '#FFD855');
  // $(this).css('background-color', 'green');
  //  }

  });

// $box13.on('click keydown', function() {
//   clickedBox = 13;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $row5.css('background-color', '#FFD855');
//   $box13.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column2.css('background-color', '#FFD855');
//   $row5.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column2.css('background-color', 'white');
//   $row5.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

$box14.on('click keydown', function() {
  clickedBox = 14;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row2.css('background-color', '#FFD855');
  $box14.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', '#FFD855');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', 'white');
  $row2.css('background-color', '');
  $(this).css('background-color', 'green');
   }

  });

$box15.on('click keydown', function() {
  clickedBox = 15;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row3.css('background-color', 'white');
  $column3.css('background-color', '#FFD855')
  $box15.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', 'white');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');

  };
  });

$box16.on('click keydown', function() {
  clickedBox = 16;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row4.css('background-color', '#FFD855');
  $box16.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', '#FFD855');
  $row4.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', 'white');
  $row4.css('background-color', '#FFD855');
  $(this).css('background-color', 'green');
   }

  });

$box17.on('click keydown', function() {
  clickedBox = 17;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row5.css('background-color', 'white');
  $column3.css('background-color', '#FFD855');
  $(this).css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column3.css('background-color', 'white');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');
  };
  //   } else  {
  // $column3.css('background-color', 'white');
  // $row5.css('background-color', '#FFD855');
  // $(this).css('background-color', 'green');
  //  }

  });

$box18.on('click keydown', function() {
  clickedBox = 18;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row2.css('background-color', '#FFD855');
  $box18.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  // $column4.css('background-color', '#FFD855');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

  };
  //   } else  {
  // $column4.css('background-color', 'white');
  // $row2.css('background-color', '#FFD855');
  // $(this).css('background-color', 'green');
  //  }

  });

// $box19.on('click keydown', function() {
//   clickedBox = 19;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $row3.css('background-color', '#FFD855');
//   $box19.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column4.css('background-color', '#FFD855');
//   $row3.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column4.css('background-color', 'white');
//   $row3.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

$box20.on('click keydown', function() {
  clickedBox = 20;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row4.css('background-color', '#FFD855');
  $box20.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row4.css('background-color', 'white');
  $box20.css('background-color', 'green');
  };
  // $column4.css('background-color', '#FFD855');
  // $row4.css('background-color', 'white');
  // $(this).css('background-color', 'green');

  //   } else  {
  // $column4.css('background-color', 'white');
  // $row4.css('background-color', '#FFD855');
  // $(this).css('background-color', 'green');
  //  }

  });

// $box21.on('click keydown', function() {
//   clickedBox = 21;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $row5.css('background-color', '#FFD855');
//   $box21.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column4.css('background-color', '#FFD855');
//   $row5.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column4.css('background-color', 'white');
//   $row5.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

$box22.on('click keydown', function() {
  clickedBox = 22;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row2.css('background-color', '#FFD855');
  $box22.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column5.css('background-color', '#FFD855');
  $row2.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {

  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column5.css('background-color', 'white');
  $row2.css('background-color', '#FFD855');
  $(this).css('background-color', 'green');
   }

  });

$box23.on('click keydown', function() {
  clickedBox = 23;
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $column5.css('background-color', '#FFD855');
  $row3.css('background-color', 'white');
  $(this).css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  // $column5.css('background-color', '#FFD855');
  $gameBoxes.css("background-color", "white");
  $questionBox.css('background-color', 'white');
  $row3.css('background-color', 'white');
  $column5.css('background-color', 'white');

  $(this).css('background-color', 'green');

  //   } else  {
  // $column5.css('background-color', 'white');
  // $row3.css('background-color', '#FFD855');
  // $(this).css('background-color', 'green');
   }

  });

// $box24.on('click keydown', function() {
//   clickedBox = 24;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $row4.css('background-color', '#FFD855');
//   $box24.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column5.css('background-color', '#FFD855');
//   $row4.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column5.css('background-color', 'white');
//   $row4.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

//   });

// $box25.on('click keydown', function() {
//   clickedBox = 25;
//   $gameBoxes.css("background-color", "white");
//   $questionBox.css('background-color', 'white');
//   $row5.css('background-color', '#FFD855');
//   $box25.css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column5.css('background-color', '#FFD855');
//   $row5.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//     } else  {
//   $column5.css('background-color', 'white');
//   $row5.css('background-color', '#FFD855');
//   $(this).css('background-color', 'green');
//    }

  // });

  });


