const heroPartsUrls = {
  top: [
    "img/top/Artboard 10-8.svg",
    "img/top/Artboard 11-8.svg",
    "img/top/Artboard 12-8.svg",
    "img/top/Artboard 13-8.svg",
    "img/top/Artboard 14-8.svg",
    "img/top/Artboard 2-8.svg"
  ],
  mid: [
    "img/mid/Artboard 27-8.svg",
    "img/mid/Artboard 28-8.svg",
    "img/mid/Artboard 30-8.svg",
    "img/mid/Artboard 31-8.svg",
    "img/mid/Artboard 32-8.svg"
  ],
  bot: [
    "img/bot/Artboard 21-8.svg",
    "img/bot/Artboard 22-8.svg",
    "img/bot/Artboard 23-8.svg",
    "img/bot/Artboard 24-8.svg",
    "img/bot/Artboard 25-8.svg",
    "img/bot/Artboard 26-8.svg"
  ]
}

export default class Hero {
  constructor () {
    this.topUrl = heroPartsUrls.top[0]
    this.midUrl = heroPartsUrls.mid[0]
    this.botUrl = heroPartsUrls.bot[0]
    this.accessories = [
      // {
      //   url: 'img/accessories/Artboard 17-8.svg',
      //   x: 10,
      //   y: 10
      // }
    ]
  }

  createHeroTemplate () {
    const hero = document.createElement('div')
    hero.className = 'hero'

    const top = document.createElement('img')
    top.className = 'hero__top'
    top.setAttribute('src', this.topUrl)
    const mid = document.createElement('img')
    mid.className = 'hero__mid'
    mid.setAttribute('src', this.midUrl)
    const bot = document.createElement('img')
    bot.className = 'hero__bot'
    bot.setAttribute('src', this.botUrl)

    hero.appendChild(top)
    hero.appendChild(mid)
    hero.appendChild(bot)

    for (let accessory of this.accessories) {
      const acces = document.createElement('img')
      acces.className = 'hero__accessory'
      acces.setAttribute('src', accessory.url)
      acces.style.top = `${accessory.y}%`
      acces.style.left = `${accessory.x}%`
      hero.appendChild(acces)
    }

    return hero
    // <div class="hero">
    //   <img class="hero__top" src="img/top/Artboard 10-8.svg">
    //   <img class="hero__mid" src="img/mid/Artboard 27-8.svg">
    //   <img class="hero__bot" src="img/bot/Artboard 21-8.svg">
    //   <img class="hero__accessory" src="img/accessories/Artboard 17-8.svg">
    // </div>
  }

  drawHero (place) {
    place.innerHTML = ''
    this.template = this.createHeroTemplate()
    place.appendChild(this.template)
  }

  addAccessory (url, x, y) {
    this.accessories.push({
      url,
      x,
      y
    })
    console.log(this.accessories)
  }

  setImages (topIndex, midIndex, botIndex) {
    this.topUrl = heroPartsUrls.top[topIndex]
    this.midUrl = heroPartsUrls.mid[midIndex]
    this.botUrl = heroPartsUrls.bot[botIndex]
  }
}