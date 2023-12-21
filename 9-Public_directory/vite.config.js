import Inspect from 'vite-plugin-inspect'

export default {
  publicDir: 'public', // this is the default value of the publicDir option (can be omitted) it is relative to project root. and if you want to change it, you can do it like this publicDir: 'assets' or publicDir: '../public' (relative to vite.config.js) or publicDir: '/public' (relative to root) and so on. public folder is where you put your static assets like images, fonts, etc. and are unprocessed by vite. so you can access them directly in your html files like this <img src="/logo.png" alt="logo" /> or in your css files like this background-image: url('/logo.png'); and so on. as they are left in the root of the built project
  plugins: [
    Inspect()
  ],
}
