<template>
  <div id="app">
    <h1>Resize the window to see the effect:</h1>
    <media
      :query="{maxWidth: 800}"
      @media-enter="maxWidth800"
      @media-leave="maxWidth800Leave"
    >
      <div>
        <h2 style="color: orange">{{msg}}</h2>
        <h3>horay!</h3>
      </div>
    </media>
    <media
      :query="{minWidth: 800}"
      @media-enter="minWidth800"
      @media-leave="minWidth800Leave"
    >
      <div>
        <h2 style="color: green">{{msg}}</h2>
        <h3>oops!</h3>
      </div>
    </media>
  </div>
</template>

<script>
  import Media from '../src'

  export default {
    components: {
      Media
    },
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      maxWidth800 () {
        this.msg = 'smaller than 800'
      },
      maxWidth800Leave (media) {
        console.log('Has left media: ', media)
      },
      minWidth800 () {
        this.msg = 'bigger than 800'
      },
      minWidth800Leave (media) {
        console.log('Has left media: ', media)
      },
    }
  }
</script>
