$(".subscribe-popup").dialog({
  autoOpen: true,
  closeText: "Готово",
  width: 800,
  modal: true,
  open: function (event, ui) {
    jQuery(".ui-widget-overlay").on("click", function () {
      jQuery(".subscribe-popup").dialog("close");
    });
  },
});
