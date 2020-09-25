(() => {
  let inputs = document.querySelectorAll(`input, select`);

  for (let input of inputs) {
    if (input.value.length) {
      input.classList.add(`filled`);
    }
  }

  const toggleInput = (evt) => {
    let input = evt.target;

    if (input.classList && input.classList.contains(`form__input`)) {
      if (input.value.length) {
        input.classList.add(`filled`);
      } else {
        input.classList.remove(`filled`);
      }
    }

  };

  document.addEventListener(`blur`, toggleInput, true);
  document.addEventListener(`input`, toggleInput, true);
})();
