// firstHead app tatah
let appDow = document.getElementsByClassName("downldLink")[0]
appDow.addEventListener("click", function(){
    let modal = document.getElementsByClassName("modal")[0]
    document.getElementsByClassName("modal")[0].style.display = "flex"
})
let cancelDl = document.querySelector(".cancelDl")
cancelDl.addEventListener("click", function(){
    let modal = document.getElementsByClassName("modal")[0]
})
//feedback
let buttunComment = document.getElementById("comment")
buttunComment.addEventListener("click", function(){
    let modal = document.getElementsByClassName("modal")[1]
    document.getElementsByClassName("modal")[1].style.display = "flex"
})
// scroll hide nav 

document.addEventListener("scroll", function(){
    if (38 > window.scrollY){
        document.getElementById("both").style.marginTop = - window.scrollY;
    } else if (37 == window.scrollY){
        document.getElementById("both").style.marginTop = -37
    }else {
        document.getElementById("both").style.marginTop = -37
    }
})
document.addEventListener("scroll", function(){
    if (150 <= window.scrollY){
        document.getElementById("lastnav").style.display = "none"
    }else  if (150 > window.scrollY) {
        document.getElementById("lastnav").style.display = "flex"
    }
})
countDown()
function countDown(){
    let Nday = 31, Nhours = 24, Nmin = 60 , Nsec = 60
    let recentTime = new Date()
    let day = Nday - recentTime.getDate()
    let hours = Nhours - recentTime.getHours()
    let min = Nmin - recentTime.getMinutes()
    let sec = Nsec - recentTime.getSeconds()
    document.getElementById("ShowDay").innerHTML = day
    document.getElementById("ShowHour").innerHTML = hours
    document.getElementById("ShowMin").innerHTML = min
    document.getElementById("ShowSec").innerHTML = sec
    setInterval(countDown, 1000)
}
// second head all button
let allbtn = document.getElementById("allBtn")
allbtn.addEventListener("click", function(){
    if (document.getElementById("searchCat").style.display == 'none'){
        document.getElementById("searchCat").style.display = "flex"
    } else {
        document.getElementById("searchCat").style.display = "none"
    }
})
// ticket slide
var slideIndex = 0; 
slideChange()
function slideChange(){
    let x = document.getElementsByClassName("slideItem")
    for (i = 0 ; i < x.length ; i++){
        x[i].style.display = "none"
    }
    if (slideIndex > x.length) {slideIndex = 0;}
    x[slideIndex].style.display = "block"
    console.log(slideIndex);
    slideIndex++
    if (slideIndex >= x.length) {slideIndex = 0;}
    console.log(slideIndex);
    x[slideIndex].style.display = "block"
    setTimeout(slideChange, 5000)
}