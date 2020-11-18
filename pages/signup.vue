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

    <v-form :disabled="loading" @submit.prevent="signup()" class="d-flex flex-column mt-5 flex-grow-1 align-self-stretch px-5">
      <div>
        <v-text-field type="text" label="Nome" :rules="rules.firstname" v-model="user.firstname" />
        <v-text-field type="text" label="Sobrenome" :rules="rules.lastname" v-model="user.lastname" />
        <v-text-field type="text" label="Email" :rules="rules.email" v-model="user.email" />
        <v-text-field type="password" label="Senha" :rules="rules.password" v-model="user.password" />
        <v-text-field type="password" label="Confirmar senha" :rules="rules.confirmPassword" v-model="user.confirmPassword" />

        <div class="text-caption mt-2">
          Insira o id da sua sala
        </div>
        <v-text-field type="text" label="Sala" :rules="rules.classId" v-model="user.classId" />

      </div>

      <v-spacer />

      <v-btn :loading="loading" class="secondary align-self-center" type="submit" depressed>
        Finalizar
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
    user: {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      confirmPassword: null,
      classId: null
    },

    rules: {
      firstname: [
        value => !!value || 'Campo necessário',
      ],
      lastname: [
        value => !!value || 'Campo necessário',
      ],
      email: [
        value => !!value || 'Campo necessário',
      ],
      password: [
        value => !!value || 'Campo necessário',
      ],
      confirmPassword: [
        value => !!value || 'Campo necessário'
      ],
      classId: [
        value => !!value || 'Campo necessário'
      ]
    }
  }),


  methods: {
    signup() {
      if (this.user.password != this.user.confirmPassword) this.$toast.error('Confirmação de senha mal sucedida.')

      else {
        this.loading = true
        this.$axios.$post('http://localhost:3030/users/create', this.user).then(() => {
          this.$router.push('/login')
          this.$toast.info("Está sendo enviado um email para confirmação da conta")
          this.loading = false
        }).catch(e => {
          this.$toast.error("Erro ao criar conta.")
          this.loading = false
        })
      }

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