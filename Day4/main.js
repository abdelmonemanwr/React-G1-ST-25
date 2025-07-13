var input = document.getElementById("input");
// console.log(input);

function getText() { 
    console.log(input.value)
 }

// console.log(input.attributes)

// console.log(input.getAttribute("type"));
// console.log(input.getAttribute("id"));
// console.log(input.getAttribute("class"));
// input.setAttribute("class", "input2 input3 input4")


// var person = {
//     fname : "ali"
// }

// person.fname = "mona";

// input.className = "input";
// input.type = "text"
// console.log(input)

// input.setAttribute("class", "input") // override
// console.log(input.getAttribute("class"));
// console.log(input);

// input.removeAttribute("placeholder")
// input.removeAttribute("onfocus")
// input.removeAttribute("onchange")
// console.log(input);


// console.log(input.hasAttribute("href"))
// console.log(input.hasAttribute("name"))


// if (input.hasAttribute("class")){
//     input.removeAttribute("class");
// }
// else {
//     input.setAttribute("class", "input");
// }

// console.log(input)

// var google = document.links[0];
// console.log(google)

// console.log(google.attributes)

// google.setAttribute("id", "_google");
// console.log(google.getAttribute("id"));

// ------------------------------------------

// var div = document.createElement("div");
// div.id = "parent";
// div.setAttribute("class", "myDiv");
// console.log(div)



// var parent = document.getElementsByClassName("parent")[0];
// // console.log(parent)


// var p = document.createElement("p");

// p.id="content";
// p.innerText = "Welcome at iti";

// console.log(p);

// parent.appendChild(p);



// var btn = document.getElementById("btn");
// var div = document.getElementsByClassName("parent")[0];
// console.log(div)
function AddParagraph(){
    // var p = document.createElement("p");
    // p.className = "content";
    // p.innerHTML = "React Track 5";

    // // div.appendChild(p);

    // btn.before(p)

    // var span = document.createElement("span");
    // span.innerHTML = "<h5>this is iti</h5>";

    // btn.after(span);

////////////////////////////////////

    // var p = document.createElement("p");
    // p.className = "content";
    // p.innerHTML = "React Track 5";
    
    
    // var span = document.createElement("span");
    // span.innerHTML = "<h5>this is iti</h5>";

    // div.appendChild(p, span);
 
    // div.append(p, span);
    
////////////////////////////////////

    // var p = document.createElement("p");
    // p.className = "content";

    // var myTextNode = document.createTextNode("this is sparta");

    // // p.appendChild(myTextNode);
    // p.append(myTextNode);


    // btn.before(p);

    // console.log(p);

////////////////////////////////////

    // var p = document.createElement("p");
    // p.className = "content";

    // var myText = "this is sparta";

    // // p.appendChild(myText); // will not work
    // p.append(myText);


    // btn.before(p);

////////////////////////////////////

//     var p = document.createElement("p");
//     p.className = "content";

//     var myTextNode = document.createTextNode("this is sparta");

//     // var result = p.appendChild(myTextNode);
//    var result =  p.append(myTextNode);


//     btn.before(p);

//     console.log(result);



}


//////////////////// Cookies ///////////////////


// var myCookies = document.cookie;
// console.log(myCookies)

// document.cookie = "username=men3m";
// document.cookie = "password=123"
// document.cookie = "password=456"

// document.cookie = "email=iti@gmail.com";

///////////////////////////////////////////

// var date = new Date();
// console.log(date);

// console.log(date.getDate());
// console.log(date.getDay())
// console.log(date.getMonth())

// sunday => 0
// monday => 1
// tuesday => 2
// wednesday => 3
// thrusday => 4
// friday => 5
// saturday => 6


// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());

// var today = date.getDate();
// date.setDate(today + 2);
// console.log(date)



// console.log(document.cookie);

// var date = new Date();
// var today = date.getDate();
// var expiryDate = new Date(date.setDate(today+2));
// console.log(expiryDate)


// document.cookie = "branch=Monofia;expires="+expiryDate;

// var date = new Date();
// var today = date.getDate();
// console.log(today);
// var expiryDate = new Date (date.setDate(today+10));
// console.log(expiryDate);


// document.cookie = "username=abc;expires="+expiryDate;




// function GetAllCookies(){
//     var cookies = document.cookie.split("; ");
//     for(var i = 0; i<cookies.length; i++){
//         console.log(cookies[i].split("="));
//     }
// }

// GetAllCookies();



// function SaveCookie(key, value, date){
//     var myCookie = (key+"="+value);
//     if(date!=undefined){ // persistant cookie
//         myCookie+=";expires="+date;
//     }
//     console.log(myCookie);

//     document.cookie = myCookie;

//     // console.log(document.cookie);
// }


// SaveCookie("Provider", "ITI");

// var date = new Date();
// var expiryDate = new Date(date.setDate(date.getDate()+2));

// SaveCookie("Track", "React", expiryDate);




////////////////////////////////////


//

//


// try{
//     // file path
//     // open file 
//     // error
//     // close file
//  // 123
//  // 456
// }
// catch(error){
//     // abc
// }
// finally{
//     // free up used resouces
// }


// function doSomething(){
//     try{
//         console.log("hi");
//         throw "this is an exception";
//         console.log("bye")
//     }
//     catch(error1){
//         console.log(error1);
//         throw error1;
//     }
//     finally{
//         console.log("free up unmanaged resources")
//     }
// }

// try{
//     console.log("12345");
//     doSomething();
//     console.log("after inner try..catch");
// }
// catch(error){
//     console.log(error);
// }

// console.log("after outer try..catch");




// function doSomething(){
//         console.log("hi");
//         throw "this is an exception";
//         console.log("bye")
// }

// try{
//     doSomething();
// }
// catch(error){
//     console.log(error);
// }