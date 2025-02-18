import noUiSlider from '../vendor/noUiSlider/nouislider.mjs'

const range = document.querySelector('.filter-form__price-range')

noUiSlider.create(range, {
  start:[0, 900],
  step: 1,
  connect: true,
  range: {
      'min': 0,
      'max': 1000
  },
  cssPrefix: 'noui-'
});
