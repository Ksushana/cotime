$(function () {
  const mainForm = $(".main-form");
  if (!mainForm.length) {
    return;
  }

  const nameInput = mainForm.find(".main-form__name");

  const colorButtons = mainForm.find(".main-form__color label");
  colorButtons.on("click", (evt) => {
    const target = evt.target;
    const button = $(target);
    const color = button.css("background-color");
    nameInput.css("background-color", color);
  });

  const participantsInput = mainForm.find(".main-form__participants");
  const participantsTooltip = mainForm.find(".main-form__part-input .tooltip");
  const handleParticipantsInputUpdate = (evt) => {
    let value;
    const target = evt.target;
    try {
      value = parseInt(target.value, 10);
    } catch (err) {}

    if (value && value > 2) {
      participantsTooltip.removeClass("tooltip--hidden");
    } else {
      participantsTooltip.addClass("tooltip--hidden");
    }
  };
  participantsInput.on("change", handleParticipantsInputUpdate);
  participantsInput.on("input", handleParticipantsInputUpdate);

  const timeTemplate = mainForm.find("template.time")[0];
  const addTime = (dateContainer) => {
    const clon = timeTemplate.content.cloneNode(true);
    dateContainer.appendChild(clon);
  };
  $(document).on("click", "button.main-form__addtime", (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const button = $(target);
    const dateContainer = button.parent(".main-form__date")[0];
    addTime(dateContainer);
  });

  const dateTemplate = mainForm.find("template.date")[0];
  const datesContainer = mainForm.find(".main-form__dates")[0];
  const addDate = () => {
    const clon = dateTemplate.content.cloneNode(true);
    datesContainer.appendChild(clon);
  };
  mainForm.on("click", "button.main-form__adddate", (evt) => {
    evt.preventDefault();
    addDate();
  });

  const allInputs = mainForm.find("input,textarea,select");
  // const descriptionInput = mainForm.find(".main-form__discription");
  // const priceInput = mainForm.find(".main-form__price");
  const submitButton = mainForm.find("[type='submit']");

  const validate = () => {
    if (!nameInput[0].value) {
      return false;
    }
    // if (!descriptionInput[0].value) {
    //   return false;
    // }
    // if (!priceInput[0].value) {
    //   return false;
    // }
    // if (!participantsInput[0].value) {
    //   return false;
    // }
    return true;
  };

  const enableForm = () => {
    submitButton.prop("disabled", false);
  };

  const disableForm = () => {
    submitButton.prop("disabled", true);
  };

  const handleFormChange = () => {
    if (validate()) {
      enableForm();
    } else {
      disableForm();
    }
  };

  allInputs.on("change", handleFormChange);
  allInputs.on("input", handleFormChange);
});
