import './src/assets/03.css'
// import { heading as headingFontSize } from './src/assets/04a.module.css'
// import { heading as headingColor } from './src/assets/04b.module.css'
import styleA from './src/assets/04a.module.css'
import styleB from './src/assets/04b.module.css'
console.log(styleA);
console.log(styleB);

document.querySelector('.heading').className = `${styleA.heading} ${styleB.heading}`
document.getElementById('heading2').id = styleB.heading2
