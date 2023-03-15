// var change=document.querySelector(".First .fi").innerHTML;
function checklovepercent(){
var name11=document.getElementById("name1").value;
var name12=document.getElementById("name2").value;
if(name11==""||name12=="")
{
    alert("please Enter the name");
}
else if(name11.length<=3||name12.length <=3)
{
    alert("Min.Length is '3'");
    
}
else
{
    var n=Math.floor(Math.random()*100)+1;
    document.getElementById("result-message").innerText= n+"❤️"+"%";
}
if(n<=35){
    document.getElementById("result-text").innerText="Dear, "+name11+" and "+name12+" Got"+" Nice Percent";
}
else if(n<=65){
    document.getElementById("result-text").innerText="Dear, "+name11+" and "+name12+" Got"+" Good Percent";
}
else if(n<=95){
    document.getElementById("result-text").innerText="Dear, "+name11+" and "+name12+" Got"+" Best Percent";
}
else{
    document.getElementById("result-text").innerText="Dear, "+name11+" and "+name12+" Got"+" Perfect Percent";
}
}