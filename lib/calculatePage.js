import { createElement } from "./elements.js";

export function createCalculatePage(onSubmit) {
  const number1Input = createElement("input", {
    type: "number",
    className: "number1",
  });

  const plusIcon = createElement("img", {
    src: "assets/multiply-mathematical-sign.png",
    className: "plus-icon",
  });
  const number2Input = createElement("input", {
    type: "number",
    className: "number2",
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
        onSubmit(number1Input.value * number2Input.value);
      },
    },
    [number1Input, plusIcon, number2Input, submitButton]
  );

  return formElement;
}
