let BASE_URL = "http://localhost:8000/blogs";
let dataBox = document.querySelector(".dataBox");
let data = document.querySelector(".data");

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    let delBtn = document.querySelector(".delBtn");
    function blogData(array) {
      for (let i = 0; i < array.length; i++) {
        dataBox.innerHTML += `     
             <div class="box1">
            <h1 class="title-color" >${array[i].title}</h1>
            <p class="purple-text">${array[i].body}</p>
            <p>${array[i].author}</p>
            <button  class="delBtn" > Delete </button>
          </div>`;
      }
    }
    console.log(data);
    blogData(data);
  });

// data.appendChild(delBtn);
// let deleteBtn = document.querySelectorAll(".delBtn");
// for (let i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener("click", (e) => {
//     let id = e.target.getAttribute("id");
//     console.log(id);
//     axios.delete(`${BASE_URL}/${id}`);
//     fetching();
//   });
// }
