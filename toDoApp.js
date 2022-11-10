
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let deleteBtn = document.querySelector(".deletBtn")
let allTask = document.querySelector(".allTask")
console.log(input.value);


addBtn.addEventListener("click", function() {
  if(input.value!=""){
    console.log(input.value);
    let task = document.createElement("li");
    task.innerText=input.value;
    allTask.append(task);
    input.value = ""
  }
})

deleteBtn.addEventListener("click", function(){
    allTask.innerHTML = ""

})
