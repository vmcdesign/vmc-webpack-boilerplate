import './assets/sass/fonts.scss'
import './main.scss'

import imgComponent from './components/ImgComponent'
import exampleComponent from './components/ExampleComponent'
import image from './assets/images/pink_icecream.jpg'

document.body.appendChild(
    exampleComponent('VMC Webpack Boilerplate')
)

document.body.appendChild(
    imgComponent(image, 'Pink Icecream', 'img-example')
)

console.log('App is running...')