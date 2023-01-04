let container = document.getElementById("contain")
let head = document.getElementById("head")
let list = document.getElementById("list")
let headtit = document.createElement('h1')
headtit.innerHTML = "To Do List"
head.appendChild(headtit)
// years
    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDate()
    let hour =d.getHours()
    let min = d.getMinutes()
    let date = document.createElement("p")
    head.appendChild(date)
    date.innerHTML = `${year}оны ${month}сарын${day}өдөр  ${hour}цаг ${min}мин ` 
    tsag()
function tsag(){
    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDate()
    let hour =d.getHours()
    let min = d.getMinutes()
    date.innerHTML = `${year}оны ${month + 1}сарын ${day}өдөр  ${hour}цаг ${min}мин ` 
    setTimeout(tsag, 1000)
}
// list too 
let listToo = 0
let too = document.createElement("p")
too.innerHTML = `Нийт ${ listToo } жагсаалт`
head.appendChild(too)
// add 
let input = document.createElement("input")
input.placeholder = " Жагсаалтаа оруулна уу"
head.appendChild(input)
let btn = document.createElement("button")
btn.innerHTML = "Нэмэх"
head.appendChild(btn)
btn.addEventListener("click", nemeh)
//  list show 
let secTwo = document.getElementById("list") 
let jagsaaltTit = document.createElement("h1")
jagsaaltTit.innerHTML ="Жагсаалт"
secTwo.appendChild(jagsaaltTit)
let listContain = document.createElement("div")
list.appendChild(listContain)
function nemeh (){
    let utga = document.getElementsByTagName("input")[0].value
   if (utga.length > 1){
    listToo++
    let text = document.createElement("div")
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    console.log(checkBox.value);
    let pp = document.createElement("input")
    pp.placeholder = utga
    pp.readOnly = true
    pp.className = "listItem"
    let icontg = document.createElement("div")
    icontg.innerHTML = '<i class="bi bi-trash3"></i>'
    let iconSearch = document.createElement("div")
    iconSearch.innerHTML = '<i class="bi bi-pencil"></i>'
    listContain.appendChild(text)
    text.appendChild(checkBox)
    text.appendChild(pp)
    text.appendChild(icontg)
    text.appendChild(iconSearch)
    document.getElementsByTagName("input")[0].value = ""
    too.innerHTML = `Нийт ${listToo} жагсаалт`
    icontg.addEventListener("click", function(){
        listContain.removeChild(text)
        listToo-- 
        too.innerHTML = `Нийт ${listToo} жагсаалт`

    })
    iconSearch.addEventListener("click", function(){
        text.style.backgroundColor = " #4F5B9BFF"
        pp.style.backgroundColor = "  #4F5B9BFF"
        pp.readOnly = false
        fixedTit = pp.placeholder
        pp.value = fixedTit
        pp.addEventListener("keypress", function(e){
            if (e.keyCode === 13){
                pp.readOnly = true
                text.style.backgroundColor = "#5F4B8BFF "
                pp.style.backgroundColor = "#5F4B8BFF "
            }
        })
    })
    checkBox.addEventListener("click", function(){
        if (checkBox.checked == true ){
            listContain.removeChild(text)
        } 
    })
   
}
}


