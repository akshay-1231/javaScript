'use strict'
var category=["electronics","clothing","books"];
var Product=[{
    name:'dress',
    price:4000,
    path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjsVWDNQm1PHk9aQAthxyi-zpOw2rg258Ag&s",
},{ name:'dress',
    price:6000,
    path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjsVWDNQm1PHk9aQAthxyi-zpOw2rg258Ag&s",},
    { name:'dress',
        price:5000,
        path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjsVWDNQm1PHk9aQAthxyi-zpOw2rg258Ag&s",}];

        //short circuit operator
        category && category.length>0 && category.forEach(function(v,i){
                  console.log(v,i);

             var listtag =document.createElement("li");

             console.log(listtag);  
             listtag.innerHTML =v; 
             //to transfer one elemeny to another 
             document.querySelector('ul').append(listtag);
                  
        });

        Product && Product.length>0 && Product.forEach(function(v,i){
            console.log(v,i);

            var divtag =document.createElement("div");

            console.log(divtag);

            divtag.className = "col-xl-4 text-center";
            var imgtag=document.createElement("img");

            var h2tag=document.createElement("h2");
            var ptag = document.createElement("p");

            imgtag.src =v.path;

            imgtag.className ="img-fluid";
            h2tag.innerHTML =v.price;
           ptag.innerHTML =v.name;

            divtag.append(imgtag,h2tag,ptag);

           document.getElementById("row").append(divtag);
            
        })