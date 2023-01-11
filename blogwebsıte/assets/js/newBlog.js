let form = document.querySelector("#formVal");
let inputVal = document.querySelectorAll(".inputVal");
let subBtn = document.querySelector("#subBtn");
let blog = document.querySelector("#blog");
let body = document.querySelector("#body");
let author = document.querySelector("#author");
let authors = document.querySelector("#authors");

const BASE_URL = "http://localhost:8000/blogs";

let customerObj;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  customerObj = {
    title: "",
    body: "",
    author: "",
  };

  customerObj.title = inputVal[0].value;
  customerObj.body = inputVal[1].value;
  customerObj.author = inputVal[2].value;

  console.log(customerObj);

  function postNewCustomer(obj) {
    fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
  postNewCustomer(customerObj);

  // blog.values = " ";
  // body.values = " ";
  // author.values = " ";
  
  let authorFill;
  authors.addEventListener("change", function (e) {
    authorFill = e.target.value;
  });
});

