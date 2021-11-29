// prices rangeSLider
var priceSlider = document.getElementById("price-range-slider");
if (priceSlider) {
  noUiSlider.create(priceSlider, {
    start: [0, 5000],
    //   step шаг на  единицф
    step: 1,
    connect: true,
    range: {
      min: 0,
      // min относительно самой дешёвой
      max: 60000,
      // max берётся относительно самого дорогой крипты
    },
  });

  // вывод в инпутов инфу в цифрах

  // сами инпуты
  const priceMin = document.getElementById("price-min");
  const priceMax = document.getElementById("price-max");
  const prices = [priceMin, priceMax];

  // выводит в инпуты инфу
  priceSlider.noUiSlider.on("update", function (values, handle) {
    //   если мы двигаем мин полоску меняй в мин/если во макс меняй в макс
    prices[handle].value = Math.round(values[handle]);
  });

  const setPrices = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    priceSlider.noUiSlider.set(arr);
  };
  //   если в prices инфа другая то они меняют rangeslider
  prices.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      console.log(index);
      setPrices(index, e.currentTarget.value);
    });
  });
}
// profitability rangeSlider
var profitablySlider = document.getElementById("profitably-range-slider");
if (profitablySlider) {
  noUiSlider.create(profitablySlider, {
    start: [-200, 150],
    //   step шаг на 2 единицф
    step: 1,
    connect: true,
    range: {
      min: -200,
      // min относительное падение крипты за последний месяц или чето подобное
      max: 300,
      // max относительный подъём крипты за последний месяц или чето такое
    },
  });

  // вывод в инпутов инфу в цифрах

  // сами инпуты
  const profitablyMin = document.getElementById("profitably-min");
  const profitablyMax = document.getElementById("profitably-max");
  const profitablys = [profitablyMin, profitablyMax];

  // выводит в инпуты инфу
  profitablySlider.noUiSlider.on("update", function (values, handle) {
    //   если мы двигаем мин полоску меняй в мин/если во макс меняй в макс
    profitablys[handle].value = Math.round(values[handle]);
  });

  const setprofitablys = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    profitablySlider.noUiSlider.set(arr);
  };
  //   если в profitablys инфа другая то они меняют rangeslider
  profitablys.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      console.log(index);
      setprofitablys(index, e.currentTarget.value);
    });
  });
}
// fixed aside filter of scroll
let asideFixed = document.querySelector(".coins__aside "),
  asideFixedH = document.querySelector(".coins__aside ").clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;
  console.log(scroll);

  if (scroll > asideFixedH) {
    asideFixed.classList.add("coins__aside--fixed");
  }
};
