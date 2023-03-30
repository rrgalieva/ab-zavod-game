const accessoriesUrls = [
  "img/accessories/Artboard 15-8 1.svg",
  "img/accessories/Artboard 17-8.svg",
  "img/accessories/Artboard 19-8.svg",
  "img/accessories/Artboard 20-8.svg",
  "img/accessories/Frame.svg",
  "img/accessories/Frame-1.svg",
  "img/accessories/Frame-2.svg",
  "img/accessories/Frame-4.svg"
]

export default class CustomHero {
  constructor (gameController, backgroundPicker, nextButton) {
    // this.gameController = gameController
    // this.startButton = startButton
    this.backgroundPicker = backgroundPicker
    this.nextButton = nextButton
    this.gameController = gameController
    // $('.hero-creater__top-slider').slick();
    // $('.hero-creater__mid-slider').slick();
    // $('.hero-creater__bot-slider').slick();
    this.createListeners()
  }

  createListeners () {
    this.nextButton.addEventListener('click', () => {
      console.log('click')
      this.backgroundPicker.render()
      this.gameController.goToSlide('ChoseBackground')
    })
  }

  generateField () {
    const field = document.getElementsByClassName('accessories__items')[0]
    for (let [index, url] of Object.entries(accessoriesUrls)) {
      const item = document.createElement('img')
      item.className = 'accessories__item'
      item.setAttribute('src', url)
      item.style.top = `${Math.floor(index/3) * 22}%`
      item.style.left = `${index % 3 * 25}%`
      field.appendChild(item)
    }
  }

  cleanField () {
    const toDelete = document.querySelectorAll('.accessories__items .accessories__item')
    toDelete.forEach(item => item.remove())
  }

  render () {
    console.log('render custom')
    let heroPlace = document.getElementById('hero-place_accessories')
    let gameC = this.gameController
    this.gameController.hero.drawHero(heroPlace)
    this.cleanField()
    this.generateField()
    $('.accessories__item').draggable({
      // containment: '.accessories__items',
      scroll: false
    });
    $('.hero-place_accessories').droppable({
      drop: function(e, ui) {
        console.log('drop')
        ui.draggable.draggable( "disable" )
        console.log(ui.position.left)
        const wightContainer = $('.accessories__items').width()
        const wightHero = $('.hero-place_accessories').width()
        const currX = (ui.position.left - wightContainer) / wightHero * 100
        const currY = ui.position.top / $('.hero-place_accessories').height() * 100
        console.log(currY + '%', currX + '%')
        gameC.hero.addAccessory(ui.draggable.prop( 'src' ), currX, currY)
      }
    });
  }
}