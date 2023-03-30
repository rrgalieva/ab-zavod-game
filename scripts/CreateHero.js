export default class CreateHero {
  constructor (gameController, customHero, nextButton, refreshButton) {
    // this.gameController = gameController
    // this.startButton = startButton
    this.customHero = customHero
    this.nextButton = nextButton
    this.gameController = gameController
    this.refreshButton = refreshButton
    this.createSliders()
    this.createListeners()
  }

  createListeners () {
    this.nextButton.addEventListener('click', () => {
      console.log('click')

      const topFrame = this.topSlider.slick('slickCurrentSlide')
      const midFrame = this.midSlider.slick('slickCurrentSlide')
      const botFrame = this.botSlider.slick('slickCurrentSlide')
      this.gameController.hero.setImages(topFrame, midFrame, botFrame)
      this.customHero.render()

      this.gameController.goToSlide('CustomHero')
    })
    this.refreshButton.addEventListener('click', () => {
      let randomTop = Math.floor(Math.random() * 6)
      let randomMid = Math.floor(Math.random() * 5)
      let randomBot = Math.floor(Math.random() * 6)
      this.topSlider.slick('slickGoTo', randomTop)
      this.midSlider.slick('slickGoTo', randomMid)
      this.botSlider.slick('slickGoTo', randomBot)
    })
  }

  createSliders () {
    this.topSlider = $('.hero-creater__top-slider')
    this.midSlider = $('.hero-creater__mid-slider')
    this.botSlider = $('.hero-creater__bot-slider')
    this.topSlider.slick();
    this.midSlider.slick();
    this.botSlider.slick();
  }
}