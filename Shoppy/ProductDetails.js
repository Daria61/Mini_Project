const  params = new URLSearchParams(window.location.search)
console.log(params);
let ID = params.get("productID")
console.log(ID);
let Product =[]
fillData()
function fillData(){
    fetch (`https://dummyjson.com/products/${ID}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        Product = {...data}
        console.log(Product);
        show()
    })
}
let main = document.getElementById("main")
let modalnem = document.getElementById("modalnem")
function Modal(){
    let row = ""
    let roow = ""
    let total = 0
    row += `
        <div class ="row justify-content-between ">
                 <h4 class ="col-2 p-3">Wish List </h4> 
                 <i class="p-3 bi bi-x-lg col-1" id="cancel"></i>
        </div>
        <div class =" border-bottom border-top row">
            <p class = "col-1">Num</p>
            <p class = "col-4 overflow-hidden">Name</p>
            <p class = "col-3">Price</p>
            <p class = "col-1">Delete</p>
            <p class = "col-1 ps-3">More</p>
        </div>`
    if(wishList.length != 0){
        wishList.map((a, index)=> {
            roow += `
            <div class =" pt-3 row">
                <p class = "col-1">${index + 1}</p>
                <p class = "col-4 overflow-hidden">${a.title}</p>
                <p class = "col-3">${a.price}</p>
                <div class= "col-2 row ">
                    <button class = " btn col-2" onclick="DeleteWish('${index}')"> <i class="bi bi-trash3"></i></button>
                    <button class = " btn  col-2 ms-5"><a href="./detail.html?productID=${a.id}"><i class="bi bi-three-dots"></i></a></button>
                </div>
            </div>
            `
            total += a.price
        })
        row += `<div id ="modalover"class="overflow-scroll">
        ${roow}
        </div>`
    } else {
        row+= `<h5 class="text-center">Empty</h5>`
    }
    row += ` 
    <div id="wishlisTotal" class= "border-top">
        <p class ="pt-2"> Total</p>
        <div class = "row">
            <p class = "col-2">Product: ${wishList.length}</p>
            <p class ="col-4">Total Price: ${total}</p>
        </div>
    </div>
    `
    modalnem.innerHTML = row
    document.getElementById("modalnem").style.display = "block"
    let CancelMod = document.getElementById("cancel")
    CancelMod.addEventListener("click",()=>{
        document.getElementById("modalnem").style.display = "none"
    })   
}

function show(){
    let  row  =""
    row += `
    <div class ="container row m-5 border rounded p-5">
       <div class = "col-5">
          <h5>${Product.title}</h5>
          <img src = "${Product.thumbnail}" class = "w-100 rounded">
       </div>
       <div class= "col-5">
          <div class="mt-5">
             <p class="p-0 m-0">Price</p>
             <h4 class="p-0 m-0">$${Product.price}</h4>
             <div>
                <p>${Product.description}</p>
                <p class ="col"><i class="color-warning bi bi-star-fill"></i> ${Product.rating}/5</p>
                <button class ="col-5 btn btn-primary" onclick="AddWish('${Product.id}')" >Add</button>
             </div>
             <div class= "row justify-content-evenly mt-3">
             <div class="col-3"><img class="w-100 rounded" src= "${Product.images[1]}"></div>
             <div class="col-3"><img class="w-100 rounded" src= "${Product.images[2]}"></div>
             <div class="col-3"><img class="w-100 rounded" src= "${Product.images[3]}"></div>
             </div>
          </div>
       </div>
    </div>
    `
    main.innerHTML = row
}
function DeleteWish(index){
    console.log(index);
    wishList.map((a,id) =>{
        if(index == id){
            wishList.splice(id, 1)
        }
    })
    Modal()
}
function Modaldet(){
   let row = ""
   let roow = ""
   let total = 0
   row += `
       <div class ="row justify-content-between ">
                <h4 class ="col-2 p-3">Wish List </h4> 
                <i class="p-3 bi bi-x-lg col-1" id="canceldetial"></i>
       </div>
       <div class =" border-bottom border-top row">
           <p class = "col-1">Num</p>
           <p class = "col-4 overflow-hidden">Name</p>
           <p class = "col-3">Price</p>
           <p class = "col-1">Delete</p>
           <p class = "col-1 ps-3">More</p>
       </div>`
   if(wishList.length != 0){
       wishList.map((a, index)=> {
           roow += `
           <div class =" pt-3 row">
               <p class = "col-1">${index + 1}</p>
               <p class = "col-4 overflow-hidden">${a.title}</p>
               <p class = "col-3">${a.price}</p>
               <div class= "col-2 row ">
                   <button class = " btn col-2" onclick="DeleteWish('${index}')"> <i class="bi bi-trash3"></i></button>
                   <button class = " btn  col-2 ms-5"><a href="./detail.html?productID=${a.id}"><i class="bi bi-three-dots"></i></a></button>
               </div>
           </div>
           `
           total += a.price
       })
       row += `<div id ="modalover"class="overflow-scroll">
       ${roow}
       </div>`
   } else {
       row+= `<h5 class="text-center">Empty</h5>`
   }
   row += ` 
   <div id="wishlisTotal" class= "border-top">
       <p class ="pt-2"> Total</p>
       <div class = "row">
           <p class = "col-2">Product: ${wishList.length}</p>
           <p class ="col-4">Total Price: ${total}</p>
       </div>
   </div>
   `
   modalnem.innerHTML = row
   document.getElementById("modalnem").style.display = "block"
   let CancelMod = document.getElementById("canceldetial")
   CancelMod.addEventListener("click",()=>{
       document.getElementById("modalnem").style.display = "none"
   })   
}