<template>
  <div class="d-flex flex-column answer-sheet align-self-center pa-5">
    <div class="question-title mb-5">
      {{ title }}
    </div>

    <div class="d-flex flex-column my-5">
      <v-btn 
        v-for="(answer, i) in answers" 
        :key="`answer_` + answer.id" 
        outlined 
        height="44px"
        :class="'border-radius mb-3 justify-start font-medium ' + (answer.id == selectedAnswerId ? 'secondary white--text' : '')"
        @click="selectAnswer(answer.id)"
      >
        {{String.fromCharCode(65 + i) + '. ' + answer.description}}

      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    id: Number,
    title: String,
    answers: Array
  },
  components: {
  },

  computed: {
    ...mapGetters({
      selectedAnswerId: 'class/selectedAnswer'
    })
  },

  methods: {
    selectAnswer(id) {
      this.$store.commit('class/selectAnswer', id)
    }
  }
}
</script>

<style lang="sass">
.answer-sheet
  border-radius: 16px
  width: calc(100vw - 24px)
  background-color: white

</style>