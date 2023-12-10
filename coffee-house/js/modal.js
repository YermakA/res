
let arrayOfP = JSON.parse(`[
  {
    "name": "Irish coffee",
    "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Kahlua coffee",
    "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey raf",
    "description": "Espresso with frothed milk, cream and aromatic honey",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ice cappuccino",
    "description": "Cappuccino with soft thick foam in summer version with ice",
    "price": "5.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Espresso",
    "description": "Classic black coffee",
    "price": "4.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte",
    "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte macchiato",
    "description": "Espresso with frothed milk and chocolate",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Coffee with cognac",
    "description": "Fragrant black coffee with cognac and whipped cream",
    "price": "6.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Moroccan",
    "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    "price": "4.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ginger",
    "description": "Original black tea with fresh ginger, lemon and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cranberry",
    "description": "Invigorating black tea with cranberry and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Sea buckthorn",
    "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    "price": "5.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Marble cheesecake",
    "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    "price": "3.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Red velvet",
    "description": "Layer cake with cream cheese frosting",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cheesecakes",
    "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Creme brulee",
    "description": "Delicate creamy dessert in a caramel basket with wild berries",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Pancakes",
    "description": "Tender pancakes with strawberry jam and fresh strawberries",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey cake",
    "description": "Classic honey cake with delicate custard",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Chocolate cake",
    "description": "Cake with hot chocolate filling and nuts with dried apricots",
    "price": "5.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Black forest",
    "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    "price": "6.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  }
]`)
let nameOfCard
let priceAmount = 0
let modalSizeValue = 0
const body = document.querySelector('body')
const coffeeGrid1 = document.querySelector('.coffee-grid')
//add modal
coffeeGrid1.addEventListener('click', (e) => {
  const previewText = e.target.closest('.preview').querySelector('.preview__title').textContent
  const imgSrc = e.target.closest('.preview').querySelector('.preview__img').getAttribute('src')
  let modal
  for (let i = 0; i < arrayOfP.length; i++) {
    if (arrayOfP[i].name === previewText) {
      nameOfCard = arrayOfP[i].name
      for (const name of arrayOfP) {
        if (name.name === nameOfCard) {
          priceAmount = name.price
        }
      }
      modal = `   
<div class="modal__back"></div>
        <div class="modal">
            <div class="modal__preview">
                <div class="preview__border">
                    <img class="preview__img" src="${imgSrc}" alt="">
                </div>
                <div class="modal__description">
                    <div class="modal__menu-description">
                        <h2 class="preview__title">${arrayOfP[i].name}</h2>
                        <p class="preview__text">
                            ${arrayOfP[i].description}
                        </p>
                    </div>
                    <div class="modal__size">
                        <h4 class="modal__title">Size</h4>
                        <div class="modal__section">
                            <div class="tab-item tab-item_active">
                                <span class="tab-item__char tab-item__img">S</span>
                                <h4 class="tab-item__text">${arrayOfP[i].sizes.s.size}</h4>
                            </div>
                            <div class="tab-item">
                                <span class="tab-item__char tab-item__img">M</span>
                                <h4 class="tab-item__text">${arrayOfP[i].sizes.m.size}</h4>
                            </div>
                            <div class="tab-item">
                                <span class="tab-item__char tab-item__img">L</span>
                                <h4 class="tab-item__text">${arrayOfP[i].sizes.l.size}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="modal__additives">
                        <h4 class="modal__title">Additives</h4>
                        <div class="modal__section">
                            <div class="tab-item">
                                <span class="tab-item__char tab-item__img">1</span>
                                <h4 class="tab-item__text">${arrayOfP[i].additives[0].name}</h4>
                            </div>
                            <div class="tab-item">
                                <span class="tab-item__char tab-item__img">2</span>
                                <h4 class="tab-item__text">${arrayOfP[i].additives[1].name}</h4>
                            </div>
                            <div class="tab-item">
                                <span class="tab-item__char tab-item__img">3</span>
                                <h4 class="tab-item__text">${arrayOfP[i].additives[2].name}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="modal__total">
                        <span class="modal__price">Total:</span>
                        <span class="modal__price modal__price_right">$${arrayOfP[i].price}</span>
                    </div>
                    <div class="modal__alert">
                        <img class="alert__svg" src="./icons/info-empty.svg" alt="">
                        <p class="alert__text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                    </div>
                    <button class="modal__button">Close</button>
                </div>
            </div>
        </div>
        `
    }
  }
  body.insertAdjacentHTML('afterbegin', modal)
  body.style.overflow = 'hidden'
  document.querySelector('.modal__back')
})
//Закрытие modal
body.addEventListener('click', (e) => {

  if (e.target === document.querySelector('.modal__back')) {
    document.querySelector('.modal__back').remove()
    document.querySelector('.modal').remove()
    body.style.overflow = 'visible'
    priceAmount = 0
    modalSizeValue = 0
  }
  if (e.target === document.querySelector('.modal__button')) {
    document.querySelector('.modal__back').remove()
    document.querySelector('.modal').remove()
    body.style.overflow = 'visible'
    priceAmount = 0
    modalSizeValue = 0
  }
})
// modal price
body.addEventListener('click', (e) => {

  let modalAdditivesArr = []
  if (e.target.closest('.modal__size') === document.querySelector('.modal__size')) {
    modalSizeValue = modalSize(e)
  }
  if (e.target.closest('.modal__additives') === document.querySelector('.modal__additives')) {
    modalAdditivesArr = modalAdditives(e)
  }
  let total = Number(priceAmount) +
    Number(modalSizeValue) +
    Number(modalAdditivesArr.reduce((a, b) => a + b, 0))


  console.log(total)
  document.querySelector('.modal__price_right')
    .textContent =
    "$" + total.toFixed(2)
})
//modal sizes
function modalSize(e) {
  const tabs = document.querySelector('.modal__size').querySelectorAll('.tab-item')
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("tab-item_active")
  }
  const tab = e.target.closest('.tab-item')
  tab.classList.add('tab-item_active')
  const tabSize = tab.querySelector('.tab-item__char').textContent

  for (let i = 0; i < arrayOfP.length; i++) {
    if (arrayOfP[i].name === nameOfCard) {
      if ("S" === tabSize) {
        modalSizeValue = Number.parseFloat(arrayOfP[i].sizes.s["add-price"])
        return Number.parseFloat(arrayOfP[i].sizes.s["add-price"])
      }
      if ("M" === tabSize) {
        modalSizeValue = Number.parseFloat(arrayOfP[i].sizes.m["add-price"])
        return Number.parseFloat(arrayOfP[i].sizes.m["add-price"])
      }
      if ("L" === tabSize) {
        modalSizeValue = Number.parseFloat(arrayOfP[i].sizes.l["add-price"])
        return Number.parseFloat(arrayOfP[i].sizes.l["add-price"])
      }
    }
  }
}
// modal additives
function modalAdditives(e) {
  const tabsActive = []
  const tabs = document.querySelector('.modal__additives').querySelectorAll('.tab-item')
  const tab = e.target.closest('.tab-item')
  tab.classList.toggle('tab-item_active')
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].classList.contains("tab-item_active")) {
      tabsActive.push(tabs[i].querySelector('.tab-item__text').textContent)
    }
  }
  for (let j = 0; j < tabsActive.length; j++) {
    for (let i = 0; i < arrayOfP.length; i++) {
      if (arrayOfP[i].name === nameOfCard) {
        if (arrayOfP[i].additives[0].name === tabsActive[j]) {
          tabsActive[j] = Number.parseFloat(arrayOfP[i].additives[0]["add-price"])
        }
        if (arrayOfP[i].additives[1].name === tabsActive[j]) {
          tabsActive[j] = Number.parseFloat(arrayOfP[i].additives[1]["add-price"])
        }
        if (arrayOfP[i].additives[2].name === tabsActive[j]) {
          tabsActive[j] = Number.parseFloat(arrayOfP[i].additives[2]["add-price"])
        }
      }
    }
  }
  return tabsActive
}