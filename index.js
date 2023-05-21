import { createApiUrl } from './utils.js'

const colorWheel = document.getElementById('color-wheel')
const dropDownMenu = document.getElementById('drop-down-menu')
const colorScheme = document.getElementById('get-color-scheme')

let colorSchemes = new Array(5).fill(0)

colorScheme.addEventListener('click', () => {

    let completeUrl = createApiUrl(colorWheel, dropDownMenu)

    fetch(completeUrl)
    .then(res => res.json())
    .then(data => {
        const colors = data.colors
        colorSchemes = colors.map(color => color.hex.value)
        console.log(colorSchemes)
    })
})




