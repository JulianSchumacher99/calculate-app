import { createElement } from "./elements.js";

export function createCalculatePage(onSubmit) {
  const firstNumberInput = createElement("input", {
    type: "number",
    className: "number",
  });

  const multiplyIcon = createElement("img", {
    src: "assets/multiply-mathematical-sign.png",
    className: "multiply-icon",
  });
  const secondNumberInput = createElement("input", {
    type: "number",
    className: "number",
  });

  const submitButton = createElement(
    "button",
    {
      type: "submit",
      className: "submitButton",
    },
    ["Berechnen"]
  );

  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(firstNumberInput.value * secondNumberInput.value);
      },
    },
    [firstNumberInput, multiplyIcon, secondNumberInput, submitButton]
  );

  return formElement;
}
