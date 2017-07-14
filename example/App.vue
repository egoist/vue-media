<template>
  <div id="app">
    <h1>Resize the window to see the effect:</h1>
    <media
      :query="{maxWidth: 800}"
      v-on:mediaEnter="maxWidth800"
      v-on:mediaLeave="maxWidth800Leave"
    >
      <div>
        <h2 style="color: orange">{{msg}}</h2>
        <h3>horay!</h3>
      </div>
    </media>
    <media
      :query="{minWidth: 800}"
      v-on:mediaEnter="minWidth800"
      v-on:mediaLeave="minWidth800Leave"
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
