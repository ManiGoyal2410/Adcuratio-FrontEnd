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
//making a list of all eligible people who can login into system
function checkValid()
{
    var username=document.getElementById("uname").value;
    var password=document.getElementById("passwd").value;
    for(i=0;i<admins.length;i++)
    {
            if(username===admins[i].username&&password===admins[i].password)          //checking if entered username and password mathces with any 1 in the list
            {
                //console.log("login successful");
                localStorage.setItem("username", username);   //storing the username and password in local storage   
                localStorage.setItem("password", password);
                alert("You are successfully Logged in");
                
                window.open('list.html');  //opening list of employees as soon as login is successful
               
                return;
            }
            
               // console.log("username or password is incorrect")
    }
    console.log("username or password is incorrect");
    alert("Sorry!! Username or password is incorrect");


}
function logOutButton(){
   
   
      localStorage.clear(); //clearing the local storage upon logout
      
      document.write("<h1>Please login again<br><a href=index.html>Click Here to Login</a></h1>");
      alert("you are logged out") ;
      //window.open('index.html');
      
}

