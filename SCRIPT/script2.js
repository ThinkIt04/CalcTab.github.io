function menu(){
     document.getElementById('form2').style.display = "none";
     document.getElementById('form3').style.display = "none";
     document.getElementById('form4').style.display = "none";
     document.getElementById('form5').style.display = "none";
     document.getElementById('form6').style.display = "none";
     document.getElementById('form1').style.display = "block";
}
function m1(){
     document.getElementById('form1').style.display = "none";
     document.getElementById('form3').style.display = "none";
     document.getElementById('form4').style.display = "none";
     document.getElementById('form5').style.display = "none";
     document.getElementById('form6').style.display = "none";
     document.getElementById('form2').style.display = "block";
}
function m2(){
     document.getElementById('form1').style.display = "none";
     document.getElementById('form2').style.display = "none";
     document.getElementById('form4').style.display = "none";
     document.getElementById('form5').style.display = "none";
     document.getElementById('form6').style.display = "none";
     document.getElementById('form3').style.display = "block";
}
function m3(){
     document.getElementById('form1').style.display = "none";
     document.getElementById('form2').style.display = "none";
     document.getElementById('form3').style.display = "none";
     document.getElementById('form5').style.display = "none";
     document.getElementById('form6').style.display = "none";
     document.getElementById('form4').style.display = "block";
}
function m4(){
     document.getElementById('form1').style.display = "none";
     document.getElementById('form2').style.display = "none";
     document.getElementById('form3').style.display = "none";
     document.getElementById('form4').style.display = "none";
     document.getElementById('form6').style.display = "none";
     document.getElementById('form5').style.display = "block";
}
function m5(){
     document.getElementById('form1').style.display = "none";
     document.getElementById('form2').style.display = "none";
     document.getElementById('form3').style.display = "none";
     document.getElementById('form4').style.display = "none";
     document.getElementById('form5').style.display = "none";
     document.getElementById('form6').style.display = "block";
}
function rep(){
   document.getElementById('ra1').style.display = "none";
   document.getElementById('ra2').style.display = "none";
   document.getElementById('rep').style.display = "none";
   document.getElementById('ra1').innerHTML = ``;
   document.getElementById('ra2').innerHTML = ``;
   document.getElementById('pro').innerHTML = `<textarea class="enter" name="Problems" id="Problem" cols="30" rows="1" required></textarea><label class="labl" for="Problem"><h5><i class="far fa-comment"></i> Problem</h5></label>`;
   document.getElementById('pro').style.display = "block";
   document.getElementById('re').style.display = "inline-block";
}
function re(){
   document.getElementById('pro').style.display = "none";
   document.getElementById('re').style.display = "none";
   document.getElementById('ra1').innerHTML = `<label id="rat"><h5>Rating</h5></label><br><div id="rates"><input type="radio" name="Ratings" id="1s" value="5"><label for="1s" class="rat"><i class="fas fa-star"></i></label><input type="radio" name="Ratings" id="2s" value="4"><label for="2s" class="rat"><i class="fas fa-star"></i></label><input type="radio" name="Ratings" id="3s" value="3"><label for="3s" class="rat"><i class="fas fa-star"></i></label><input type="radio" name="Ratings" id="4s" value="2"><label for="4s" class="rat"><i class="fas fa-star"></i></label><input type="radio" name="Ratings" id="5s" value="1"><label for="5s" class="rat"><i class="fas fa-star"></i></label>`;
   document.getElementById('ra2').innerHTML = `<textarea class="enter" name="Comments" id="Comment" cols="30" rows="1" required></textarea><label class="labl" for="Comment"><h5><i class="far fa-comments"></i> Comment</h5></label>`;
   document.getElementById('pro').innerHTML = ``;
   document.getElementById('ra1').style.display = "block";
   document.getElementById('ra2').style.display = "block";
   document.getElementById('rep').style.display = "inline-block";
}
function copyInput2() {
     var copy = document.getElementById('display');
     copy.select();
     document.execCommand("copy");
}
function addChar(input, character) {
     if (input.value == null || input.value == "0")
         input.value = character
     else
         input.value += character
 }
function cos(form) {
         form.display.value = Math.cos(form.display.value);
}
function sin(form) {
         form.display.value = Math.sin(form.display.value);
}
function tan(form) {
         form.display.value = Math.tan(form.display.value);
}
function sqrt(form) {
         form.display.value = Math.sqrt(form.display.value);
}
function ln(form) {
         form.display.value = Math.log(form.display.value);
}
function exp(form) {
         form.display.value = Math.exp(form.display.value);
}
function deleteChar(input) {
         input.value = input.value.substring(0, input.value.length - 1)}
var val = 0.0;
function percent(input) {
         val = input.value;
    input.value = input.value + "%";}
function changeSign(input) {
     if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
     else
        input.value = "-" + input.value}
function compute(form) {
         form.display.value = eval(form.display.value);
}
function square(form) {
         form.display.value = eval(form.display.value) * eval(form.display.value)}
function checkNum(str) {
     for (var i = 0; i < str.length; i++) {
          var ch = str.charAt(i);
          if (ch < "0" || ch > "9") {
               if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                    && ch != "(" && ch != ")" && ch != "%") {
                    alert("invalid entry!")
               return false}
          }
     }
     return true
}

