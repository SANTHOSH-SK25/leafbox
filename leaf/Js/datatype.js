/*var a=10;
var b=20;
var c=a+b;
console.log(c)


var a=25.5;
var fname="Tutor Joes";
var isMarried = true;
var phone=null;

console.log(typeof fname);
console.log(typeof a);
console.log(typeof phone);

let b;
console.log(typeof b);

// symbol:
const s1=Symbol()
console.log(s1)

const s2=Symbol()
console.log(s2)

console.log(s1==s2)



// data type conversion:
let a;
a=25;
console.log(typeof a)

a=String(a);
console.log(a,typeof a);

a=true;
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=new Date();
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);


a=[1,2,3,4,5];
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

//TC- str to number:

a="123"
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);


a=false;
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);


a=[1,2,3,4,5];
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a="123"
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

// type coercion

let aa="25";
let b=10;
console.log(aa+b);
a=Number(aa);
console.log(a+b);


// assigment operator

let a=10;
//a=a+5;
a+=5;
a-=5;
a*=5;
a/=5;
a%=5;
console.log(a);



// math function

let c;
c=Math.PI;
c=Math.E;
c=Math.round(5.8);
c=Math.round(5.3);
c=Math.floor(5.3);
c=Math.ceil(5.3);
c=Math.sqrt(20);
c=Math.abs(-85);
c=Math.trunc(5.36);
c=Math.pow(2,4);
c=Math.max(10,20,30);
c=Math.min(10,20,30);
c=Math.random();
c=Math.floor((Math.random()*50+1));


console.log(c);



// comparison operator

let a=10;
let b="10";
console.log(a==b);
console.log(a===b); // check data type also ==
console.log(a!=b);

// logical operator

/*
&& - AND
|| - OR
! - NOT

let mark=45;

console.log(mark>=35 && mark <=100);

*/


/*
const numbers=[1,2,3,4,5,6,7,8,9,10];

//map(value,index,array)
let sqrt=numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2);
});

console.table(sqrt);

const users =[
  {name:"Sam",age:15,city:"Chennai",salary:10500},
  {name:"Ravi",age:22,city:"Namakkal",salary:12000},
  {name:"Joes",age:18,city:"Hosur",salary:6000},
  {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
  {name:"Stanley",age:10,city:"Salem",salary:8000},
  {name:"Ram",age:12,city:"Salem",salary:10000},
];

console.table(users);

let eligible_status=users.map((user)=>({
  /*name:user.name,
  age:user.age,
  city:user.city,
  salary:user.salary,
  ...user,
  status:user.age>=18?"Eligible":"Not Eligible"
}));

console.table(eligible_status);

*/



// function

/*
function user(name1){
  let msg="hello "+ name1 + " I'm learning JS!!";
  console.log(msg)
}

user("sandy")
*/

// perameters:

/*

// program to print the text
// declaring a function
function greet(name) {
  console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

*/

// function return:

/*

// program to add two numbers
// declaring a function
function add(a, b) {
  return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);

*/


// swich case

/*
let grade=prompt("enter grade:");

switch(grade){
  case "S":
    console.log("super grade");
    break;

  case "A":
    console.log("excellent grade");
    break;

  case "E":
    console.log("just pass");
    break;

  case "U":
    console.log("fail");
    break;

  default:
    console.log("unknown grade")
}

*/


// if-else:

// let n=5;

// if(n>5){
//   console.log("true");
// }
// else
//   console.log("false");


// let hour=new Date();
// console.log(hour.getMinutes());



// for (let i=1; i<=10; i++){

//   if (i % 2 !== 0){
//     console.log("odd number # " + i);
//   }

// }

// let text = "";

// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i+ "\n";
// }
// console.log(text);

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "\n";
}
console.log(txt);
