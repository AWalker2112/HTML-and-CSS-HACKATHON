
console.log("hello world");

let x = myFunc(4, 3);
// myFunc is called with two parameters, the return value will end up in x

function myFunc(a, b) {
  return a + b;
// myFunc returns the sum of a and b
}
console.log(x);




hello = (name, age) => "Hello " + name +"! you are "+ age +" years old!";

console.log(hello("Alex", 22));



function mySubFunc(a, b) {
  return a - b;
// myFunc returns the sum of a and b
}

console.log(mySubFunc(10,5));

const welcome = function(name,age,gender){
  return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
  }
 
  welcome("Felix Cited",20,"Male");

powerUp = (n1, n2) => Math.pow(n1,n2);
console.log(powerUp(5, 2));



