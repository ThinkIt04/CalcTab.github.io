function bar(){
     document.getElementById('bar').style.opacity = "0";
     document.getElementById('list-example').style.transform = "translate(0)";
     document.getElementById('list-example').style.height = "auto";
     document.getElementById('list-example').style.opacity = "1";
     document.getElementById('bar').style.display = "none";
     document.getElementById('back').style.display = "block";
     document.getElementById('back').style.opacity = "1";
}
function barn(){
     document.getElementById('back').style.opacity = "0";
     document.getElementById('list-example').style.height = "0";
     document.getElementById('list-example').style.opacity = "0";
     document.getElementById('list-example').style.transform = "translateY(-20rem)";
     document.getElementById('bar').style.display = "block";
     document.getElementById('back').style.display = "none";
     document.getElementById('bar').style.opacity = "1";
}
function load() {
    document.getElementById('loading').style.display = "none";
    document.getElementById("m-alert").style.display = "block";
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
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth() + 1;
var curyear = dat.getFullYear();
var startyear = dat.getFullYear()-100;
var endyear = dat.getFullYear();
function checkleapyear(datea) {
    if (datea.getYear() % 4 == 0) {
        if (datea.getYear() % 10 != 0) {
            return true;
        } else {
            if (datea.getYear() % 400 == 0) return true;
            else return false;
        }
    }
    return false;
}

function DaysInMonth(Y, M) {
    with(new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}

function datediff(date1, date2) {
    var y1 = date1.getFullYear(),
        m1 = date1.getMonth(),
        d1 = date1.getDate(),
        y2 = date2.getFullYear(),
        m2 = date2.getMonth(),
        d2 = date2.getDate();
    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}

function calage() {
    var calday = document.birthday.day.options[document.birthday.day.selectedIndex].value;
    var calmon = document.birthday.month.options[document.birthday.month.selectedIndex].value;
    var calyear = document.birthday.year.options[document.birthday.year.selectedIndex].value;
    if (curday == "" || curmon == "" || curyear == "" || calday == "" || calmon == "" || calyear == "") {
        document.getElementById('alert').innerText = "Please fill out all the values..!!";
    } else {
        var curd = new Date(curyear, curmon - 1, curday);
        var cald = new Date(calyear, calmon - 1, calday);
        
        var diff = Date.UTC(curyear, curmon, curday, 0, 0, 0) - Date.UTC(calyear, calmon, calday, 0, 0, 0);
        var dife = datediff(curd, cald);
        document.getElementById('old').innerHTML = dife[0] + " year(s), " + dife[1] + " month(s) and " + dife[2] + " day(s) old.";
        var monleft = (dife[0] * 12) + dife[1];
        var secleft = diff / 1000 / 60;
        var hrsleft = (secleft / 60);
        var daysleft = (hrsleft / 24);
        document.getElementById('for').innerHTML = monleft + " months since your birth or<br>" + daysleft + " days since your birth or<br>" + hrsleft + " hours since your birth or<br>" + secleft + " minutes since your birth or<br>" + (secleft*60) + " seconds since your birth";
        var as = parseInt(calyear) + dife[0] + 1;
        var diff = Date.UTC(as, calmon, calday, 0, 0, 0) - Date.UTC(curyear, curmon, curday, 0, 0, 0);
        var datee = diff / 1000 / 60 / 60 / 24;
        document.getElementById('next').innerHTML = datee + " day(s).";
        document.getElementById('inn').style.height = "0";
        document.getElementById('inn').style.overflow = "hidden";
        document.getElementById('res').style.opacity = "1";
        document.getElementById('res').style.height = "60vh";
        document.getElementById('res').style.overflow = "auto";
    }
}
function newinn(){
     document.getElementById('res').style.height = "0";
     document.getElementById('res').style.overflow = "auto";
     document.getElementById('res').style.opacity = "0";
     document.getElementById('inn').style.height = "auto";
}