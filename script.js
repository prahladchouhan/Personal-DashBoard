function elementFeatures() {
  let AllElem = document.querySelectorAll(".elem");
  let AllFullElem = document.querySelectorAll(".fullelem");
  let AllFullElemBack = document.querySelectorAll(".fullelem .back");

  let elemCard = document.querySelector(".elemCard");

  AllElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      AllFullElem[elem.id].style.display = "block";
      elemCard.style.display = "none";
    });
  });

  AllFullElemBack.forEach(function (back) {
    back.addEventListener("click", function () {
      AllFullElem[back.id].style.display = "none";
      elemCard.style.display = "flex";
    });
  });
}
elementFeatures();