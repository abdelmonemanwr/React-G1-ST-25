var tbody = document.getElementById("tbody");

function getAllUsers(e) {  
    // console.log("btn clicked");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log("readystate :",xhr.readyState);
        if(xhr.readyState == 4){
            // console.log("status :",xhr.status);
            if(xhr.status == 200){
                // console.log("response :", typeof (xhr.response));
                var usersData = JSON.parse(xhr.response);
                console.log(usersData);
                tbody.innerHTML = "";
                for(var i=0; i<usersData.length; i++){
                    var newUser = document.createElement("tr");
                    // console.log(tr);

                    var id = document.createElement("td");
                    id.innerText = usersData[i].id;
                    
                    var name = document.createElement("td");
                    name.innerText = usersData[i].name;

                    var email = document.createElement("td");
                    email.innerText = usersData[i].email;

                    var username = document.createElement("td");
                    username.innerText = usersData[i].username;

                    var phone = document.createElement("td");
                    phone.innerText = usersData[i].phone;

                    var website = document.createElement("td");
                    website.innerText = usersData[i].website;

                    newUser.append(id, name, email, username, phone, website);

                    tbody.appendChild(newUser);
                }
            }
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send("");
}