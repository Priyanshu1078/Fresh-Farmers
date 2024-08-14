function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="Gautam" && password=="gautam0506")
{
    alert("Welcome Gautam");
    window.open("homepage2.html");
}
if(username=="Pracheta" && password=="pracheta1021")
{
    alert("Welcome Pracheta");
    window.open("homepage3.html");
}
else {
    alert("Login Failed")
}}
