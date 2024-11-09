'use strict'
document.getElementById('btn1').onclick=function(){
   var data1=document.getElementById("x1").value;
   var data2=document.getElementById("x2").value;
   
   console.log(typeof data1);
   console.log(isNaN(data1));
   console.log(data1);
   console.log(data2);
   }
   
   var msg="";
   if(data1 =="" || data2 =="" ){
    msg="please entre all feilds";
   }
   else if(isNaN (data1) || isNaN(data2) ){
  msg="all fields shold contain number values";
   }
   else if(data1 < 0 ||data2 < 0) {
    msg="all feilds shold contain positive values";
   }
   else{
    

    var ans=data1+data2;
 
  

    document.getElementById("y1").innerHTML = ans;
 
    
    
   

   document.getElementById("ans").innerHTML = msg;
};