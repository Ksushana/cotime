$(function () {
  var casesLabels = document.querySelector(".cases__labels");

  if(!casesLabels) {
    return;
  }
  var labelsNodes = Array.prototype.slice.call(casesLabels.children);
  var smallSlides = document.querySelectorAll(".cases__block");
  var smallSliderButtons = document.querySelectorAll(".cases__control");



  var changeSmallSlide = function (number) {
    for (var i = 0; i < smallSlides.length; i++) {
      var slide = smallSlides[i];
      slide.classList.add("visually-hidden");
      var button = smallSliderButtons[i];
      button.classList.remove("cases__control--active");
    }

    var selectedSlide = smallSlides[number];
    selectedSlide.classList.remove("visually-hidden");
  };

  var onSlideCLick = function (evt) {
    var clickedButton = evt.target;
    var index = labelsNodes.indexOf(clickedButton);
    changeSmallSlide(index);
    clickedButton.classList.add("cases__control--active");
  }

  for (var i = 0; i < smallSliderButtons.length; i++) {
    var smallSliderButton = smallSliderButtons[i];
    smallSliderButton.addEventListener("click", onSlideCLick);
  }
});