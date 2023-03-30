export default class Intro {
  constructor (gameController, startButton) {
    this.gameController = gameController
    this.startButton = startButton
    this.createListeners()
  }

  createListeners () {
    this.startButton.addEventListener('click', () => {
      console.log('click')
      this.gameController.goToSlide('CreateHero')
    })
  }
}