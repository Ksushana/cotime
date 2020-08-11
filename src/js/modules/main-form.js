$(function () {
  const mainForm = $(".main-form");
  if (!mainForm.length) {
    return;
  }

  const nameInput = mainForm.find(".main-form__name");
  const buttons = mainForm.find(".main-form__color label");

  buttons.on("click", (evt) => {
    const target = evt.target;
    const button = $(target);
    const color = button.css("background-color");
    nameInput.css("background-color", color);
  });
});
