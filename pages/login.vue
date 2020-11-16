<template>
  <div class="d-md-none d-flex white flex-column full-viewport">
    <div class="d-flex align-center login-splash">
      <v-img src="3.jpg" alt="Login splash art" />
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

      <form class="d-flex flex-grow-1 flex-column align-center" action="/">
        <div>
          <v-text-field label="Email" />
          <v-text-field label="Senha" />
        </div>
        <v-spacer />
        <v-btn depressed class="primary" type="submit">Login</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
  right: 12px
  top: 12px

.logo
  position: absolute
  z-index: 500
  left: 12px
  top: 12px
</style>