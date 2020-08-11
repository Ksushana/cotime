$(function () {
  $("#phone").mask("+7 (999) 999-9999", { placeholder: "+7" });
  $("#code").mask("9", { placeholder: " " });
});

$(function () {
  if ($(".subscribe-popup__send-link input").value) {
    $(".subscribe-popup__send-link button").removeClass("disabled");
  }
});
