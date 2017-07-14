import json2mq from 'json2mq'

export default {
  name: 'media',
  props: {
    query: {
      type: [Object, String],
      required: true
    },
    visibleByDefault: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      matches: this.visibleByDefault
    }
  },
  methods: {
    updateMatches() {
      this.matches = this.mediaQueryList.matches
    }
  },
  mounted() {
    const { query, matches } = this
    if (typeof window === 'undefined') {
      return matches
    }
    const mediaQuery = json2mq(query)
    this.mediaQueryList = window.matchMedia(mediaQuery)
    this.updateMatches()
    this.mediaQueryList.addListener(this.updateMatches)
  },
  render() {
    if (this.matches) {
      return this.$slots.default[0]
    }
  },
  beforeDestroy() {
    if (this.mediaQueryList) {
      this.mediaQueryList.removeListener(this.updateMatches)
    }
  },
  watch: {
    matches: function (newMatch) {
      if (this.mediaQueryList) {
        newMatch ? this.$emit('mediaEnter', this.mediaQueryList.media) : this.$emit('mediaLeave', this.mediaQueryList.media)
      }
    }
  }
}
