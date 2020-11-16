<template>
  <div class="d-flex flex-column align-center justify-center full-viewport pa-5">
    <img class="logo" width="72px" src="logo-jg.svg" alt="Logo Jovens Genios">
    <v-btn class="primary login-button" @click="$router.push('/login')" depressed>Login</v-btn>

    <h6 class="text-h6 mt-5 pt-5">
      Cadastro
    </h6>

    <div class="text-caption mb-5">
      Insira seus dados para se cadastrar
    </div>

    <form class="d-flex flex-column mt-5 flex-grow-1 align-self-stretch">
      <div>
        <v-text-field label="Nome" />
        <v-text-field label="Sobrenome" />
        <v-text-field label="Email" />
        <v-text-field label="Senha" />
        <v-text-field label="Confirmar senha" />

        <div class="text-caption mt-2">
          Insira o id da sua sala
        </div>
        <v-text-field label="Sala" />

      </div>

      <v-spacer />

      <v-btn class="secondary align-self-center" depressed>
        Finalizar
      </v-btn>

    </form>

  </div>
</template>

<script>
export default {
  components: {
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