const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//RECUPERO GLI ELEMENTI DAL DOM
const slideshow_Image = document.getElementById("slideshow-img");
const slideshow_Title = document.getElementById("slideshow-title");
const slideshow_Text = document.getElementById("slideshow-text");
let prev_btn = document.querySelector(".prev");
let next_btn = document.querySelector(".next");

let currentImagesIndex = 0;
const totalImages = images.length;

const showImage = (index) => {
  const { image, title, text } = images[index];
  slideshow_Image.src = image;
  slideshow_Title.textContent = title;
  slideshow_Text.textContent = text;

  console.log({ image, title, text });
};

prev_btn.addEventListener("click", () => {
  currentImagesIndex = (currentImagesIndex - 1 + totalImages) % totalImages;
  showImage(currentImagesIndex);
});

next_btn.addEventListener("click", () => {
  currentImagesIndex = (currentImagesIndex + 1) % totalImages;
  showImage(currentImagesIndex);
});





