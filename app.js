"use strict";

let projctIamgeBox = document.querySelectorAll(".our-project-image-box");
let projctContainer = document.querySelector(".our-project-container");
let seeMore = document.querySelector(".our-project-see-more");
let counter = 0;

let btnRight = document.querySelector(".arrow-right");
let btnLeft = document.querySelector(".arrow-left");
let cardNode = document.querySelectorAll(".review-card");
let cardArray = [...cardNode];

/* По клику на кнопку запускается счетчик кликов
Если значение счетчика четное, то алгоритм берет
значение из первого объекта массива порядков order, если 
не четное то из второго объекта */

seeMore.addEventListener("click", (event) => {
  /* Порядок комбинации картинок в projctImageBox
Либо четвартая картинка в одном боксе со второй
либо первая с третьей */
  let order = [
    {
      1: "1",
      2: "3",
    },
    {
      1: "2",
      2: "4",
    },
  ];
  let firstImage, secondImage;

  if (counter % 2 == 0) {
    firstImage = Object.values(order[0])[0];
    secondImage = Object.values(order[0])[1];
  } else {
    firstImage = Object.values(order[1])[0];
    secondImage = Object.values(order[1])[1];
  }
  fetch("base.json")
    .then((response) => response.json())
    .then((data) => {
      let image = `
        <div class="our-project-image-box">
        <div class="image-container">
          <div class="hover-block">
            <h3>
              Квартира-студия 30 кв.м.
            </h3>
            <p>
              В квартире были светлые стены и тёплые цвета. Мы сконцентрировались на отсылках к природе и сделали ребятам уютный интерьер, отсылающий к виллам островов Бали.
            </p>
          </div>
          <img
            src="${data[`img-${firstImage}`].src}"
            alt="${data[`img-${firstImage}`].alt}"
            class="${data[`img-${firstImage}`].class}"
            width="${data[`img-${firstImage}`].width}"
            height="${data[`img-${firstImage}`].height}"
          />
        </div>
        <div class="image-container">
          <div class="hover-block">
            <h3>
              Квартира-студия 30 кв.м.
            </h3>
            <p>
              В квартире были светлые стены и тёплые цвета. Мы сконцентрировались на отсылках к природе и сделали ребятам уютный интерьер, отсылающий к виллам островов Бали.
            </p>
          </div>
          <img
          src="${data[`img-${secondImage}`].src}"
          alt="${data[`img-${secondImage}`].alt}"
          class="${data[`img-${secondImage}`].class}"
          width="${data[`img-${secondImage}`].width}"
          height="${data[`img-${secondImage}`].height}"
          />
        </div>
      </div>
                    `;
      projctContainer.insertAdjacentHTML("beforeend", image);
    });
  counter = counter + 1;
});

btnRight.addEventListener("click", (event) => {
  let currentCard;
  cardArray.forEach((el) => {
    if (el.hidden === false) {
      currentCard = cardArray.indexOf(el);
    }
  });
  cardArray[currentCard].hidden = true;
  if (currentCard != cardArray.length - 1) {
    cardArray[currentCard + 1].hidden = false;
  } else {
    currentCard = 0;
    cardArray[currentCard].hidden = false;
  }
});
