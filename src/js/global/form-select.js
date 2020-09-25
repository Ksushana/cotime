
(() => {
  let selects = document.querySelectorAll(`select.custom-select`);

  for (let select of selects) {
    (() => new window.CustomSelect({
      elem: select.id
    }))();
  }

})();

