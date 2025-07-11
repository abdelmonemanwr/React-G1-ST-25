// // sequential programming paradiam
// var a = 2;
// var b = 4;
// console.log(a+b);

// // 100

// var a = 2;
// var b = 4;
// console.log(a+b);

// // 200

// var a = 2;
// var b = 4;
// console.log(a+b);

// functional programming paradiam

// function funcName(params){
//     // block of code
// }


// function Greeting() {
//     console.log("welcome from iti");
// }


// Greeting();

// function Greeting(fname) {
//     console.log("welcome from iti", fname);
// }

// Greeting("men3m");

// console.log(Greeting)

// var x = Greeting;

// console.log(x);


var x = 5;
var y = 5;



// function add(a,b) { 
//     console.log(a,b);
//     // console.log(arguments);
//     return a+b;
//  }

//  var sum = add(x);
//  var sum = add(x,y);
//  var sum = add(x,y,9);
// x = "mona";
// y = "ali";

// x = "mona";
// y = 55;


// x = true;
// y = true;
//  var sum = add(x,y);
//  console.log(sum);


// function add(a,b) { 
//     console.log(a+b);
//     return undefined;
// }

// add(2,3);
// console.log(add(2,3))

// sum(3,5);

// function add(a,b) { 
//     a = a || 4;
//     b = b || 2;
//     return a+b;
// }

// console.log(add());

/*
  > function types
    1. function statement (function declaration)
    2. function expression
    3. anonymous function
    4. callback function



*/

// function Greeting() {
//     console.log("hello");
// }

// Greeting("mo2men");


// var sum = 1+4;

// var result = function (fname) {
//     console.log("welcome from iti", fname);
// }

// result("ali");
// // Greeting("ali");  xxx


// var output = function (x,y) { 
//     console.log(x+y);
//     return undefined;
// }

// var result = output(6,9);
// console.log(result);



// console.log(age)
// console.log(hospital)
// var age = 22;
// console.log(age)


// console.log(window);
// console.log(this);

// var x = 5;
// var y = x;
// console.log(x);
// console.log(y);


///////////////////////////////

// console.log(age) // undefined
// console.log(hospital) // error
// var age = 22;
// console.log(age) // 22

// let color = 'red';
// console.log(color); // red

// console.log("1:", mul(3,7)); // error: mul is not a function    //let: mul is not defined
// let mul = function (a, b) { 
//     return a*b; 
// }
// console.log("2:", mul(3,7)); // 2: 21



// console.log("1:", sub(3,7)); // 1: -4
// function sub(a, b) { 
//     return a-b; 
// }
// console.log("2:", sub(3,-9)); // 2: 12

// console.log(id);
// var id = 534;
// console.log(id);


// function greet(){
//     console.log("welcome");
// }

// greet();


// function greet(x){
//     console.log("welcome", x);
// }
// var fname = "react track";
// greet(fname);

// var a = 5;
// var b = a;


// function greet(x){
//     console.log("welcome");
//     console.log(x);
//     x();
// }

// var result = function (){
//     console.log("hello")
// };

// result();
// var fname = "react track";
// greet(result);



// function greet(x){
//     console.log("welcome", x);
// }
// greet("react track");


// function greet(x){
//     x();
//     console.log("welcome");
// }
// greet(function () { 
//     console.log("I'm a callback function") 
// });


// function greet(x, y){
//     var accepted = confirm("r u aggree to pick your location?");
//     if(accepted){
//         x();
//     }else {
//         y();
//     }
// }

// var agree = function () { 
//     console.log("your location is iti mnf");
// };

// var denied = function () { 
//     console.log("access denied");
// };


// greet(agree, denied);

// function doSomething(func, time) { 
//     // time
//     console.log(time);
//     func();

//  }

// doSomething(function (){
//     console.log("your order is done")
// }, 3000);




// var fname = "HeLlO";
// console.log(fname[-100]);

// for(var i = 0; i < fname.length; i++){
    // console.log(fname[i]);
    // console.log(fname.charAt(i));
    // console.log(fname.lastIndexOf(fname[i]))
// }

// console.log(fname.toLowerCase())
// console.log(fname)
// console.log(fname.toUpperCase())

// console.log(fname.includes("eL", 1))
// fname = "hello;from;iti";
// var arr = fname.split('?');
// console.log(arr);
// console.log(arr[2])


// var str = "username=mona;password=123;street=abc;college=mnf";

// var data = str.split(";");
// console.log(data);
// for(var item = 0; item < data.length; item++){
//     // console.log(data[item]);
//     var arr = data[item].split('=');
//     console.log(arr[1]);
// }



// var fname = "      men3m       ";

// console.log(fname.trim());
// console.log(fname.trim().length);

// console.log(fname.trimStart());
// console.log(fname.trimStart().length);

// console.log(fname.trimEnd());
// console.log(fname.trimEnd().length);


// var fname = "iti monofia react track ";
// console.log(fname.startsWith("iti"))
// console.log(fname.startsWith("itian"))
// console.log(fname.endsWith("track "))
// console.log(fname.endsWith("react"))


// var fname = "ahmed";
// var lname = "ali";
// var tname = "kareem";

// var fullname = fname.concat(lname, tname);
// console.log(fullname)

// var fname = "ahmed";
// var lname = "ali";
// var tname = "kareem";
// var arr = [fname, lname, tname];
// var fullname = arr.join(' ');
// var fullname = arr.join('===');
// console.log(fullname)


// var students = ["ali", "mona", "ola", "kareem", "walid"];

var data = [
    "ali", 
    22, 
    true, 
    [
        "kareem", 
        "walid"
    ], 
    function (a,b){
        return a*b;
    }
];

// console.log(data);

// var sum = data[4](5,6);
// console.log(sum);

// console.log(data[3][0]);
// console.log(data[3][1]);


// console.log(data.length)

// for(var i=0; i<data.length; i++){
//     console.log(data[i])
// }

// console.log(data[100])

var len = data.push("men3m");
// console.log(len);
console.log(data);


var shiftedElement = data.shift();

// var shiftedElement = data.shift();
// var shiftedElement = data.shift();
// console.log(shiftedElement);
console.log(data);


var poppedElement = data.pop()
console.log(data);


var shiftedElement = data.shift();
