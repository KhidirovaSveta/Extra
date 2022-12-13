const BASE_URL_2 = "https://api.thecatapi.com/v1/";
let search = document.querySelector("#search");
let box = document.querySelector("#cat");

function fetchData(endpoint) {
  fetch(`${BASE_URL_2}${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      function searchCat(catSearch) {
        for (let i = 0; i < catSearch.length; i++) {
          box.innerHTML += `<div class="card" style="width: 18rem;">
          <img src="${catSearch[i].image?.url}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${catSearch[i].name}</h5>
          <p class="card-text"> ${catSearch[i].description}</p>
          <a target = "_blank" href="${catSearch[i].wikipedia_url}" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>`;
        }
      }
      searchCat(data);

      search.addEventListener("input", function () {
        let filteredData = data.filter((data) =>
          data.name
            .toLocaleLowerCase()
            .includes(search.value.toLocaleLowerCase())
        );
        box.innerHTML = "";
        searchCat(filteredData);
        console.log(filteredData);
      });
    })
    .catch((err) => console.log(err));
}

fetchData("breeds");

// const BASE_URL_2 = "https://api.thecatapi.com/v1/";
// let search = document.querySelector("#search");
// let box = document.querySelector(".box");

// function fetchData(endpoint) {
//   fetch(`${BASE_URL_2}${endpoint}`)
//     .then((response) => response.json())
//     .then((data) => {
//       function searchCat(array) {
//         for (let i = 0; i < array.length; i++) {
//           box.innerHTML += `<div class="card" style="width: 18rem;">
//             <img src="${array[i].image?.url}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${array[i].name}</h5>
//               <p class="card-text"> ${array[i].description}</p>
//               <a target = "_blank" href="${array[i].wikipedia_url}" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>`;
//         }
//       }
//       searchCat(data);

//       search.addEventListener("input", function () {
//         let filteredData = data.filter((data) =>
//           data.name
//             .toLocaleLowerCase()
//             .includes(search.value.toLocaleLowerCase())
//         );
//         // console.log(filteredData);
//         box.innerHTML = "";
//         searchCat(filteredData);
//       });
//     })
//     .catch((err) => console.log(err));
// }
// fetchData("breeds");

// const BASE_URL = "https://jsonplaceholder.typicode.com/";
// let tbody = document.querySelector("tbody");
// let searchInput = document.querySelector("#searchInput");

// function usersData(endpoint) {
//   fetch(`${BASE_URL}${endpoint}`)
//     .then((response) => response.json())
//     .then((data) => {
//       function searchDataInfo(array) {
//         array.forEach((element) => {
//           // console.log(data);
//           let trElement = document.createElement("tr");
//           trElement.innerHTML = `
//                     <td>${element.id}</td>
//                     <td>${element.name}</td>
//                     <td>${element.username}</td>
//                     <td>${element.email}</td>
//                     <td>${element.address.street}</td>
//                     <td>${element.address.city}</td>
//                     <td>${element.website}</td>
//                     <td>${element.company.name}</td>
//                     `;
//           tbody.appendChild(trElement);
//         });
//       }
//       searchDataInfo(data);

//       searchInput.addEventListener("input", function () {
//         let searchData = data.filter((search) =>
//           search.name
//             .toLocaleLowerCase()
//             .includes(searchInput.value.toLocaleLowerCase())
//         );
//         // console.log(searchData);
//         tbody.innerHTML = "";
//         searchDataInfo(searchData);
//       });
//     });
// }
// usersData("users");
