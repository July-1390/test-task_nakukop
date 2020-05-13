$(document).ready(function () {
    // Rande slider hander
    const rangeSliderInput = document.getElementById("range-slider-input");
    const rangeSliderValueRepr = document.getElementById("range-slider-value-repr");

    rangeSliderValueRepr.innerHTML = rangeSliderInput.value; // bind slider value to display repr

    rangeSliderInput.oninput = function () {
        rangeSliderValueRepr.innerHTML = this.value;
    }

    // Init system-type select
    $('.system-type__select').niceSelect();
});
