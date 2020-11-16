<template>
  <div class="d-flex flex-column flex-grow-1 align-self-stretch align-center pt-2">
    <div :class="'animate__fadeInDownBig greetings all_transitions ' + (!selected ? 'greetings-show my-5' : 'greetings-hidden')">
      Olá Antonio
    </div>
    <div class="d-flex flex-column flex-grow-transition align-self-stretch ">
      <core-button 
        class="mb-5 flex-grow-transition"
        text="Números Ímpares"
        :trigger="selectQuestion"
      />
      <core-button
        v-if="!selected"
        class="mb-5 flex-grow-transition"
        text="Números Pares"
      />
    </div>

    <div v-if="selected" class="d-flex flex-column answer-sheet align-self-center pa-5 animate__animated animate__backInUp">
      <div class="question-title mb-5">
        Qual desses números é par?
      </div>

      <div class="d-flex flex-column mt-5">
        <v-btn outlined class="secondary border-radius mb-2 justify-start font-medium">A. 13</v-btn>
        <v-btn outlined class="secondary border-radius mb-2 justify-start font-medium">B. 27</v-btn>
        <v-btn outlined class="secondary border-radius mb-2 justify-start font-medium">C. 1</v-btn>
        <v-btn outlined class="secondary border-radius mb-2 justify-start font-medium">D. 32</v-btn>
      </div>
    </div>


    <v-spacer />

    <div v-if="!selected" class="d-flex text-main text-center attention-message">
      Preste atenção no professor.
    </div>

  </div>
</template>

<script>
import CoreButton from '~/components/atoms/CoreButton.vue'

export default {
  components: {
    CoreButton
  },

  data: function() {
    return {
      selected: null,
    }
  },

  methods: {
    selectQuestion() {
      this.selected = 1
    }
  }
}
</script>

<style lang="sass">
.greetings-hidden
  opacity: 0
  max-height: 0px

.greetings-show
  opacity: 1
  max-height: 40px

.attention-message
  margin-bottom: 65px
  max-width: 320px

.answer-sheet
  position: absolute
  border-radius: 16px
  width: calc(100vw - 24px)
  top: 25%
  background-color: white
</style>