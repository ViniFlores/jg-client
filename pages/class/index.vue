<template>
  <div class="d-flex flex-column align-center questions-page">
    <no-questions-body v-if="!questions.length" />
    <questions-body v-else />

    <div class="big-ellipse primary" />
    <div class="small-ellipse secondary"/>
  </div>
</template>

<script>
import NoQuestionsBody from '~/components/organisms/class/NoQuestionsBody.vue'
import QuestionsBody from '~/components/organisms/class/QuestionsBody.vue'

export default {
  layout: 'app',
  components: {
    NoQuestionsBody,
    QuestionsBody
  },

  data: () => ({
    questions: [1]
  })
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
