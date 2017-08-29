import config from '@/config'

const baseUrl = 'https://api.unsplash.com'
const perPage = 25

const plugin = {
  install (Vue) {
    Vue.http.headers.common['Authorization'] = `Client-ID ${config.clientId}`
    const unsplash = {
      getPhotoList (page = 1) {
        return Vue.http.get(`${baseUrl}/photos?per_page=${perPage}&page=${page}`)
      }
    }
    Object.defineProperty(Vue.prototype, '$unsplash', {
      get () {
        return unsplash
      }
    })
  }
}

export default plugin
