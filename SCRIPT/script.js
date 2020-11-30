function bar(){
     document.getElementById('bar').style.opacity = "0";
     document.getElementById('list-example').style.height = "15rem";
     document.getElementById('list-example').style.opacity = "1";
     document.getElementById('bar').style.display = "none";
     document.getElementById('back').style.display = "block";
     document.getElementById('back').style.opacity = "1";
}
function barn(){
     document.getElementById('back').style.opacity = "0";
     document.getElementById('list-example').style.height = "0";
     document.getElementById('list-example').style.opacity = "0";
     document.getElementById('bar').style.display = "block";
     document.getElementById('back').style.display = "none";
     document.getElementById('bar').style.opacity = "1";
}
function startTime() {
     var today = new Date();
     var h = today.getHours();
     var m = today.getMinutes();
     var s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);
     var t = setTimeout(startTime, 500);
     var d = new Date();          
     var n = d.toLocaleString([], { hour12: true});
     document.getElementById("date-time").innerHTML = n;
}
function checkTime(i) {
     if (i < 10) {i = "0" + i};
     return i;
}
function copyInput() {
     var copy = document.getElementById('result');
     copy.select();
     document.execCommand("copy");
}
function deleteChar(input) {
     input.value = input.value.substring(0, input.value.length - 1)
}
function display(val) {
     document.getElementById("result").value+=val;
}
function solve(){ 
     let x = document.getElementById("result").value ;
     let y = eval(x) ;
     document.getElementById("result").value = y ;
}