import Hero from './Hero.js'

const slides = {
  'Intro': 0,
  'CreateHero': 1,
  'CustomHero': 2,
  'ChoseBackground': 3,
  'Outro': 4
}

export default class GameController {
  constructor () {
    this.currentSlide = 0
    this.hero = new Hero()
    this.slider = document.getElementsByClassName('slider')[0]
  }

  goToSlide (str) {
    this.currentSlide = slides[str]
    this.slider.style.top = `-${100 * this.currentSlide}vh`
  }

  restart () {
    this.hero = new Hero()
    this.goToSlide ('Intro')
  }
}