// console.log(window)

// optional object
// [window].alert("hello");
// alert("hi")

// var person = {
//     fname: "ali",
//     display: function () {
//         console.log("React Track")
//     }
// };

// // console.log(fname);
// console.log(person.fname);

// var openedWindow;
// function openWindow() { 
//     // window.open();
//     // window.open("https://www.google.com.eg")
//     // window.open("https://www.google.com.eg", "_self")
//     // window.open("https://www.google.com.eg", "", "width=300,height=300")    
//     openedWindow = window.open("about.html", "", "width=300,height=300") ;
//  }

// function closeWindow() { 
//     // window.close();  // ??
//     openedWindow.close();
//  }

// function moveToWindow() { 
//     openedWindow.moveTo(500,500);
//  }

// function moveByWindow() { 
//     openedWindow.moveBy(-100, -100);
//  }

// function resizeToWindow() { 
//     openedWindow.resizeTo(250, 250)
//  }

// function resizeByWindow() { 
//     openedWindow.resizeBy(20,20)
//  }

// setTimeout();   
// setInterval();



// setTimeout(
//     function (){console.log("printed after 3 seconds")}, 3000);

// function cb(){console.log("printed after 3 seconds")}
// setTimeout(cb, 3000);



// function greet(fname) { 
//     console.log("hi", fname);
// }

// greet("men3m");

// setTimeout(function (){
//     greet("ali");
// }, 3000);


// var x = 1;
// var myInterval1 = window.setInterval(function(){
//     console.log("x = ", x++);
// }, 1000);


// var y = 1;
// var myInterval2 = window.setInterval(function(){
//     console.log("y = ", y++);
// }, 1000);

// window.setTimeout(function (){
//     console.log("set time out exposed!");
//     console.log("interval 1 = ",myInterval1)
//     clearInterval(myInterval1);
// }, 3000);


// window.setTimeout(function (){
//     console.log("set time out exposed! for the second time");
//     console.log("interval 2 = ",myInterval2)
//     clearInterval(myInterval2);
// }, 5000);


/////////////// Location ////////////////


// console.log(location)

// console.log(location.reload())

// console.log(location.pathname) // get

// location.pathname = "Day5/index.html";


// location.assign("https://www.google.com/") // go and back
// location.replace("https://www.google.com.eg/") // go only


// location.href = "https://www.linkedin.com"


// console.log(history);

// console.log(history.length) // no. sites

// history.back()
// history.forward;


///////////////////////////////

// console.log(navigator)
// console.log(navigator.geolocation)


// function successCallback(position) { 
//     console.log("granted accces"); 
//     console.log(arguments)
//     console.log("position = ",position);
//     console.log(position.coords)

//     console.log(position.coords.latitude);
// }

// function errorCallback() {
//     console.log("denied access")
// }

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



// function greet(fname){
//     console.log(arguments);
//     console.log(fname);
// }

// greet("men3m", "ali", "mohsen");

/////////////////////////////////////////////
            // Events

// var btn = document.getElementById("btn");
// // console.log(btn);

// var p = document.getElementsByClassName("content")[0];
// // console.log(p);

// function execute(e) { 
//     console.log("target = ",e.target)
//     console.log("innerHTML = ", e.target.innerHTML)
//      p.innerHTML = "<h1>This is ITI</h1>";
//  }



// function changeContent() { 
//      p.innerHTML = "<h1>This is ITI</h1>";
//      console.log("btn clicked from content");
//  }

//  function changeStyle(color) { 
//     console.log("before: ",color);
//     color = color || 'red';
//     console.log("after: ",color);
//      p.style.color = color;
//      console.log("btn clicked from style");
//  }

//   function GetPrimaryStyle() { 
//      p.style.color = 'black';
//  }



// 1. add attributes
// function execute() { 
//     console.log("button clicked");
//     // p.innerHTML = "<h1>This is ITI</h1>"
//  }


// var person = {
//     fname: "ali"
// }

// person.color = undefined;

// person.display = function(){
//     console.log("hi");
// }
// console.log(person);
// person.display();

 // 2. attach function

// btn.id = "_btn";

// function cb(){
//     console.log("button clicked from attach function");
// }

// // btn.onclick = cb(); // xxx
// btn.onclick = cb;
// console.log(btn);


// btn.onclick = function (){
//     console.log("button clicked from attach function");
//     console.log("iti");
// };

// btn.ondblclick = changeContent;
// btn.onmouseenter = changeStyle;
// btn.onmouseleave = GetPrimaryStyle;

// btn.onclick = changeStyle;
// btn.onclick = changeContent;

// btn.onclick = function () { 
//     changeContent();
//     changeStyle('red');

//  }


//  var person = {
//     fname:"ola"
//  };
//  person.fname = "mona";
//  console.log(person.fname);


// 3. add event listener

// function cb() { 
//     console.log("btn clicked from event listener")  
// }

// btn.addEventListener('click', cb);


// btn.addEventListener('click', function () { 
//     console.log("btn clicked from event listener");
// });


// btn.addEventListener('click', changeContent);
// btn.addEventListener('click', changeStyle);

// btn.addEventListener('mouseenter', changeStyle)
// btn.addEventListener('mouseleave', GetPrimaryStyle)

// btn.addEventListener('click', function (e) { 
//     // console.log(arguments) ;
//     console.log(e.target);
//     console.log(e.target.innerHTML);
//     changeStyle('green');
//     changeContent();
//  })

 
//  function greet(x) { 
//     console.log(arguments) ;
//     console.log(x) ;
//     console.log("hi");
//   }


// greet("ola");


// btn.onclick = function (e) { 
//     console.log(e.target);
//     console.log(e.target.innerHTML);
//     changeStyle('green');
//     changeContent();
//  }


// btn.addEventListener('click', changeContent);
// btn.addEventListener('click', function (){changeStyle('green');}); // yes
// btn.addEventListener('click', changeStyle); //xxx

// function cb(){
//     console.log("event removed")
//     btn.removeEventListener('click', changeContent)
// }
// window.setTimeout(cb, 5000);

/////////////////////////////////////////////

    // var input = document.getElementById("input");
    // var span = document.getElementById("errorMSG");
    // var btn = document.getElementById("btn1");

    // console.log(input)
    // console.log(span)
    // console.log(btn)

    // input.addEventListener('input',execute);

    // function execute() {
    //     // console.log(input.value);
    //     if(input.value.length <= 3){
    //         input.style.border = "2px solid red";
    //         span.style.display = "block"
    //     }
    //     else {
    //         input.style.border = "2px solid green";
    //         span.style.display = "none"
    //     }
    // }


    // function submit(e) {
    //     e.preventDefault();
    //   }

////////////////////////////////////////////

function myBody(e) { 
    // e.stopPropagation();
    console.log("body");  
}

function first(e) { 
    e.stopPropagation();
    console.log("first");  
}
function second(e) { 
    e.stopPropagation();
    console.log("second");  
}

function third(e) { 
    e.stopPropagation();
    console.log("third");  
}