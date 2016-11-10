// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
//
// var groupB = ['Victor'];
//
// var final = [...groupA, ...groupB];
//
// console.log(final)

var person = ['Donovan', 22];
var personTwo = ['Jen', 29];

function Greeting(name, age) {
  console.log('Hi '+ name+", you are " + age);
}

Greeting(...person)
Greeting(...personTwo)

var names = ['Mike', 'Ben'];
var final = ['Donovan', ...names];

final.map((name) => {
  console.log('Hello '+ name + '!');
})
