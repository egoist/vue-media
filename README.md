# vue-media

[![NPM version](https://img.shields.io/npm/v/vue-media.svg?style=flat)](https://npmjs.com/package/vue-media) [![NPM downloads](https://img.shields.io/npm/dm/vue-media.svg?style=flat)](https://npmjs.com/package/vue-media) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-media/master.svg?style=flat)](https://circleci.com/gh/egoist/vue-media) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

Like [react-media](https://github.com/ReactTraining/react-media) but for Vue.js, and this library is pretty small, it's 969 bytes after minified without gzip.

## Install

```bash
yarn add vue-media
```

CDN: https://unpkg.com/vue-media/dist

## Usage

```vue
<template>
  <div id="app">
    <media :query="{minWidth: 500}">bigger than 500px</media>
    <media :query="{maxWidth: 500}">smaller than 500px</media>
  </div>
</template>

<script>
  import Media from 'vue-media'
  // Component is automatically registered if using CDN.
  export default {
    components: {
      Media
    }
  }
</script>
```

The value of `query` can also be a [media query string](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) like `(max-width: 500px)`, for more info please see [json2mq](https://github.com/akiran/json2mq/blob/master/README.md#usage) doc.

This component will only return the **first one of child components**.

```vue
<template>
  <media :query="{maxWidth: 600}">
    <h2>hello world</h2>
    <my-other-component></my-other-component> <!-- this will not be use! -->
  </media>
</template>
```

### Events

Use the `media-enter` and `media-leave` events.

```vue
<template>
  <div>
    <media 
      :query="{maxWidth: 600}"
      @media-enter="mediaEnter"
      @media-leave="mediaLeave"
    >
      <h2>Hello world</h2>
    </media>
    <h2 v-if="greaterThan600">I'm now wider than 600!</h2>
  </div>
</template>

<script>
import Media from 'vue-media'

export default {
  components: {
    Media
  },
  data() {
    return {
      greaterThan600: window.innerWidth > 600
    }
  },
  methods: {
    mediaEnter(mediaQueryString) {
      this.greaterThan600 = false
    },
    mediaLeave(mediaQueryString) {
      this.greaterThan600 = true
    }
  }
}
</script>
```

The first argument of the listener is a [mediaQueryString](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) like `(min-width: 400px)`.


## Browser support

If you want to support legacy browsers (ie <= 10), please include a `window.matchMedia` [polyfill](https://github.com/paulirish/matchMedia.js/).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-media** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-media/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
