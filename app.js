"use strict";

let projctIamgeBox = document.querySelectorAll(".our-project-image-box");
let projctContainer = document.querySelector(".our-project-container");
let seeMore = document.querySelector(".our-project-see-more");

let obj_one;

console.log(obj_one);

seeMore.addEventListener("click", (event) => {
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
            src="${data["img-2"].src}"
            alt="Светлая комната с тахтой и журнальным столиком"
            class="our-project-image"
            width="692"
            height="451"
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
            src="${data["img-4"].src}"
            alt="Ванна из цельного камня"
            class="our-project-image"
            width="488"
            height="451"
          />
        </div>
      </div>
                    `;
      projctContainer.insertAdjacentHTML("beforeend", image);
    });
});
