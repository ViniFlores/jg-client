<template>
  <div class="d-flex flex-column align-center justify-center full-viewport pa-5 overflow-hidden">
    <img class="logo" width="72px" src="logo-jg.svg" alt="Logo Jovens Genios">
    <v-btn class="primary login-button" @click="$router.push('/login')" depressed>Login</v-btn>

    <h6 class="text-h6 mt-5 pt-5">
      Recuperação de conta
    </h6>

    <div class="text-caption mb-5">
      Escolha sua nova senha
    </div>

    <v-form :disabled="loading" @submit.prevent="redefine()" class="d-flex flex-column mt-5 flex-grow-1 align-self-stretch px-5">
      <div>
        <v-text-field type="password" label="Senha" :rules="rules.password" v-model="password" />
        <v-text-field type="password" label="Confirmar senha" :rules="rules.confirmPassword" v-model="confirmPassword" />

      </div>

      <v-spacer />

      <v-btn :loading="loading" class="secondary align-self-center" type="submit" depressed>
        Redefinir
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
    password: null,
    confirmPassword: null,

    rules: {
      password: [
        value => !!value || 'Campo necessário',
      ],
      confirmPassword: [
        value => !!value || 'Campo necessário'
      ]
    }
  }),


  methods: {
    redefine() {
      if (this.password != this.confirmPassword) {
        this.$toast.error('Senhas não conferem')
        return
      }
      this.$store.dispatch('auth/redefine', {jwt: this.$route.params.jwt, password: this.password}).then(r => {
        this.$toast.success('Senha redefinida com sucesso!')
        this.$store.dispatch('auth/reauth').then(r => {
          this.$router.push('/')  
        }).catch(e => {
          this.$toast.error("Erro ao reautenticar")
        })
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