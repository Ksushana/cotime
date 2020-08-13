$(function () {
  $.datepicker.regional["ru"] = {
    closeText: "Закрыть",
    prevText: "&#x3c;Пред",
    nextText: "След&#x3e;",
    currentText: "Сегодня",
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthNamesShort: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    dayNames: [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
  };
  $.datepicker.setDefaults($.datepicker.regional["ru"]);

  $(".datepicker").datepicker({
    numberOfMonths: 50,
    language: "ru",
    shortYearCutoff: 50,
  });

  const addDays = () => {
    $(".ui-datepicker").append(
      $(
        "<ul><li>пн</li><li>вт</li><li>ср</li><li>чт</li><li>пт</li><li>сб</li><li>вс</li></ul>"
      )
    );
  };

  addDays();
});
