const baseUrl = 'https://www.thecolorapi.com'
const urlEndpoint = '/scheme'

const createApiUrl = (colorWheel, dropDownMenu) => {
    let queryString = `?hex=${colorWheel.value.substring(1)}&format=json&mode=${dropDownMenu.value}&count=5`
    let completeUrl = baseUrl+urlEndpoint+queryString
    return completeUrl
}

export { createApiUrl }