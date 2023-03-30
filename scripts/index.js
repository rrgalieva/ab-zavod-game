import GameController from './GameController.js'
import Intro from './Intro.js'
import CreateHero from './CreateHero.js'
import CustomHero from './CustomHero.js'
import BackgroundPicker from './BackgroundPicker.js'
import Outro from './Outro.js'

window.onload = function(){
  const gameController = new GameController()
  gameController.goToSlide('Intro')

  // OUTRO

  const outroRestart = document.getElementById('outro__restart')
  const outro = new Outro (gameController, outroRestart)

  // BACKGROUND

  const backgroundNext = document.getElementById('background-picker__done')
  const backgroundPicker = new BackgroundPicker (gameController, backgroundNext)

  // CASTOM HERO

  const customHeroNext = document.getElementById('accessories__next')
  const customHero = new CustomHero (gameController, backgroundPicker, customHeroNext)

  // CREATE HERO

  const createHeroNext = document.getElementById('hero-creater__next')
  const createHeroRandom = document.getElementById('hero-creater__random')
  const createHero = new CreateHero (gameController, customHero, createHeroNext, createHeroRandom)

  // INTRO

  const startButton = document.getElementById('intro__start')
  const intro = new Intro (gameController, startButton)
};
