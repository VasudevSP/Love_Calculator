// var change=document.querySelector(".First .fi").innerHTML;
function checklovepercent(){
var name1=document.getElementById("name1").value;
var name2=document.getElementById("name2").value;
if(name1==""||name2=="")
{
    alert("please Enter the name");
}
else if(name1.length<=3||name2.length <=3)
{
    alert("Min.Length is '3'");
    
}
else
{
    var n=Math.floor(Math.random()*100)+1;
    document.getElementById("result-message").innerText= n+"❤️"+"%";
}
}