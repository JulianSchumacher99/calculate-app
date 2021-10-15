import { createCalculatePage } from "./lib/calculatePage.js";
import { createPageTitle } from "./lib/titleComponent.js";
import { createPageImg } from "./lib/titleComponent.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const pageTitle = createPageTitle();
  const pageImg = createPageImg();

  appElement.append(pageImg);
  appElement.append(pageTitle);

  const enterCalculatePage = createCalculatePage(function (total) {
    alert(`Dein Ergebnis ist ${total}.`);
  });

  appElement.append(enterCalculatePage);
}

createApp();
