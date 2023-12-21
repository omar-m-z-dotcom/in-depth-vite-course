import imageUrl from './src/assets/img/javascript.svg'
import jsonUrl from './src/assets/07.json?url' // 07.json will be loaded as a JSON file url
import rawSVG from './src/assets/img/javascript.svg?raw'// javascript.svg will be loaded as a raw string containing the raw content of the file

console.log(rawSVG)

console.log(jsonUrl);

console.log(imageUrl)

document.getElementById('image').src = imageUrl
