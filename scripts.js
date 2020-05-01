// Third part:
console.log('Script file is loaded');

$('h1').html('This is done by <em>JavaScript</em>!');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

let name = 'Adam';
let age = 34;

function myLittleFunction() {
    // condition: number of ps is smaller than 5
    // <, >, and, or, <=, >=, ===, !==
    if ($('p').length < 5) {
  $('main').append('<p>A p is appended in the main.</p>');
    } else { 
  $('p').css('border', '1px solid red');
    }
  $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
  $('p:last-child').remove();
});

//Fourth part:

// if (condition that true or false) {
    // condition is true
// } else {
    // condition is false
// }

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta']

colors.forEach(function (color) {
  $('#box-container').append('<div class="box"></div>');
  $('.box:last-child').css('background', color);    
});

for (let i = 0; i < 100; i= i + 1) {
  console.log ('I will not cheat on the exam');
}

/*
$('#box-container').append('<div class="box"><(/div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"><(/div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);
*/

// Single line comment

/*
  Multiple
  lines
  of comments
*/

// First part:
/*
1+1
2
25*5
125
12-5
7
15/6
2.5
let age;
undefined
age = 34
34
age + 5
39
age = 55
55
let numberOfLegs = 4
undefined
let name = 'Tereza'
undefined
let sentence = "That person's cat."
undefined
sentence = 'He said "Ok"'
"He said "Ok""
let oldEnoughToDrive = false
undefined
'Hello, ' + name
"Hello, Tereza"
true && true
true
true && false
false
true || true
true
true || false
true
true && (false || (true && false))
false
let colors = ["orange", "blue", "green"]
undefined
"Ahoj, jak se máš? :)"
"Ahoj, jak se máš? :)"
colors
(3) ["orange", "blue", "green"]
colors [0]
"orange"
let pickedColor = 2
undefined
colors [pickedColor]
"green"
colors [1] = "yellow"
"yellow"
colors
(3) ["orange", "yellow", "green"]
colors.length
3
name.length
6
colors[3] = 'lime'
"lime"
colors.push('purple'
VM1638:1 Uncaught SyntaxError: missing ) after argument list
colors.push('purple')
5
colors
(5) ["orange", "yellow", "green", "lime", "purple"]
colors[colors.lenght] = 'cyan'
"cyan"
colors.push(colors)
6
colors(colors.length) = cyan'
VM1879:1 Uncaught SyntaxError: Invalid or unexpected token
colors(colors.length) = 'cyan'
VM1888:1 Uncaught TypeError: colors is not a function
    at <anonymous>:1:1
(anonymous) @ VM1888:1
colors[colors.lenght] = 'cyan'
"cyan"
colors
(6) ["orange", "yellow", "green", "lime", "purple", Array(6), undefined: "cyan"]
colors[colors.length] = 'cyan'
"cyan"
colors
(7) ["orange", "yellow", "green", "lime", "purple", Array(7), "cyan", undefined: "cyan"]
let notGoodExample = ['text', 123, true]
undefined
let person = {
  name: 'Adam',
  age: 34,
  favoriteColors: colors,
  oldEnoughToDrive: true
}
undefined
person
{name: "Adam", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true}age: 34favoriteColors: (7) ["orange", "yellow", "green", "lime", "purple", Array(7), "cyan", undefined: "cyan"]name: "Adam"oldEnoughToDrive: true__proto__: Object
'Hello, dear ' + person.name
"Hello, dear Adam"
person.name = 'Peti'
"Peti"
person
{name: "Peti", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true}
person.food = 'pizza'
"pizza"
person
{name: "Peti", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true, food: "pizza"}
*/