var admins=[
    {
        username:"admin1",
        password:"Admin1@1234"
    },
    {
        username:"admin2",
        password:"Admin2@1234"
    },
    {
        username:"admin3",
        password:"Admin3@1234"
    }
        
]

function checkValid()
{
    var username=document.getElementById("uname").value;
    var password=document.getElementById("passwd").value;
    for(i=0;i<admins.length;i++)
    {
            if(username===admins[i].username&&password===admins[i].password)
            {
                //console.log("login successful");
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                alert("You are successfully Logged in");
                
                window.open('list.html');
               
                return;
            }
            
               // console.log("username or password is incorrect")
    }
    console.log("username or password is incorrect");
    alert("Sorry!! Username or password is incorrect");


}
function logOutButton(){
    //let logOutButton = document.getElementById('logOutButton');
    // logOutButton.className = "log-out-button"
    // logOutButton.innerText = "Log Out"
    // signDiv.append(logOutButton)
   
      localStorage.clear();
      
      document.write("<p>Please login again</p><a href=index.html>Login Page</a>");
      alert("you are logged out") ;
      //window.open('index.html');
      // We clear localStorage like so
}

