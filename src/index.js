import json2mq from 'json2mq'

export default {
  name: 'media',
  functional: true,
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
  render(h, ctx) {
    const {query, visibleByDefault} = ctx.props
    if (typeof window === 'undefined') {
      return visibleByDefault
    }
    const mediaQuery = json2mq(query)
    const mediaQueryList = window.matchMedia(mediaQuery)
    mediaQueryList.addListener(() => {
      ctx.parent.$forceUpdate()
    })
    const {matches} = mediaQueryList
    if (matches) {
      return ctx.children
    }
    return
  }
}
