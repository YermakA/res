let arrayOfProducts = `[
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
]`
arrayOfProducts = JSON.parse(arrayOfProducts)

const tabs = document.querySelector('.tabs')
const tabItems = tabs.querySelectorAll('.tab-item')
let loadIconSvgImg = `  <svg
                        class="load-icon-svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="0.5"
                            y="0.5"
                            width="59"
                            height="59"
                            rx="29.5"
                            stroke="#665F55"
                        />
                        <path
                            d="M39.8883 31.5C39.1645 36.3113 35.013 40 30 40C24.4772 40 20 35.5228 20 30C20 24.4772 24.4772 20 30 20C34.1006 20 37.6248 22.4682 39.1679 26"
                            stroke="#403F3D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M35 26H39.4C39.7314 26 40 25.7314 40 25.4V21"
                            stroke="#403F3D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>`

for (const tabItem of tabItems) {
  tabItem.addEventListener('click', (e) => {
    changeTabItem(e)
    changePreviewCards(e)
  })
}



function changeTabItem(e) {
  if (!e.target.classList.contains('tab-item_active')
    && !e.target.classList.contains('tab-item__img')
    && !e.target.classList.contains('tab-item__text')) {
    for (const tabItem of tabItems) {
      if (tabItem.classList.contains('tab-item_active')) {
        tabItem.classList.remove('tab-item_active')
      }
    }
    e.target.classList.add('tab-item_active')
  }
  else if (!e.target.classList.contains('tab-item_active')
    && e.target.classList.contains('tab-item__img')
    || e.target.classList.contains('tab-item__text')) {
    for (const tabItem of tabItems) {
      if (tabItem.classList.contains('tab-item_active')) {
        tabItem.classList.remove('tab-item_active')
      }
    }
    e.target.parentNode.classList.add('tab-item_active')
  }
}


function changePreviewCards() {
  coffeeGrid.innerHTML = ''
  let tabItemActiveIndex
  for (let i = 0; i < tabItems.length; i++) {
    if (tabItems[i].classList.contains('tab-item_active')) {
      tabItemActiveIndex = i
    }
  }
  if (window.screen.width > 768) {
    addPreviewSlidesMore(tabItemActiveIndex)
  }
  else {
    //width < 768
    addPreviewSlidesLess(tabItemActiveIndex)
  }
}

const coffeeGrid = document.querySelector('.coffee-grid')
coffeeGrid.addEventListener('click', (e) => {
  const loadIconSvg = document.querySelector('.load-icon-svg')
  if (e.target === loadIconSvg) {
    const categroies = ['coffee', 'tea', 'dessert']
    const coffeeGrid = document.querySelector('.coffee-grid')
    coffeeGrid.innerHTML = ''
    let tabItemActiveIndex
    for (let i = 0; i < tabItems.length; i++) {
      if (tabItems[i].classList.contains('tab-item_active')) {
        tabItemActiveIndex = i
      }
    }
    for (let i = 0; i < arrayOfProducts.length; i++) {
      if (arrayOfProducts[i].category === categroies[tabItemActiveIndex]) {
        const previewTemplate = `    
                      <div class="preview">
                        <div class="preview__border">
                            <img class="preview__img" src="${`./img/${arrayOfProducts[i].category}/${arrayOfProducts[i].category}-${i + 1}.jpg`}" alt="">
                        </div>
                        <div class="desctription">
                            <div class="menu-description">
                                <h2 class="preview__title">${arrayOfProducts[i].name}</h2>
                                <p class="preview__text">
                                ${arrayOfProducts[i].description}
                                </p>
                            </div>
                            <span class="preview__price">$${arrayOfProducts[i].price}</span>
                        </div>
                    </div>`
        coffeeGrid.insertAdjacentHTML('beforeend', previewTemplate)
      }
    }
  }
})


// можно сделать 8 товаров при изменении экрана, а не постоянную подгрузку 4 товаров
window.addEventListener('resize', debounceWindowWidth(windowWidthLess, 500))

function windowWidthLess() {
  changePreviewCards()
}

function debounceWindowWidth(windowWidth, time) {
  let timeout
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(windowWidth, time)
  }

}


function addPreviewSlidesMore(tabItemActiveIndex) {
  const categroies = ['coffee', 'tea', 'dessert']
  let previewTemplate
  for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].category === categroies[tabItemActiveIndex]) {
      previewTemplate = `    
                      <div class="preview">
                        <div class="preview__border">
                            <img class="preview__img" src="${`./img/${arrayOfProducts[i].category}/${arrayOfProducts[i].category}-${i + 1}.jpg`}" alt="">
                        </div>
                        <div class="desctription">
                            <div class="menu-description">
                                <h2 class="preview__title">${arrayOfProducts[i].name}</h2>
                                <p class="preview__text">
                                ${arrayOfProducts[i].description}
                                </p>
                            </div>
                            <span class="preview__price">$${arrayOfProducts[i].price}</span>
                        </div>
                    </div>`
      coffeeGrid.insertAdjacentHTML('beforeend', previewTemplate)
    }
  }
}

function addPreviewSlidesLess(tabItemActiveIndex) {
  const categroies = ['coffee', 'tea', 'dessert']
  let previewTemplate
  let productsCounter = 0
  for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].category === categroies[tabItemActiveIndex]) {
      productsCounter += 1
      previewTemplate = `    
                      <div class="preview ${productsCounter <= 4 ? "" : "preview_hide"}">
                        <div class="preview__border">
                            <img class="preview__img" src="${`./img/${arrayOfProducts[i].category}/${arrayOfProducts[i].category}-${i + 1}.jpg`}" alt="">
                        </div>
                        <div class="desctription">
                            <div class="menu-description">
                                <h2 class="preview__title">${arrayOfProducts[i].name}</h2>
                                <p class="preview__text">
                                ${arrayOfProducts[i].description}
                                </p>
                            </div>
                            <span class="preview__price">$${arrayOfProducts[i].price}</span>
                        </div>
                    </div>`

      coffeeGrid.insertAdjacentHTML('beforeend', previewTemplate)
    }
  }
  if (productsCounter > 4) {
    coffeeGrid.insertAdjacentHTML('beforeend', loadIconSvgImg)
  }
}