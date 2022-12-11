let box = document.querySelector(".box");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");
let score = document.querySelector("#score");
let reset = document.querySelector("#reset");
let user = document.querySelector("#user");

let bubble;
let bubbleInterval;
let bubbleScore = 0;
// let person;

// window.onload = (event) => {
//   let person = document.createElement("p");
//   event = prompt("Please enter your name");
//   person.innerText = event.value;
//   user.appendChild(person);

//   // if ((event = prompt("Please enter your name"))) {
//   //   person.innerText = event.value;
//   //   user.appendChild(person);
//   // }
// };

start.addEventListener("click", function () {
  start.disabled = true;
  stop.disabled = false;
  clearInterval(bubbleInterval);
  bubbleInterval = setInterval(function () {
    creatBubble();
  }, 1500);

  document.querySelectorAll(".bubble").forEach((element) => {
    element.disabled = false;
  });
});

easy.addEventListener("click", function () {
  start.disabled = true;
  stop.disabled = false;
  clearInterval(bubbleInterval);
  bubbleInterval = setInterval(function () {
    creatBubble();
  }, 2000);
});

medium.addEventListener("click", function () {
  start.disabled = true;
  stop.disabled = false;
  clearInterval(bubbleInterval);
  bubbleInterval = setInterval(function () {
    creatBubble();
    bubble.addEventListener("click", function () {
      this.remove();
      bubbleScore += 1;
      score.innerText = bubbleScore;
    });
  }, 1000);
});

hard.addEventListener("click", function () {
  start.disabled = true;
  stop.disabled = false;
  clearInterval(bubbleInterval);
  bubbleInterval = setInterval(function () {
    creatBubble();
    bubble.addEventListener("click", function () {
      this.remove();
      bubbleScore += 2;
      score.innerText = bubbleScore;
    });
  }, 500);
});

stop.addEventListener("click", function () {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(bubbleInterval);
  document.querySelectorAll(".bubble").forEach((element) => {
    element.disabled = true;
  });
});

reset.addEventListener("click", resetGame);

function resetGame() {
  start.disabled = false;
  stop.disabled = false;
  box.innerHTML = "";
  score.innerText = "0";
  bubbleScore = 0;
  clearInterval(bubbleInterval);
}

function creatBubble() {
  let leftPop = Math.floor(Math.random() * (95 - 1) + 1);
  let topPop = Math.floor(Math.random() * (95 - 1) + 1);
  bubble = document.createElement("button");
  bubble.setAttribute("class", "bubble");
  bubble.style.width = "25px";
  bubble.style.height = "25px";
  bubble.style.backgroundColor = "#87ceeb";
  bubble.style.borderRadius = "50%";
  bubble.style.border = "none";
  bubble.style.position = "absolute";
  bubble.style.left = `${leftPop}%`;
  bubble.style.top = `${topPop}%`;
  bubble.style.cursor = "pointer";

  box.appendChild(bubble);

  if (document.querySelectorAll(".bubble").length == 50) {
    clearInterval(bubbleInterval);
    if (confirm(`Game over. Your score is ${bubbleScore}`)) {
      resetGame();
    }

    // box.innerHTML = `<p class = "over"> Game Over. Your score is ${bubbleScore} <p>`;
    // start.disabled = false;
    // stop.disabled = false;
    // score.innerText = "0";
    // bubbleScore = 0;
  }
  bubble.addEventListener("click", function () {
    this.remove();
    bubbleScore += 1;
    score.innerText = bubbleScore;
  });
}
