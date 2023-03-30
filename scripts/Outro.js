export default class Outro {
  constructor (gameController, restartButton) {
    // this.gameController = gameController
    // this.startButton = startButton
    this.restartButton = restartButton
    this.gameController = gameController
    this.createListeners()
  }

  createListeners () {
    this.restartButton.addEventListener('click', () => {
      console.log('restart')
      this.gameController.restart()
    })
  }
}