<template>
  <div class="text-center text-main">
    <div class="greetings my-5 pt-2 animate__animated animate__backInDown">
      Olá {{user.firstname}}
    </div>
    <div class="text-center text-main animate__animated animate__backInDown">
      Ainda não foi iniciado nenhuma aula. Espere seu professor.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },

  data: () => ({
  }),

  computed: {
    ...mapGetters({
      user: 'auth/state',
      topics: 'class/allTopics',
      selectedTopic: 'class/selectedTopic',
      selectedAnswer: 'class/selectedAnswer',
      actualQuestion: 'class/actualQuestion',
      questions: 'class/questions'
    })
  },
}
</script>

<style lang="sass">

</style>