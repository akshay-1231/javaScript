//style manupulation

'use strict'
console.log(document);
console.log(typeof document);
console.log(document.getElementById('x1'));
console.log(document.getElementById('x2'));

//dom event handaling


document.getElementById('x1').onclick=function(){
  console.log(document.body);
  document.body.style.background="lightgray";
   document.body.style.color="black";
};


document.getElementById('x2').onclick=function(){
    console.log(document.body);
    document.body.style.background="black";
     document.body.style.color="white";
  };