function bar(){
     document.getElementById('bar').style.opacity = "0";
     document.getElementById('list-example').style.transform = "translateY(0rem)";
     document.getElementById('list-example').style.animationName = "in";
     document.getElementById('bar').style.display = "none";
     document.getElementById('back').style.display = "block";
     document.getElementById('back').style.opacity = "1";
}
function barn(){
     document.getElementById('back').style.opacity = "0";
     document.getElementById('list-example').style.transform = "translateY(-20rem)";
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