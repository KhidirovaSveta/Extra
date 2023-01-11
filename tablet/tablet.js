const BASE_URL = "https://northwind.vercel.app/api/";
let tbody = document.querySelector("tbody");

function usersData(endpoint) {
  fetch(`${BASE_URL}${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      function searchDataInfo(array) {
        array.forEach((element) => {
          let trElement = document.createElement("tr");
          trElement.innerHTML = `
                    <td>${element.id}</td>
                    <td>${element.quantityPerUnit}</td>
                    <td>${element.unitPrice}</td>
                    <td>${element.unitsInStock}</td>
                    <td>${element.unitsOnOrder}</td>
                    <td>${element.name}</td>
                    <td><button id=${element.id}   class="editBtn">Edit</button></td>
                    <td><button id=${element.id}  class="deleteBtn">Delete</button></td>
                    `;
          tbody.appendChild(trElement);
        });
        let delBtn = document.querySelectorAll(".deleteBtn");
        delBtn.forEach((elem) => {
          elem.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentElement.parentElement.remove();
            fetch(`https://northwind.vercel.app/api/products/${this.id}`, {
              method: "DELETE",
            });
          });
        });
      }
      searchDataInfo(data);
    });
}
usersData("products");


