$(function () {
  $("#code").mask("9", { placeholder: " " });
});

$(function () {
  const form = $(".phone-form");
  if (!form) {
    return;
  }

  const phoneInput = form.find("#phone");
  const button = form.find("button.blue-btn");

  const validate = () => {
    var inputVal = phoneInput.val();
    if (inputVal && inputVal.length === 18 ) {
      return true;
    }
    return false;
  };

  const enableForm = () => {
    button.prop("disabled", false);
  };

  const disableForm = () => {
    button.prop("disabled", true);
  };

  phoneInput.on("input", () => {
    if (validate()) {
      enableForm();
    } else {
      disableForm();
    }
  });
});

$(function () {
  const form = $(".subscribe-form");
  if (!form.length) {
    return;
  }

  const emailInput = form.find(".subscribe-popup__send-link input");
  const button = form.find(".subscribe-popup__send-link button");
  const emailTemplate = form.find("template")[0];
  const emailsContainer = form.find(".subscribe-form__emails")[0];

  const validate = () => {
    if (!emailInput[0].value) {
      return false;
    }
    return true;
  };

  const enableForm = () => {
    button.prop("disabled", false);
  };

  const disableForm = () => {
    button.prop("disabled", true);
  };

  emailInput.on("input", () => {
    if (validate()) {
      enableForm();
    } else {
      disableForm();
    }
  });

  const addEmail = (email) => {
    const clon = emailTemplate.content.cloneNode(true);
    $(clon).find("p").html(email);
    emailsContainer.appendChild(clon);
  };

  button.on("click", (evt) => {
    evt.preventDefault();
    const value = emailInput.val();
    addEmail(value);
  });
});