function hi(){document.getElementById('t1').style.display='none';document.getElementById('t2').style.display='none';document.getElementById('t3').style.display='none';document.getElementById('t4').style.display='none';document.getElementById('t5').style.display='none';document.getElementById('t6').style.display='none';}
          function uc1(){document.getElementById('t1').style.display='block';}
          function uc2(){document.getElementById('t2').style.display='block'}
          function uc3(){document.getElementById('t3').style.display='block';}
          function uc4(){document.getElementById('t4').style.display='block';}
          function uc5(){document.getElementById('t5').style.display='block';}
          function uc6(){document.getElementById('t6').style.display='block';}
          function len(){
          var from=document.getElementById('flength').value;
          var to=document.getElementById('tlength').value;
          var totext = document.getElementById('tlength').options[document.getElementById('tlength').selectedIndex].text;
          var ip=document.getElementById('lip').value;
          if(document.getElementById('lip').value==null||document.getElementById('lip').value.length==0)document.getElementById('lop').value='Please enter No. of Units';
          else
          document.getElementById('lop').value=Math.round(ip*from/to*100000)/100000+ ' ' +totext ;}
          function area(){
          var from=document.getElementById('farea').value;
          var to=document.getElementById('tarea').value;
          var totext = document.getElementById('tarea').options[document.getElementById('tarea').selectedIndex].text;
          ip=document.getElementById('aip').value;
          if(document.getElementById('aip').value==null||document.getElementById('aip').value.length==0)document.getElementById('aop').value='Please enter No. of Units';
          else
          document.getElementById('aop').value=Math.round(ip*from/to*100000)/100000+ ' ' +totext ;}
          function speed(){
          var from=document.getElementById('fspeed').value;
          var to=document.getElementById('tspeed').value;
          var totext = document.getElementById('tspeed').options[document.getElementById('tspeed').selectedIndex].text;
          var ip=document.getElementById('sip').value;
          if(document.getElementById('sip').value==null||document.getElementById('sip').value.length==0)document.getElementById('sop').value='Please enter No. of Units';
          else
          document.getElementById('sop').value=Math.round(ip*from/to*100000)/100000+ ' ' +totext ;}
          function weight(){
          var from=document.getElementById('fweight').value;
          var to=document.getElementById('tweight').value;
          var ip=document.getElementById('wip').value;
          var totext = document.getElementById('tweight').options[document.getElementById('tweight').selectedIndex].text;
          if(document.getElementById('wip').value==null||document.getElementById('wip').value.length==0)document.getElementById('wop').value='Please enter No. of Units';
          else
          document.getElementById('wop').value=Math.round(ip*from/to*100000)/100000+ ' ' +totext ;}
          function vol(){
          var from=document.getElementById('fvol').value;
          var to=document.getElementById('tvol').value;
          var ip=document.getElementById('vip').value;
          var totext = document.getElementById('tvol').options[document.getElementById('tvol').selectedIndex].text;
          if(document.getElementById('vip').value==null||document.getElementById('vip').value.length==0)document.getElementById('vop').value='Please enter No. of Units';
          else
          document.getElementById('vop').value=Math.round(ip*from/to*100000)/100000+ ' ' +totext ;}
          function temp(){
          var from=document.getElementById('ftemp').value;
          var to=document.getElementById('ttemp').value;
          var ip=document.getElementById('tip').value;
          var totext = document.getElementById('ttemp').options[document.getElementById('ttemp').selectedIndex].text;
          if(document.getElementById('vip').value==null||document.getElementById('tip').value.length==0)document.getElementById('top').value='Please enter No. of Units';
          else
          if(from==1&&to==1)document.getElementById('top').value=ip+totext ;
          if(from==1&&to==2)document.getElementById('top').value=((ip*9/5)+32*1).toFixed(2)+totext ;
          if(from==1&&to==3)document.getElementById('top').value=(ip*1+273.15*1).toFixed(2)+ ' ' +totext ;
          if(from==2&&to==1)document.getElementById('top').value=((ip-32)*5/9).toFixed(2)+totext ;
          if(from==2&&to==2)document.getElementById('top').value=ip+totext ;
          if(from==2&&to==3)document.getElementById('top').value=(((ip-32)*5/9)+273.15).toFixed(2)+ ' ' +totext ;
          if(from==3&&to==1)document.getElementById('top').value=(ip-273.15).toFixed(2)+totext ;
          if(from==3&&to==2)document.getElementById('top').value=((ip-273.15)*9/5 +32*1).toFixed(2)+totext ;
          if(from==3&&to==3)document.getElementById('top').value=ip+ ' ' +totext ;}
          function selunit(){
          if(document.getElementById('ut').value=='1'){hi();uc1();len();};if(document.getElementById('ut').value=='2'){hi();uc2();area();};if(document.getElementById('ut').value=='3'){hi();uc3();speed();};if(document.getElementById('ut').value=='4'){hi();uc4();weight();};if(document.getElementById('ut').value=='5'){hi();uc5();vol();};if(document.getElementById('ut').value=='6'){hi();uc6();temp();};}
          window.onload=function(){hi();uc1();len();}


// formsubmit


     function malt(){
          document.getElementById("m-alert").style.display = "none";
     };
     function talt(){
          document.getElementById("t-alert").style.display = "none";
     };
     function ealt(){
          document.getElementById("e-alert").style.display = "none";
     };

     


     