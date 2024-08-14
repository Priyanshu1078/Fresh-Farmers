function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Priyanshu" && password=="priyanshu1078")
{
    alert("Welcome Priyanshu");
    window.open("homepage1.html");
}
if(username=="Palak" && password=="palak0985")
{
    alert("Welcome Palak");
    window.open("homepage4.html");
}
else {
    alert("Login Failed")
}}
