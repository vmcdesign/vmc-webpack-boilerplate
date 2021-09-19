export default (src = '', alt = '', classes = '') => {
    const image = document.createElement('img')
    image.setAttribute('src', src)
    image.setAttribute('alt', alt)
    image.setAttribute('class', classes)
    return image
}