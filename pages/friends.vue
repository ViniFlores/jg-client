<template>
  <div class="d-flex friends-page flex-column align-center p-relative overflow-hidden">
    <avatar class="animate__animated animate__fadeIn" />
    <div class="mt-5 font-big animate__animated animate__fadeIn">
      {{user.firstname}} {{user.lastname}}
    </div>
    <div class="font-medium mx-2 animate__animated animate__fadeIn grey--text text--darken-1">
      {{exp}} xp
    </div>
    <div class="big-blue-ellipse-friends circle overflow-hidden animate__animated animate__fadeIn" />

    <v-btn-toggle class="border-radius table-header mt-5 animate__animated animate__fadeIn">
      <v-btn>
        Conquista
      </v-btn>

      <v-btn>
        Amigos
      </v-btn>

      <v-btn>
        Histórico
      </v-btn>

    </v-btn-toggle>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Avatar from '~/components/atoms/Avatar'
export default {
  layout: 'app',
  components: {
    Avatar
  },

  data: () => ({
    loading: true
  }),

  computed: {
    ...mapGetters({
      exp: 'auth/exp',
      user: 'auth/state'
    })
  },

  created() {
    this.loading = true
    this.$store.dispatch('auth/fetchExp').then(() => {
      this.loading = false
    }).catch(e => {
      this.loading = false
    })
  }


}
</script>

<style lang="sass">
.friends-page
  max-width: 100vw

.big-blue-ellipse-friends
  z-index: 0
  position: absolute
  width: 264px
  height: 272px
  left: 207px
  top: -61px
  background: #5468FF
  overflow-x: hidden
  overflow-y: auto

.table-header
  border: 1px solid yellow !important

</style>