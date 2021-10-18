import { createElement } from "./elements.js";

export function createPageTitle() {
  const pageTitle = createElement("h1", {
    textContent: "Let's do some maths",
    className: "title",
  });

  return pageTitle;
}

export function createPageImg() {
  const pageImg = createElement("img", {
    src: "./assets/mathematics.png",
    className: "main-img",
  });

  return pageImg;
}
