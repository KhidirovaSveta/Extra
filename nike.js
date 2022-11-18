let blue=document.querySelector(".circle")
let redCircle=document.querySelector(".circle2")
let red=document.querySelector(".nike2")
let blueNike=document.querySelector(".nike")



redCircle.addEventListener("click",function(){
blueNike.style.display="none"
red.style.display="block"
})
blue.addEventListener("click",function(){
    red.style.display="none"
    blueNike.style.display="block"
    })
