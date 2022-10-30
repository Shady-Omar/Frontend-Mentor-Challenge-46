let right = document.querySelector("#right");
let left = document.querySelector("#left");

// Images
let imgOne = document.querySelector(".img-one");
let imgOneMob = document.querySelector(".img-one-mob");

let imgTwo = document.querySelector(".img-two");
let imgTwoMob = document.querySelector(".img-two-mob");

let imgThree = document.querySelector(".img-three");
let imgThreeMob = document.querySelector(".img-three-mob");

// Texts
let textOne = document.querySelector(".one");
let textTwo = document.querySelector(".two");
let textThree = document.querySelector(".three");

right.addEventListener("click", () => {
      if (imgOne.classList.contains("hide") == false  && imgTwo.classList.contains("hide") && imgThree.classList.contains("hide")) {
            imgOne.classList.add("hide");
            imgOneMob.classList.add("hide");
            textOne.classList.add("hide");

            imgTwo.classList.remove("hide");
            imgTwoMob.classList.remove("hide");
            textTwo.classList.remove("hide");

            imgThree.classList.add("hide");
            imgThreeMob.classList.add("hide");
            textThree.classList.add("hide");
      } else if (imgOne.classList.contains("hide")  && imgTwo.classList.contains("hide") == false && imgThree.classList.contains("hide")) {
            imgOne.classList.add("hide");
            imgOneMob.classList.add("hide");
            textOne.classList.add("hide");

            imgTwo.classList.add("hide");
            imgTwoMob.classList.add("hide");
            textTwo.classList.add("hide");

            imgThree.classList.remove("hide");
            imgThreeMob.classList.remove("hide");
            textThree.classList.remove("hide");
      } else if (imgOne.classList.contains("hide")  && imgTwo.classList.contains("hide") && imgThree.classList.contains("hide") == false) {
            imgOne.classList.remove("hide");
            imgOneMob.classList.remove("hide");
            textOne.classList.remove("hide");

            imgTwo.classList.add("hide");
            imgTwoMob.classList.add("hide");
            textTwo.classList.add("hide");

            imgThree.classList.add("hide");
            imgThreeMob.classList.add("hide");
            textThree.classList.add("hide");
      }
});


left.addEventListener("click", () => {
      if (imgOne.classList.contains("hide") == false  && imgTwo.classList.contains("hide") && imgThree.classList.contains("hide")) {
            imgOne.classList.add("hide");
            imgOneMob.classList.add("hide");
            textOne.classList.add("hide");

            imgTwo.classList.add("hide");
            imgTwoMob.classList.add("hide");
            textTwo.classList.add("hide");

            imgThree.classList.remove("hide");
            imgThreeMob.classList.remove("hide");
            textThree.classList.remove("hide");
      } else if (imgOne.classList.contains("hide")  && imgTwo.classList.contains("hide") && imgThree.classList.contains("hide") == false) {
            imgOne.classList.add("hide");
            imgOneMob.classList.add("hide");
            textOne.classList.add("hide");

            imgTwo.classList.remove("hide");
            imgTwoMob.classList.remove("hide");
            textTwo.classList.remove("hide");

            imgThree.classList.add("hide");
            imgThreeMob.classList.add("hide");
            textThree.classList.add("hide");
      } else if (imgOne.classList.contains("hide")  && imgTwo.classList.contains("hide") == false && imgThree.classList.contains("hide")) {
            imgOne.classList.remove("hide");
            imgOneMob.classList.remove("hide");
            textOne.classList.remove("hide");

            imgTwo.classList.add("hide");
            imgTwoMob.classList.add("hide");
            textTwo.classList.add("hide");

            imgThree.classList.add("hide");
            imgThreeMob.classList.add("hide");
            textThree.classList.add("hide");
      }
});


// Mobile Nav bar

let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
let nav = document.querySelector(".mob-nav");
let overlay = document.querySelector(".overlay");
let body = document.getElementsByTagName("BODY")[0];

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    nav.classList.remove('collapse');
    overlay.classList.remove('hide');
    body.style.position = "fixed";
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    nav.classList.add('collapse');
    overlay.classList.add('hide');
    body.style.position = "static";
});