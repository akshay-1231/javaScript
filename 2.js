
'use strict'
document.getElementById('btn').onclick=function(){
   // alert('hello world!');
   //confirm('Are you sure you want to procceed ');
  // prompt('enter your name');
 /// console.log(document.getElementById('x1'));
 var data=document.getElementById("x1").value;
 console.log(data);

 var msg="";
 //if data is entred
// if(data=="blank"){
//msg=="please entre pincode!";
// }
 //else if(data.length!=6){
   // msg=="pincode should be 6 digits";

 //}
 //else{
   // msg=="pincode is valid";
 //}
 //for correcr pin
 var msg=(data=="")? "plese entre pincode" : data.length!=6 ?"pincode should be 6 digit" :"pincode is valid";
 //(condition)?(true-statement):(false-statement)
 console.log(document.getElementById('result'));
 document.getElementById('result').innerHTML=msg;
};