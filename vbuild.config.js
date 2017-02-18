module.exports = {
  entry: 'example/index.js',
  dist: 'dist-example',
  html: {
    title: 'vue-media'
  },
  webpack(c) {
    console.log(c.module.rules)
    return c
  }
}
