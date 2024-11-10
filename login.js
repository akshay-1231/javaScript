'use strict'
import auth from './libraray.js';

document.querySelector('button').onclick =function(){
   // alert('hellow world');

   var data1=document.getElementById("x1").value;
   var data2=document.getElementById("x2").value;

    var authobj =new auth();

    console.log(authobj);
    var ans1=  authobj.checkemail(data1);

  console.log(ans2);
  var ans2= authobj.checkpassword(data2);
  console.log(ans2);

  if(ans1 && ans2){
    document.querySelector('p').innerHTML ="ok";

  }
  else{
    document.querySelector("p").innerHTML ="invalid email id or password";
  }
   
};