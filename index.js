const colorWheel = document.getElementById('color-wheel')
const dropDownMenu = document.getElementById('drop-down-menu')
const colorScheme = document.getElementById('get-color-scheme')

const baseUrl = 'https://www.thecolorapi.com'
const urlEndpoint = '/scheme'
const queryString = `?hex=${colorWheel.value.substring(1)}&format=json&mode=${dropDownMenu.value}&count=5`
const completeUrl = baseUrl+urlEndpoint+queryString

let colorSchemes = new Array(5).fill(0)

fetch(completeUrl)
.then(res => res.json())
.then(data => {
    const colors = data.colors
    colorSchemes = colors.map(color => color.hex.value)
})

