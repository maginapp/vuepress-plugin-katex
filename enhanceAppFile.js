import Eqn from './Eqn.vue'
import Eq from './Eq.vue'

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  Vue.component('Eqn', Eqn)
  Vue.component('Eq', Eq)
}
