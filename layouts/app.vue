<template>
  <v-app>
    <v-main class="app">
      <nuxt />
    </v-main>
    <bottom-nav v-if="navBottom" />
  </v-app>
</template>

<script>
import BottomNav from '~/components/molecules/BottomNav.vue'
import { mapGetters } from 'vuex'
import io from 'socket.io-client'
import { API_URL } from './../variables'

export default {
  components: { 
    BottomNav 
  },
  data () {
    return {
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
    })
    this.socket.on('newTopic', () => {
      this.$store.dispatch('class/populateTopics')
    })
  },
  computed: {
    ...mapGetters({
      navBottom: 'app/navBottom'
    })
  }
}
</script>

<style lang="sass">
div
  z-index: 1

html
  font-family: "Montserrat"

.app
  font-family: "Montserrat"
  background-color: #E5E5E5

.greetings
  font-weight: bold
  font-size: 24px
  line-height: 29px
  color: #000000

.text-main
  font-weight: 600
  font-size: 24px
  line-height: 29px
  color: #616E7B

.flex-grow-hide
  flex-grow: 0.00001

.flex-grow-transition
  transition: flex-grow 1000ms ease-in-out

.question-title
  font-weight: 600
  font-size: 32px
  line-height: 39px
  color: #344356

.border-radius
  border-radius: 16px

.font-medium
  font-weight: 600
  font-size: 24px !important
  line-height: 29px

.font-big
  font-weight: 600
  font-size: 42px
  line-height: 51px

.all_transitions
  transition: all 0.5s ease-in

.circle
  border-radius: 50%

.p-relative
  position: relative

.overflow-hidden
  overflow: hidden
</style>