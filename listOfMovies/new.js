let list = document.querySelector("#list");
let filmName = document.querySelector("#filmName");
let deleteBtn = document.querySelector("#deleteBtn");
let editBtn = document.querySelector("#editBtn");

let listOfMovies = JSON.parse(localStorage.getItem("movieList")) || [];

filmName.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();

    let divTask = document.createElement("div");
    divTask.className = "taskDiv";
    list.appendChild(divTask);

    let custumS = document.createElement("span");
    custumS.className = "custumS";
    custumS.innerText = filmName.value;
    divTask.appendChild(custumS);
    // custumS.setAttribute("contenteditable", "false");

    listOfMovies.push(filmName.value);
    localStorage.setItem("movieList", JSON.stringify(listOfMovies));

    filmName.value = "";

    let editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pencil";
    custumS.appendChild(editIcon);
    // custumS.contentEditable = true;

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-regular fa-trash-can";
    custumS.appendChild(deleteIcon);

    // icon.addEventListener("click", function () {
    //   let filmArr = JSON.parse(localStorage.getItem("movieList"));
    //   for (let i = 0; i < filmArr.length; i++) {
    //     if (filmArr[i] == filmName.value) {
    //       filmArr[i] = filmName.value;
    //     }
    //   }
    // });
  }
});

let filmArr = JSON.parse(localStorage.getItem("movieList"));

// deleteIcon.addEventListener("click", function () {
//   for (let i = 0; i < filmArr.length; i++) {
//     if (filmArr[i] == filmName.value) {
//       filmArr.splice(i, 1);
//     }
//   }
// });

deleteBtn.addEventListener("click", function () {
  list.innerHTML = "";
  localStorage.removeItem("movieList");
});

// let todos = JSON.parse(localStorage.getItem("movieList"));
// let newlist = todos.splice(listOfMovies, 1);
// localStorage.setItem("movieList", JSON.stringify(listOfMovies));
