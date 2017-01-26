$(document).ready(function() {

// $('#box1').attr('value', 'A')

var $row1 = $('.row1');
var $row2 = $('.row2');
var $row3 = $('.row3');
var $row4 = $('.row4');
var $row5 = $('.row5');

var counter = 0;

var $column1 = $('.column1');
var $column2 = $('.column2');
var $column3 = $('.column3');
var $column4 = $('.column4');
var $column5 = $('.column5');

var $selected = $('.selected');

var $box2 = $('#box2');
var $box1 = $('#box1');
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


// Function for column 1, row 1//
// $row1.on('click', function() {
//   $row1.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', 'blue');
//   $row1.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//   } else  {
//   $column1.css('background-color', 'white');
//   $row1.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');

//    }

//   });

// // Function for column 1, row 2//

// $row2.on('click', function() {
//   $row2.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', 'blue');
//   $row2.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//   } else  {
//   $column1.css('background-color', 'white');
//   $row2.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');

//    }
//   });

// // Function for column 1, row 3 (box 7)//

// $row3.on('click', function() {
//   $row3.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', 'blue');
//   $row3.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//   } else  {
//   $column1.css('background-color', 'white');
//   $row3.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');

//    }
//   });

// // Function for column 1, row 4 (box 8)//

// $row4.on('click', function() {
//   $row4.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', 'blue');
//   $row4.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//   } else  {
//   $column1.css('background-color', 'white');
//   $row4.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');

//    }
//   });

// // Function for column 1, row 5 (box 9)//

// $row5.on('click', function() {
//   $row5.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column1.css('background-color', 'blue');
//   $row5.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//   } else  {
//   $column1.css('background-color', 'white');
//   $row5.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');

//    }
//   });

// Function for column 2, row 1 (box 2)//ssss
$box1.on('click', function() {
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

$box6.on('click', function() {
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
  $row5.css('background-color', 'yellow');
  $box13.css('background-color', 'green');
  $(this).addClass('selected');
  counter +=1;

  if (counter % 2 === 0) {
  $column5.css('background-color', 'blue');
  $row5.css('background-color', 'white');
  $(this).css('background-color', 'green');

    } else  {
  $column5.css('background-color', 'white');
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
   }

  });


// }

// $row1.on('click', function() {
//   $row1.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');
//   counter +=1;

//   if (counter % 2 === 0) {
//   $column2.css('background-color', 'blue');
//   $row1.css('background-color', 'white');
//   $(this).css('background-color', 'green');

//   } else  {
//   $column2.css('background-color', 'white');
//   $row1.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');

//    }

//   });



  // $column1.css('background-color', 'yellow');
  // $row2.css('background-color', 'white');
  // $(this).css('background-color', 'green');
  // counter += 2;

 // } else {
 //  $(this).css('background-color', 'white');
 // });


// $row3.on('click', function() {
//   $row3.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');


// });

// $row4.on('click', function() {
//   $row4.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');

// });

// $row5.on('click', function() {
//   $row5.css('background-color', 'yellow');
//   $(this).css('background-color', 'green');
//   $(this).addClass('selected');

});

  // });
