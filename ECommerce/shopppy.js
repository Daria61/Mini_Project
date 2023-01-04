let allProduct = []
let wishList = []
let list = document.getElementById("list")
let cate =document.getElementById("catgo")
let aside = document.getElementById("asideCate")
let input = document.getElementById("input")
let wish = document.getElementById("wish")
let modal = document.getElementById("modal")
let pagesFill = document.getElementById("Pages")
let wishNum = 0
wish.innerHTML = wishNum
fillproduct()
function fillproduct(){
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        allProduct = [...data.products]
        console.log(allProduct);
        inner()
        categorFill()
    })
    .catch((err)=> console.log(err))
}
function inner(para){
    let row = ''
    list.innerHTML = "";
    (para ? (para.length == 0 ? [] : para) : allProduct).map((a) =>{
        row+= `<div class = "col-md-4 col-6  ">
        <a href="./detail.html?productID=${a.id}" >
        <div> 
        <div class = "m-2 border rounded p-0">
        <img class = "rounded" src="${a.thumbnail}">
        <div class = "m-3 ">
        <h5>${a.title}</h5>
        <p>Price: ${a.price}</p>
        <p class = "descrip">Description: ${a.description}</p>
        </a>
        <div class ="row">
            <div class ="col-7">
                <p><i class="color-warning bi bi-star-fill"></i> ${a.rating}/5</p>
                <p class="discount rounded-1 p-1">${a.discountPercentage}% OFF</p>
            </div>
            <button class ="col-5 btn btn-primary" onclick="AddWish('${a.id}')" >Add</button>
        </div>
        </div>
        </div></div>
        </div>`
    })
    list.innerHTML = row
}
function categorFill(which){
    let row = ""
    let rowarr = []
    allProduct.map((a) =>{
       if(!rowarr.includes(a.category)){
        rowarr.push(a.category)
       }
    })
    rowarr.map((a) =>{
        row +=
        `<p class = "col" id="c${a}" onclick = "categorFill('${a}')">${a}</p>`
    })
    cate.innerHTML = row
    aside.innerHTML = row
    Category(which)
}


input.addEventListener("input", (e) => {
   let filtedProduct = allProduct.filter((a) => {
    return a.title.includes(e.target.value) == true
   })
   inner(filtedProduct)
})
function Category(which){
    let filtedByCate = allProduct.filter((b) =>{
        return b.category.includes(which) == true
    })
    document.getElementById(`c${which}`).style.color= "blue"
    inner(filtedByCate)
}
function AddWish(id){
    confirm("Are yuo sure to add your wish list?")
    if(confirm){
        wishNum ++
        allProduct.map((a) =>{
            if(a.id == id){
                wishList.push(a)
            }
        })
    } 
    console.log(wishList);
    wish.innerHTML = wishNum
}
function DeleteWish(index){
    console.log(index);
    wishList.map((a,id) =>{
        if(index == id){
            wishList.splice(id, 1)
        }
    })
    console.log(wishList);
    Modal()
}
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
                    <button class = "btn col-2" onclick="DeleteWish('${index}')"> <i class="bi bi-trash3"></i></button>
                    <button class = "btn  col-2 ms-5"><a href="./detail.html?productID=${a.id}"><i class="bi bi-three-dots"></i></a></button>
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
    modal.innerHTML = row
    document.getElementById("modal").style.display = "block"
    let CancelMod = document.getElementById("cancel")
    CancelMod.addEventListener("click",()=>{
        document.getElementById("modal").style.display = "none"
    })   
}
function Fillpages(){

}

function SortByPrice(param){
    console.log(param);
    if(param == "low"){
        allProduct.sort((a,b) => a.price - b.price)
        console.log(allProduct)
    }else{
        allProduct.sort((a,b) => b.price - a.price)
    }
    inner(allProduct)
}
