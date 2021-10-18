import { createCalculatePage } from "./lib/calculatePage.js";
import { createElement } from "./lib/elements.js";
import { createPageTitle } from "./lib/titleComponent.js";
import { createPageImg } from "./lib/titleComponent.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const pageImg = createPageImg();
  const pageTitle = createPageTitle();

  appElement.append(pageImg, pageTitle);

  const enterCalculatePage = createCalculatePage(function (total) {
    const totalValue = createElement("h3", {
      className: "total",
      textContent: `Das Ergebnis ist ${total}.`,
    });
    appElement.append(totalValue);
    //alert(`Das Ergebnis ist ${total}.`);
  });

  appElement.append(enterCalculatePage);
}

createApp();
