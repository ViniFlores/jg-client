<template>
  <div class="d-flex flex-column">
    <div class="font-big text-center mt-5">
      Configurações
    </div>
    <div class="font-medium text-center my-3 grey--text text--darken-1">
      Atualize as informações da sua conta
    </div>
    <div class="mx-5">
      <v-text-field label="Nome" v-model="user.firstname" />
      <v-text-field label="Sobrenome" v-model="user.lastname" />
      <v-text-field label="Senha" type="password" v-model="user.password" />
      <v-text-field label="Confirmar senha" type="password" v-model="user.confirmPassword" />
    </div>
    <v-spacer />
    <v-btn class="mx-5 mt-5 primary" depressed>Atualizar</v-btn>
    <div class="text--caption text-center mx-5 mt-2">(Manter senha em branco para não alterar)</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'app',
  components: {
  },
  
  data: () => ({
    loading: false,

    user: {
      firstname: null,
      lastname: null,
      password: null,
      confirmPassword: null,
    }
  }),

  computed: {
    ...mapGetters({
      userState: 'auth/state'
    })
  },

  created() {
    this.user.firstname = this.userState.firstname
    this.user.lastname = this.userState.lastname
  },

  methods: {
    updateAccount() {

    }
  }
}
</script>