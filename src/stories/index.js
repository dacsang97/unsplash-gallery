import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// Add bootstrap-vue
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// Import mockup
import photos from '../mockup/photos.json'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'
import CardImage from '../components/UIComponents/CardImage/index.vue'
import CardList from '../components/UIComponents/CardList'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))

storiesOf('Card Image', module)
  .add('default', () => ({
    components: { CardImage },
    data () {
      return {
        photos: photos
      }
    },
    template: `
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <b-card-group columns>
              <card-image :image="photos[16]"></card-image>
            </b-card-group>
          </div>
        </div>
        
      </div>
    `
  }))

storiesOf('Card List', module)
  .add('default', () => ({
    components: {
      CardList
    },
    data () {
      return {
        photos: photos
      }
    },
    template: `
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <card-list :images="photos"></card-list>
          </div>
        </div>
        
      </div>
    `
  }))
