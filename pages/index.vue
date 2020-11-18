<template>
  <div class="d-flex flex-column align-center questions-page">
    <no-questions-body v-if="!loading && !topics.length" />
    <questions-body v-else-if="!loading" />

    <div class="big-ellipse primary animate__animated animate__fadeIn" />
    <div class="small-ellipse secondary animate__animated animate__fadeIn"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import NoQuestionsBody from '~/components/organisms/class/NoQuestionsBody.vue'
import QuestionsBody from '~/components/organisms/class/QuestionsBody.vue'

export default {
  layout: 'app',
  components: {
    NoQuestionsBody,
    QuestionsBody
  },

  data: () => ({
    loading: false
  }),

  computed: {
    ...mapGetters({
      selectedTopic: 'topic/selected',
      topics: 'topic/all',
    })
  },

  created() {
    this.loading = true
    this.$store.dispatch('topic/populate').then(r => {
      this.loading = false
    }).catch(e => {
      console.error(e)
      this.loading = false
    })
    if (this.topic)
      this.setNav(false)
    else
      this.setNav(true)
  },

  methods: {
    ...mapMutations({
      setNav: 'app/setNav'
    })
  }
}
</script>

<style lang="sass">
.big-ellipse
  position: absolute
  z-index: 0
  width: 186px
  height: 186px
  left: 57px
  top: 373px
  border-radius: 50%

.small-ellipse
  position: absolute
  z-index: 0
  width: 116px
  height: 116px
  left: 153px
  top: 467px
  background: #FD7900
  border-radius: 50%

.questions-page
  min-height: calc(100vh - 68px)
</style>
