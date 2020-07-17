import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  error: '/images/placeholders/broken.png',
  loading: '/images/placeholders/loading.svg',
})
