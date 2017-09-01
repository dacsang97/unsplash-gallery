import axios from 'axios'
import config from '@/config'

const baseUrl = 'https://api.unsplash.com'
const perPage = 25
const headers = {
  Authorization: `Client-ID ${config.clientId}`
}

const plugin = {
  install (Vue) {
    const api = axios.create({
      headers
    })
    const unsplash = {
      getPhotoList (page = 1) {
        return api.get(`${baseUrl}/photos?per_page=${perPage}&page=${page}`)
      },
      getUserPhotoList (username, page = 1) {
        return api.get(`${baseUrl}/users/${username}/photos?per_page=${perPage}&page=${page}`)
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
