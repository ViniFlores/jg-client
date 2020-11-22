<template>
  <div class="d-flex white flex-column full-viewport overflow-hidden">
    <div class="d-flex align-center login-splash">
      <v-img src="3.jpg" max-height=400 contain alt="Login splash art" />
      <img class="logo" width="72px" src="logo-jg.svg" alt="Logo Jovens Genios" >
      <v-btn class="secondary signup-button" @click="$router.push('/signup')" depressed>Cadastrar</v-btn>
    </div>
    <div class="d-flex flex-column login-form pa-5 align-center">
      <div class="text-h6">
        Login
      </div>
      <div class="text-caption">
        Bem vindo de volta !
      </div>

      <div class="d-flex flex-grow-1 flex-column align-center" method="POST" @submit.prevent="login">
        <div>
          <v-text-field type="text" label="Email" v-model="email" />
          <v-text-field type="password" label="Senha" v-model="password" />
        </div>
        <a @click="$router.push('/recovery')" class="align-self-end text--caption">Esqueci a senha</a>
        <v-spacer />
        <v-btn :loading="loading" depressed class="primary mb-5" @click="login()">Login</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  components: {
  },

  data: () => ({
    email: '',
    loading: false,
    password: ''
  }),

  methods: {
    login() {
      console.log('POST: API_URL/users/login')
      this.loading = true
      this.$store.dispatch('auth/login', {email: this.email, password: this.password}, {withCredentials: true}).then(() => {
        this.loading = false
        this.$router.push('/')
      }).catch(e => {
        this.loading = false
        this.$toast.error("Erro ao se conectar.")
      })
    },
  }
}
</script>

<style lang="sass">
.full-viewport
  width: 100vw
  height: 100vh

.login-splash
  position: relative
  background-color: #94D0D0
  flex-grow: 2

.login-form
  z-index: 0
  flex-grow: 2

.signup-button
  position: absolute
  right: 24px
  top: 12px

.logo
  position: absolute
  z-index: 500
  left: 12px
  top: 12px

</style>