// UI JS code 
function elementFeatures() {
  let AllElem = document.querySelectorAll(".elem");
  let AllFullElem = document.querySelectorAll(".fullelem");
  let AllFullElemBack = document.querySelectorAll(".fullelem .back");
  let nav = document.querySelector(".nav");
  let elemCard = document.querySelector(".elemCard");

  AllElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      AllFullElem[elem.id].style.display = "block";
      elemCard.style.display = "none";
      nav.style.display = "none";
    });
  });

  AllFullElemBack.forEach(function (back) {
    back.addEventListener("click", function () {
      AllFullElem[back.id].style.display = "none";
      elemCard.style.display = "flex";
      nav.style.display = "block";
    });
  });
}
elementFeatures();

// Todo list code 

let form = document.querySelector(".form");
let inputText = document.querySelector(".Taskname");
let inputDetails = document.querySelector(".TaskDetails");
let ImpMark = document.querySelector(".IMP");

let currentTask = [];

if(localStorage.getItem('currentTask')){
  currentTask=JSON.parse(localStorage.getItem('currentTask'))
}else{
  console.log('Task list is Empty!');
  
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  currentTask.push({
    task: inputText.value,
    details: inputDetails.value,
    imp: ImpMark.checked,
  });
  localStorage.setItem('currentTask',JSON.stringify(currentTask));
  inputText.value = "";
  inputDetails.value = "";
  ImpMark.checked = "";
  renderALLTask();
});

function renderALLTask() {
  let allTask = document.querySelector(".rightTask");
  var sum = "";
  currentTask.forEach(function (elem) {
    sum += `<div class="tasklist">
            <h2>${elem.task} <span class=${elem.imp}>imp</span> </h2>
            
            <button class="mention-btn">Mention As Completd</button>
          </div>`;
  });
  allTask.innerHTML = sum;
}
