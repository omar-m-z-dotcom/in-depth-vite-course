const modules = import.meta.glob('./src/10/*.js', {
    eager: true,
    import: 'name', // specifies what are the named exports to import, default is '*' (all)
    // as: "raw" // get raw source code of imported modules
    // as: "url" // get url of imported modules
})

console.log(modules)

// document.addEventListener('click', () => {
//   Object.values(modules).forEach((module) => {
//     module().then((name) => {
//       console.log(name)
//     })
//   })
// })
