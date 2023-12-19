
let data={};

function storedata() {
let username = document.getElementById(`signupusername`).value;

data[`username`]=username;
let email= document.getElementById(`signupemail`).value;

data[`email`]=email;
let password=document.getElementById(`signuppassword`).value;

data[`password`]=password;
}

let user={}
function check(){
  let userusername= document.getElementById(`username`).value;
  user[`userusername`]= userusername;
  let userpassword=document.getElementById(`password`).value;
  user[`userpassword`]=userpassword;
}
function checkdata(){
    if(data.username==user.userusername && data.password==user.userpassword)
    {
      document.getElementById('a1').href="home.html"
      
       console.log("true");

    }
    else{
        document.getElementById('a1').href="#"
        console.log("false");
    }
}

