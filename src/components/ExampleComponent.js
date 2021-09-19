export default (title = 'Webpack') => {
    const elem = document.createElement('h1')
    elem.innerHTML = `Welcome to ${title}!`
    return elem
}