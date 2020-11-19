<template>
  <div class="d-flex flex-column align-center questions-page pt-5">
    <no-questions-body v-if="!loading && !topics.length" />
    <questions-body v-else-if="!loading" />

    <div v-if="!selectedTopic" class="big-ellipse primary animate__animated animate__fadeIn" />
    <div v-if="!selectedTopic" class="small-ellipse secondary animate__animated animate__fadeIn"/>

    <div v-else-if="actualQuestion < questions.length" class="big-ellipse-bottom secondary animate__animated animate__fadeIn" />

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
      selectedTopic: 'class/selectedTopic',
      actualQuestion: 'class/actualQuestion',
      questions: 'class/questions',
      topics: 'class/allTopics',
    })
  },

  created() {
    this.loading = true
    this.$store.dispatch('class/populateTopics').then(r => {
      this.loading = false
      if (this.selectedTopic && this.topics.filter(el => el.id == this.selectedTopic.id).length)
        this.setNav(false)
      else {
        this.setNav(true)
        this.clearData()
      }
    }).catch(e => {
      console.error(e)
      this.loading = false
    })
    
  },

  methods: {
    ...mapMutations({
      setNav: 'app/setNav',
      clearData: 'class/clearData'
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
  overflow: hidden
  border-radius: 50%

.small-ellipse
  position: absolute
  z-index: 0
  width: 116px
  height: 116px
  left: 153px
  top: 467px
  overflow: hidden
  background: #FD7900
  border-radius: 50%

.big-ellipse-bottom-container
  z-index: 0

.big-ellipse-bottom
  position: absolute
  z-index: 0
  top: 519px
  left: 168px
  width: 320px
  height: 320px
  border-radius: 50%

.questions-page
  min-height: calc(100vh)
  position: relative
  overflow: hidden
</style>
