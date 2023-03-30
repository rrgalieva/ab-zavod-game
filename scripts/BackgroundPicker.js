export default class BackgroundPicker {
  constructor (gameController, nextButton) {
    // this.gameController = gameController
    // this.startButton = startButton
    this.nextButton = nextButton
    this.gameController = gameController
    this.createSliders()
    this.createListeners()
  }

  createListeners () {
    this.nextButton.addEventListener('click', () => {
      console.log('click')
      this.gameController.goToSlide('Outro')
    })
  }

  createSliders () {
    this.backgroundSlider = $('.background-picker__back-slider')
    this.backgroundSlider.slick();
  }

  render () {
    console.log('render background')
    let heroPlace = document.getElementById('hero-place_background')
    console.log(heroPlace)
    this.gameController.hero.drawHero(heroPlace)
    $('#hero-place_background .hero').draggable({
      // containment: '#hero-place_background',
      scroll: false
    });
  }
}