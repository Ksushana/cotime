$(function () {
  const mainForm = $(".main-form");
  if (!mainForm.length) {
    return;
  }

  const nameInput = mainForm.find(".main-form__name");

  const changeColorClass = (el, newColor) => {
    el.removeClass((_, className) => {
      return (className.match (/(^|\s)color-\S+/g) || []).join(' ');
    });
    el.addClass(`color-${newColor}`);
  }

  const colorButtons = mainForm.find(".main-form__color label");
  colorButtons.on("click", (evt) => {
    const target = evt.target;
    const button = $(target);
    const color = button.css("background-color");
    nameInput.css("background-color", color);
    const colorName = button.prop('for');
    // nameInput.css("color", "#ffffff");
    changeColorClass(nameInput, colorName);
    // console.log(nameInput.prop("class"))
  });

  const participantsInput = mainForm.find(".main-form__participants");
  const participantsTooltip = mainForm.find(".main-form__part-input .tooltip");
  const close = mainForm.find(".main-form__part-input .tooltip button");
  const handleParticipantsInputUpdate = (evt) => {
    let value;
    const target = evt.target;
    try {
      value = parseInt(target.value, 10);
    } catch (err) {}

    if (value && value > 1) {
      participantsTooltip.removeClass("tooltip--hidden");
    } else {
      participantsTooltip.addClass("tooltip--hidden");
    }

    close.on("click", function () {
      participantsTooltip.addClass("tooltip--hidden");
    });
  };
  participantsInput.on("change", handleParticipantsInputUpdate);
  participantsInput.on("input", handleParticipantsInputUpdate);

  const timeTemplate = mainForm.find("template.time")[0];
  const addTime = (dateContainer) => {
    const clon = timeTemplate.content.cloneNode(true);
    $(clon)
      .find(".close")
      .on("click", () => {
        $(clon).remove();
      });
    $(".timepicker").mask("99:99", { placeholder: " " });
    dateContainer.appendChild(clon);
  };
  $(document).on("click", "button.main-form__addtime", (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const button = $(target);
    const dateContainer = button.parent(".main-form__date")[0];
    addTime(dateContainer);
    $(".timepicker").mask("99:99", { placeholder: " " });
  });

  $(document).on("click", ".main-form__dates-block .close", (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const button = $(target);
    const timeContainer = button.parent(".main-form__input");
    timeContainer.remove();
  });

  const dateTemplate = mainForm.find("template.date")[0];
  const datesContainer = mainForm.find(".main-form__dates")[0];
  const addDate = () => {
    const clon = dateTemplate.content.cloneNode(true);
    datesContainer.appendChild(clon);
    $(".datepicker").datepicker({
      numberOfMonths: 50,
      language: "ru",
      shortYearCutoff: 50,
    });
  };
  mainForm.on("click", "button.main-form__adddate", (evt) => {
    evt.preventDefault();
    addDate();
    $(".timepicker").mask("99:99", { placeholder: " " });
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
