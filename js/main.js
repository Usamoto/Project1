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

// Function for column 1, row 1//
$row1.on('click', function() {
  $row1.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
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

// Function for column 1, row 2//

$row2.on('click', function() {
  $row2.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
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

// Function for column 1, row 3 (box 7)//

$row3.on('click', function() {
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
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




  // $column1.css('background-color', 'yellow');
  // $row2.css('background-color', 'white');
  // $(this).css('background-color', 'green');
  // counter += 2;

 // } else {
 //  $(this).css('background-color', 'white');
 // });


$row3.on('click', function() {
  $row3.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
  $(this).addClass('selected');


});

$row4.on('click', function() {
  $row4.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
  $(this).addClass('selected');

});

$row5.on('click', function() {
  $row5.css('background-color', 'yellow');
  $(this).css('background-color', 'green');
  $(this).addClass('selected');

});

  });
