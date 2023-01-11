const BASE_URL = "https://restcountries.com/v2/all";
let search = document.querySelector(".search");
let click = document.querySelector(".click");
let head = document.querySelector(".head");
let div = document.querySelector("#country");
let header = document.querySelector(".dark-mode");
let searchDark = document.querySelector(".searchDark");
let body = document.getElementsByTagName(".dark");
let filterReg = document.querySelector("#filterReg");
let card = document.querySelector(".card");

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    let arr = data;
    function country(findCount) {
      for (let i = 0; i < findCount.length; i++) {
        div.innerHTML += `
        <div class='col-3 mt-4 flexBox'>
        <div class="card mx-3" style="width: 18rem;">
                <div class="col  mb-3">
                    <img class="imgFlag" src="${findCount[i].flags.svg}" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${findCount[i].name}</h5>
    
                    </div>
    
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Population: ${findCount[i].population}</li>
                    <li class="list-group-item">Region: ${findCount[i].region}</li>
                    <li class="list-group-item">Capital: ${findCount[i].capital}</li>
                    </ul>
    

                  </div>
                </div>
                </div>
        `;
      }
    }
    country(arr);

    search.addEventListener("input", function () {
      let filteredData = arr.filter((arr) =>
        arr.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
      );
      div.innerHTML = "";
      country(filteredData);
      console.log(filteredData);
    });

    filterReg.addEventListener("change", function () {
      let filtered = arr.filter((arr) => {
        if (arr.region == filterReg.value) {
          return arr.region;
        } else if (filterReg.value == "All") {
          return arr.region;
        }
      });
      div.innerHTML = "";
      country(filtered);
    });
  })
  .catch((err) => console.log(err));

click.addEventListener("click", function () {
  darkMode();
});

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// card.addEventListener("click", function(){

// })