<template>
  <div class="d-flex flex-column flex-grow-1 align-self-stretch align-center pt-2">

    <transition
      leave-active-class="animate__backOutUp absolute"
    >
      <div v-if="!selectedTopic && !final" class="greetings animate__animated animate__backInDown">
        Olá {{ user.firstname }}
      </div>
    </transition>

    <transition
      leave-active-class="animate__animated animate__backOutLeft absolute"
    >
      <div v-if="!selectedTopic && !final" class="d-flex flex-column align-self-stretch mt-5">
          <core-button 
            v-for="(topic, i) in topics"
            :key="'topic_' + topic.id"
            :class="'mb-5 mx-2 animate__animated ' + ( i%2 ? 'animate__backInLeft' : 'animate__backInLeft')"
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
        class="mt-2 mx-2 align-self-stretch animate__animated animate__backInLeft"
        :text="selectedTopic.title"
      />
    </transition>


    <div 
      v-for="(question, i) in questions" 
      :key="`question_` + question.id"
      class="answer-area"
    >

      <transition
        leave-active-class="animate__backOutLeft"
      >
        
        <div v-if="actualQuestion == i" class="d-flex p-relative flex-column animate__animated animate__backInUp">
          <question-sheet 
            :id="question.id"
            :title="question.title"
            :answers="question.answers"
          />

        </div>

      </transition>

    </div>

    {{questions}}
    {{experience}}
    {{maxExp}}

    <v-spacer />

    <div v-if="final" class="my-5 mx-5 d-flex flex-column border-radius align-self-stretch align-center">
      <div class="p-relative my-5">
        <div class="p-relative d-flex justify-center">
          <v-progress-circular class="anti-clockwise p-relative" color="secondary" rotate=-90 size=210 width=28 :value="100* (experience/selectedTopic.questions.reduce(((acc, v) => acc + v.exp), 0))">
            <div class="anti-clockwise primary--text font-big">
              + {{experience}}xp
            </div>
        </v-progress-circular>

        <div v-if="(experience/maxExp) == 1" class="perfect-check d-flex align-center justify-center circle secondary animate__animated animate__bounceIn animate__delay-1s">
          <v-icon size="44px" class="white--text">mdi-check</v-icon>
        </div>

        </div>
      </div>
      <div class="font-medium text-center mb-2 animate__animated animate_backInUp">
        Você é incrível!
      </div>
      <div class="text-center animate__animated animate_backInUp">
        Parabéns por finalizar este tópico!
      </div>
      <confetti v-if="endOfTopic" />
    </div>

    <v-spacer />

    <v-btn v-if="selectedTopic || final" @click="endOfTopic? goBack() : answerQuestion()" height="44px" class="primary font-medium border-radius my-5 animate__animated animate__backInUp" depressed>
      <span class="mr-5 pr-5">
        Continuar
      </span>
      <div class="absolute d-flex align-center justify-center continue-button-icon-space primary darken-2">
        <v-icon>mdi-arrow-right</v-icon>
      </div>
    </v-btn>

    <transition
      leave-active-class="animate__backOutDown"
    >
      <div v-if="!selectedTopic && !final" :class="'d-flex text-main text-center attention-message animate__animated animate__backInUp absolute'">
        Preste atenção no professor.
      </div>
    
    </transition>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CoreButton from '~/components/atoms/CoreButton.vue'
import QuestionSheet from '~/components/molecules/QuestionSheet.vue'
import Confetti from '~/components/molecules/Confetti.vue'

export default {
  components: {
    CoreButton,
    QuestionSheet,
    Confetti
  },

  data: function() {
    return {
      loading: false,
      experience: 0,
      final: false,
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/state',
      topics: 'class/allTopics',
      selectedTopic: 'class/selectedTopic',
      selectedAnswer: 'class/selectedAnswer',
      actualQuestion: 'class/actualQuestion',
      questions: 'class/questions'
    }),

    endOfTopic() {
      return !(this.actualQuestion < this.questions.length)
    },

    maxExp() {
      return this.questions.reduce((acc, question) => {
        return acc + Math.max.apply(Math, question.answers.map(answer => answer.experience))
      }, 0)
    }
  },

  mounted() {
    setTimeout(() => this.grade = 80, 1000)
  },

  methods: {
    selectTopic(topic) {
      this.loading = true
      this.$store.dispatch('class/selectTopic', topic).then(r => {
        this.$store.commit('app/setNav', false)
        this.loading = false
      }).catch(e => {
        console.error(e)
        this.loading = false
      })
    },

    answerQuestion() {
      if (this.selectedAnswer){
        this.$store.commit('class/answerQuestion')
        if (this.endOfTopic) {
          this.final = true
          this.$store.dispatch('class/submitTopic').then(r => {
            this.experience = r.experience
            this.$toast.success('Você finalizou o tópico !')
          })
        }
      }
      else this.$toast.error('Por favor escolha uma das respostas.')
    },

    goBack() {
      this.$store.dispatch('class/populateTopics').then(r => {
        this.final = false
        this.experience = 0
        this.$store.commit('class/clearData')
        this.$store.commit('app/setNav', true)
        this.loading = false
      }).catch(e => {
        console.error(e)
        this.loading = false
      })
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
  bottom: 65px
  max-width: 320px
  
.answer-area
  position: absolute
  top: 25%

.absolute
  position: absolute

.continue-button-icon-space
  height: 36px
  width: 36px
  border-radius: 50%
  right: 0px

.perfect-check
  position: absolute
  width: 74px
  height: 74px
  top: -26px

.anti-clockwise
  transform: scale(-1, 1)
</style>