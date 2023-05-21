const baseUrl = 'https://www.thecolorapi.com'
const urlEndpoint = '/scheme'
const colorDivs = document.getElementsByClassName('color-scheme')
const colorHex = document.getElementsByClassName('color-hex')

const createApiUrl = (colorWheel, dropDownMenu) => {
    let queryString = `?hex=${colorWheel.value.substring(1)}&format=json&mode=${dropDownMenu.value}&count=5`
    let completeUrl = baseUrl+urlEndpoint+queryString
    return completeUrl
}

const renderColorSchemes = (colorSchemes) => {
    for(let i = 0; i < colorDivs.length; i++) {
        colorDivs[i].style.backgroundColor = colorSchemes[i]
        colorHex[i].innerText = colorSchemes[i]
    }
}

export { createApiUrl, renderColorSchemes }