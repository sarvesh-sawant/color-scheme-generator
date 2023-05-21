const colorWheel = document.getElementById('color-wheel')
const dropDownMenu = document.getElementById('drop-down-menu')
const colorScheme = document.getElementById('get-color-scheme')

const baseUrl = 'https://www.thecolorapi.com'
const urlEndpoint = '/scheme'
const queryString = `?hex=${colorWheel.value.substring(1)}&format=json&mode=${dropDownMenu.value}&count=5`
const completeUrl = baseUrl+urlEndpoint+queryString

console.log(completeUrl)