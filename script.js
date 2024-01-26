const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapEverything = document.querySelector('.map-everything')
const buttonSomAll = document.querySelector('.som-all')
const buttonFilterVegan = document.querySelector('.filter-vegan')

function formatCurrency(value) {
    return newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
}


function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="price">${formatCurrency(product.price)}</p>
        </li>`
    })

    list.innerHTML = myLi
}

function mapEverything() {
    const oldBurgerValue = menuOptions.map((price) => ({
        ...price,
        price: price.price * 0.9,
    }))

    showAll(oldBurgerValue)
}

function somAll() {
    const finalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
        <li>
            <p> O valor total é de R$ ${formatCurrency(finalValue)}</p>
        </li>
        `
}

function filterVegan() {
    const newFilter = menuOptions.filter((vegan) => vegan.vegan)

    showAll(newFilter)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapEverything.addEventListener('click', mapEverything)
buttonSomAll.addEventListener('click', somAll)
buttonFilterVegan.addEventListener('click', filterVegan)