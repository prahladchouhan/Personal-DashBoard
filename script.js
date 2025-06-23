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
      // nav.style.display = "none";
    });
  });

  AllFullElemBack.forEach(function (back) {
    back.addEventListener("click", function () {
      AllFullElem[back.id].style.display = "none";
      elemCard.style.display = "flex";
      // nav.style.display = "block";
    });
  });
}
elementFeatures();

// Todo list code
function todoList() {
  let currentTask = [];
  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is Empty!");
  }
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
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    document.querySelectorAll(".tasklist button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderALLTask();
      });
    });
  }

  let form = document.querySelector(".form");
  let inputText = document.querySelector(".Taskname");
  let inputDetails = document.querySelector(".TaskDetails");
  let ImpMark = document.querySelector(".IMP");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    currentTask.push({
      task: inputText.value,
      details: inputDetails.value,
      imp: ImpMark.checked,
    });
    renderALLTask();

    inputText.value = "";
    inputDetails.value = "";
    ImpMark.checked = "";
  });
}
todoList();

// Daily planner

function dailyPlanner() {
  var dayPlanner = document.querySelector(".daily-planner");

  var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  var hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`
  );

  var wholeDaySum = "";
  hours.forEach(function (elem, idx) {
    var savedData = dayPlanData[idx] || "";

    wholeDaySum =
      wholeDaySum +
      `<div class="planner-timer">
    <p>${elem}</p>
    <input id=${idx} type="text" placeholder="..." value=${savedData}>
</div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;

  var dayPlannerInput = document.querySelectorAll(".planner-timer input");

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}
dailyPlanner();

// motivational Quate!
function motivationalQuote() {
  let motivationalContent = document.querySelector(".Q-box-head");
  let motivationalAuthor = document.querySelector(".Q-author-name");
  async function fetchQuote() {
    let response = await fetch(
      "http://api.quotable.io/random" );
    let data = await response.json();
    console.log(data.author);

    motivationalContent.innerHTML = data.content;
    motivationalAuthor.innerHTML = data.author;
  }
  fetchQuote();
}
motivationalQuote();
