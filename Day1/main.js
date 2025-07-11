// console.log("wlcm");


// var x = 3;
// console.log("x = ", x);
// x = "ali";
// console.log("x = ", x);


// var _wo_rd;
// var wordoftoday = "asd";
// var wordOfToday = "asd";
// var WordOfToday = "asd";

// var x = "abc";
// console.log(typeof x);
// console.log(x);


// var fname;
// console.log(fname);

// fname = "ali";
// console.log(fname);
// fname = true;
// console.log(fname);


// var fname = "mona";
// console.log(fname);

//          data type       value
// zero       number          0
// null       null        empty object
// undefined undefined     undefined


// var fname = undefined;
// console.log("type : ",typeof fname);
// console.log("value: ",fname);



// let age = 22;
// console.log(age);

// var fname = null;
// console.log("type : ", typeof fname);
// console.log("value: ", fname);


// // Literal Creation
//    var age = 25;

// // Method Creation
// var x  = Number(25);
// console.log(x);
// var y = String("iti");
// console.log(y);

// var z = Boolean(true);
// console.log(z);


// var a = Number("50");
// console.log(a)
// console.log(typeof a)

// var a = Number("50");
// console.log(a)
// console.log(typeof a)

// // NaN: Not a Number
// console.log(isNaN(a));

// var a = Number("ITI");
// console.log(a)
// console.log(typeof a)

// // NaN: Not a Number
// console.log(isNaN(a));

// var flag = Boolean(true);
// console.log(flag);
// console.log(typeof flag);

// flag = Boolean("ali")
// console.log(flag);
// console.log(typeof flag);


/* 

falsy values
  null
  zero
  ""
  undefined
  NaN
  false
  []


> truthy values:
  - any other values except falsy values


*/

// var x = [];
// console.log(Boolean(x))


// var x = "";
// x = "abc";
// x = " ";
// var x = null;
// console.log(Boolean(x));


// var a = 2;
// var b = 35;
// console.log(a+b);

// var a = 2;
// var b = "35";
// console.log(a+b); // 235

// coercion: process of converting data type to another one (JS Engine)


// var a = 2;
// var b = NaN;
// console.log(a+b); // 235

// var a = undefined;
// var b = undefined;

// var a = 5;
// var b = undefined;

// var a = NaN;
// var b = undefined;

// var a = null;
// var b = null;

// var a = 5;
// var b = null;
// console.log(a+b);


// var a = "10";
// var b = 4;
// console.log(a-b)


// var a = "10";   // a = Number(a) = 10
// var b = "mina"; // b = Number(b) = NaN
// console.log(a-b)

// var x = 1 > 3
// var y = 1 > -3
// console.log(y);


// var a = 5;
// var b = "ali"; 
// // b = Number(b) = NaN
// // b = Number(b) = 5

// console.log(a==b);
// console.log(a===b);

// var n1 = true;
// var n2 = "true";
// console.log(Number(n1))
// console.log(Number(n2))
// console.log(n1==n2);


// // and , or

// var a = (1<4);
// var b = (2<5);

// // console.log(a&&b);

// var v = false;
// console.log(!v);


// var x, y;

// x = 0
// y = undefined
// console.log(x&&y); // 0
// console.log(x||y); // undefined

// x = ""
// y = "ali"
// console.log(x&&y); // ""
// console.log(x||y); // ali

// x = "ali"
// y = null
// console.log(x&&y); // null
// console.log(x||y); // ali

// x = 0
// y = undefined
// console.log(x&&y); // 0
// console.log(x||y); // undefined

// x = "mona"
// y = "ali"
// console.log(x&&y); // ali
// console.log(x||y); // mona

// x = "undefined"
// y = "null"
// console.log(x&&y); // null
// console.log(x||y); // undif.

// x = "mona"
// y = ""
// console.log(x&&y); // ""
// console.log(x||y); // "mona"

// x = "0"
// y = undefined
// console.log(x&&y); // undef.
// console.log(x||y); // 0


// x = 0
// y = "alaa"
// console.log(x&&y); // 0
// console.log(x||y); // alaa

// x = "alaa"
// y = "zero"
// console.log(x&&y); // zero
// console.log(x||y); // alaa


// x = "alaa"
// y = -10
// console.log(x&&y); // -10
// console.log(x||y); // alaa



// if (condition)
// {
//     // codes
// }
// else if(condition)
// {
//     // codes
// }
// else
// {
//     // codes
// }


// var a = 25;

// if (a % 2 == 0){
//     console.log("even number");
// }
// else {
//     console.log("odd number");
// }

// var a = -25;
// var b = -25;

// if (a > b){
//     console.log("a > b");
// }
// else if(a < b){
//     console.log("a < b");
// }
// else {
//     console.log("a = b");
// }

// ternary operator

//  (a % 2 == 0)?
//     console.log("even number")
//  :
//     console.log("odd number");


// var a = 2;

// a % 2 == 0
//     ? console.log("even number")
//     : console.log("odd number");


// var a = -25;
// var b = 25;

//  (a > b)
//     ? console.log("a > b")
//     : (a < b)
//         ? console.log("a < b")
//         : console.log("a = b");


// for(var i = 0; i>10; i++)
// {
//     console.log("iti greets you", i);
// }

// for(var i = 0; i>10; i+=2)
// {
//     console.log("iti greets you", i);
// }

// for(var i = 0; i<10; i++)
// {
//    if(i%3==0)
//     continue;
//    console.log("iti greets you", i);
// }

// for(var i = 1; i<10; i++)
// {
//     if(i%5==0)
//         break;

//     console.log("iti greets you", i);

// }

// var i = 0;
// for(  ; ; )
// {
//     if(i>9)break;
//     console.log("iti greets you", i);      
//     i++;
// }


// var i = 0;
// while(i <  10)
// {
//     console.log("iti greets you", i);      
//     i++;
// }

// var i = 0;
// while(i <  10)
//     console.log("iti greets you", i++); 


// var i = 0;
// do
// {
//     console.log("iti greets you", i);      
//     i++;
// }while(i >  10);



// var i = 0;
// do
// {
//     console.log("iti greets you", i);      
//     i++;
// }while(i <  10);

// var a = (prompt("Enter Value"));
// var b = (prompt("Enter Value"));
// console.log("a + b = ",a + b);


// var a = Number(prompt("Enter Value"));
// var b = Number(prompt("Enter Value"));
// console.log("a + b = ",a + b);


// document.write("<h1>React 1</h1>");
// document.writeln("<h1>React 2</h1>");


// document.writeln("React 2");
// document.write("React ");


// alert("hi");

// var x = confirm("is your age > 20 ?")
// console.log(x);


var message = prompt("enter a word");
for(var i = 0; i < message.length; i++){
    console.log(message[i]);
}