<template>
  <div class="d-flex flex-column flex-grow-1 align-self-stretch align-center pt-2">

    <transition
      leave-active-class="animate__backOutUp absolute"
    >
      <div v-if="!selectedTopic" class="greetings animate__animated animate__backInDown">
        Olá {{ user.firstname }}
      </div>
    </transition>

    <transition
      leave-active-class="animate__animated animate__backOutLeft absolute"
    >
      <div v-if="!selectedTopic" class="d-flex flex-column align-self-stretch mt-5">
          <core-button 
            v-for="topic in topics"
            :key="'topic_' + topic.id"
            class="mb-5 animate__animated animate__backInLeft"
            :text="topic.title"
            @click.native="selectTopic(topic)"
          />  
      </div>
    </transition>

    <transition
      leave-active-class="animate__animated animate__backOutLeft"
    >
      <core-button 
        v-if="selectedTopic"
        class="mb-5 align-self-stretch animate__animated animate__backInLeft"
        :text="selectedTopic.title"
      />
    </transition>

    <div v-if="selectedTopic" class="d-flex flex-column answer-sheet align-self-center pa-5 animate__animated animate__backInUp">
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

    <transition
      leave-active-class="animate__backOutDown"
    >
      <div v-if="!selectedTopic" class="d-flex text-main text-center attention-message animate__animated animate__backInLeft">
        Preste atenção no professor.
      </div>
    
    </transition>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CoreButton from '~/components/atoms/CoreButton.vue'

export default {
  components: {
    CoreButton
  },

  data: function() {
    return {
      selectedTopic: null,
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/state',
      topics: 'topic/all'
    })
  },

  methods: {
    selectTopic(topic) {
      this.selectedTopic = topic
      this.$store.commit('app/setNav', false)
    },
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
  
.absolute
  position: absolute
</style>