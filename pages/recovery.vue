<template>
  <div class="d-flex flex-column align-center justify-center full-viewport pa-5">
    <img class="logo" width="72px" src="logo-jg.svg" alt="Logo Jovens Genios">
    <v-btn class="primary login-button" @click="$router.push('/login')" depressed>Login</v-btn>

    <h6 class="text-h6 mt-5 pt-5">
      Recuperação de conta
    </h6>

    <div class="text-caption mb-5">
      Insira seu e-mail e enviaremos um e-mail com as instruções para recuperar a conta
    </div>

    <v-form :disabled="loading" @submit.prevent="recovery()" class="d-flex flex-column mt-5 flex-grow-1 align-self-stretch px-5">
      <div>
        <v-text-field type="text" label="Email" :rules="rules.email" v-model="email" />

      </div>

      <v-spacer />

      <v-btn :loading="loading" class="secondary align-self-center" type="submit" depressed>
        Recuperar
      </v-btn>

    </v-form>

  </div>
</template>

<script>
export default {
  components: {
  },

  data: () => ({
    loading: false,
    email: null,

    rules: {
      email: [
        value => !!value || 'Campo necessário',
      ]
    }
  }),


  methods: {
    recovery() {
      this.$store.dispatch('auth/recovery', this.email).then(r => {
        this.$toast.success('Siga as instruções no e-mail que lhe enviamos')
        this.$router.push('/login')
      }).catch(e => {
        this.$toast.error('Erro de conexão')
      })
    },
  }
}
</script>

<style lang="sass">
.login-button
  position: absolute
  top: 24px
  right: 24px

.logo
  position: absolute
  z-index: 500
  left: 12px
  top: 12px
</style>