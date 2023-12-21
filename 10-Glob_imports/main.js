const modules = import.meta.glob('./src/10/*.js',
    { eager: true } // eager if set to true, all modules will be loaded completely (with all it's exported vars) at startup
)

console.log(modules)
// Object.values(modules).forEach((module) => {
//     module().then((data) => {
//         console.log(data)
//     })
// })

// document.addEventListener('click', () => {
//     Object.values(modules).forEach((module) => {
//         module().then((data) => {
//             console.log(data)
//         })
//     })
// })
