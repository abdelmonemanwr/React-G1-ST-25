// function greet(fname){
//     console.log("hello", fname);
// }

// var fname = "ola";
// greet(fname);

// var a = 2;
// var b = 5;
// var sum = a + b;


// var x = "react";
// console.log(x);
// function sum(a, b){
//     x = "iti";
//     console.log(x);
//     return a+b;
// }
// console.log(x);
// console.log(sum(2,6));
// console.log(x);


// var x = "react";
// console.log(x);
// function sum(a, b){
//     var x = "iti";
//     console.log(x);
//     return a+b;
// }
// console.log(x);
// console.log(sum(2,6));
// console.log(x);


// function sum(a, b){
//     for(var i=0; i<3; i++){
//         console.log("i = ", i);
//     }
//     console.log("i = ", i);
//     return a+b;
// }
// var result = sum(2,6);
// console.log(result);


// --------------------------------------

// var fname = "ali";
// var name = "ola";
// var age1 = 22;
// var age2 = 18;

// var fname = "men3m";

// var person = {
//  // key : value,
//     fname : "ola",
//     age : 18,
//     display: function () { 
//         console.log("this = ",this);
//         console.log("fname = ", this.fname);
//     }
// };

// console.log(person);
// dot notation
// console.log(person.fname);
// console.log(person.age);
// console.log(person.display);
// person.display();

// subscript notation
// console.log(person["age"]);
// console.log(person["fname"]);
// console.log(person["display"]);
// person["display"]();

// console.log(person)

// person.color = "red";

// person.fname = "men3m";

// console.log(person)

// console.log(person.address)

// var myKey = "age";

// console.log(person.myKey); // undefined
// console.log(person[myKey]); // => person["age"] // 18
// console.log(person["myKey"]); // undefined            


// var human = {
//     fname : "ali",
//     age : 22,
//     display: function () { 
//         console.log("fname = ", this.fname);
//     },
//     gender: 'M',
//     address: {
//         city: "monofia",
//         street: "abc",
//         postal: "12345"
//     }
// };

// console.log(human.address.city)
// console.log(human["address"]["city"])
// console.log(human["address"].city)
// console.log(human.address["city"])

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.sqrt(16))
// console.log(Math.pow(2, 5))
// console.log(Math.abs(-245));
// console.log(Math.sign(-25))
// console.log(Math.sign(25))
// console.log(Math.sign(0))

// console.log(Math.max(-25, 25, -2, 1974, 343));

// var arr = [-25, 25, -2, 1974, 343];
// console.log(Math.max(...arr));

// console.log(Math.min(-25, 25, -2, 1974, 343));

// var arr = [-25, 25, -2, 1974, 343];
// console.log(Math.min(...arr));


// console.log(Math.floor(5.9))
// console.log(Math.round(17.5))
// console.log(Math.ceil(17))

// console.log(Math.floor(Math.random() * 10)) 

/////////////////////////////////////////////////////////////////

// console.log(document);
// console.log(document.body);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);



// var element = document.getElementById("head1");
// console.log(element);

// var elements = document.getElementsByClassName("content");
// for(var i = 0; i < elements.length; i++)
// {
//     console.log("current element is = ", elements[i]);
// }
// console.log(elements);

// var elements = document.getElementsByTagName("div");
// console.log(elements[1].classList);

// for(var i = 0; i < elements.length; i++)
// {
//     console.log("current element is = ", elements[i]);
// }

// var parentDiv = elements[0];
// console.log(parentDiv);
// var p = parentDiv.getElementsByClassName("content");
// console.log(p)


// var inputs = document.getElementsByName("myInput");
// for(var i=0;i<inputs.length; i++)
//     console.log(inputs[i])
// console.log(inputs[0].value)

// var output = document.querySelectorAll("div.extra");
// console.log(output[0].children)

// div{}

// .test{}

// div.parent

// div .content

// var elements = document.querySelectorAll("div .content");
// console.log(elements);

// var elements = document.querySelectorAll(".content");
// console.log(elements);


// var button = document.getElementById("btn");
// console.log(button);

// var btn = document.querySelector("#btn")

// var btn = document.querySelector(".myBtn")
// console.log(btn)


// var img = document.querySelector(".img img")

// var div = document.querySelector(".img").children
// console.log(div);


var pp = document.querySelector(".new #pp");
// console.log(pp.children);
// console.log(pp.childNodes);
// console.log(pp.firstChild);
// console.log(pp.firstElementChild);

// console.log(pp.lastChild.nodeValue);
// console.log(pp.lastElementChild.innerHTML);
// var div = document.querySelector(".new");
// console.log(div.children);
// console.log(div.childNodes)


// var person = {
//     fname : "ali"
// }

// person.fname = "mona";

// console.log(pp.lastElementChild.innerText);
// pp.lastElementChild.innerText = "<h1>This is Iti</h1>";
// console.log(pp.lastElementChild.innerText);


// console.log(pp.lastElementChild.innerHtml);
// pp.lastElementChild.innerHtml = "<h1>This is Iti</h1>";
// console.log(pp.lastElementChild.innerHtml);


// console.log(pp.lastElementChild.textContent);
// pp.lastElementChild.textContent = "<h1>This is React track</h1>";
// console.log(pp.lastElementChild.textContent);


// console.log("before",pp.className)
// pp.className = "paragraph";
// console.log("after",pp.className)
// console.log(pp)


// pp.classList.add("para", "para2", "pp")
// pp.classList.remove("para2")

// pp.classList.toggle("pp2")


function doSomething() { 
    var h1 = document.getElementById("head1");
    console.log(h1);

    h1.innerHTML = "<h4>ITI Tracks</h4>"
    h1.style.color = 'red';


    var p = document.querySelector(".parent .content");
    console.log(p);
    p.textContent = "This is react track in summer trainning";
 }