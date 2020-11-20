<template>
  <div class="d-flex flex-column">
    <div class="font-big text-center mt-5">
      Configurações
    </div>
    <div class="font-medium text-center my-3 grey--text text--darken-1">
      Atualize as informações da sua conta
    </div>
    <v-form @submit.prevent="updateUser" class="mx-5 d-flex flex-column">
      <v-text-field :loading="loading" :rules="rules.firstname" label="Nome" v-model="user.firstname" />
      <v-text-field :loading="loading" :rules="rules.lastname" label="Sobrenome" v-model="user.lastname" />
      <v-text-field :loading="loading" label="Senha" type="password" v-model="user.password" />
      <v-text-field :loading="loading" label="Confirmar senha" type="password" v-model="user.confirmPassword" />
      <v-btn class="mt-5 primary" :loading="loading" type="submit" depressed>Atualizar</v-btn>
    </v-form>
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
      firstname: '',
      lastname: '',
      password: '',
      confirmPassword: '',
    },
    rules: {
      firstname: [
        value => !!value || 'Campo necessário',
      ],
      lastname: [
        value => !!value || 'Campo necessário',
      ]
    },
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
    updateUser(e) {
      if (!(this.user.password == this.user.confirmPassword)) this.$toast.error('Senhas não conferem')
      else {
        if (this.user.firstname.length && this.user.lastname.length) {
          let newData = {
            firstname: this.user.firstname,
            lastname: this.user.lastname
          }
          if (this.user.password.length) newData['password'] = this.user.password
          this.loading = true
          this.$store.dispatch('auth/update', newData).then(r => {
            this.loading = false
            this.$toast.success('Usuário atualizado com sucesso!')
            this.$store.dispatch('auth/reauth')
          }).catch(e => {
            this.loading = false
            this.$toast.success('Usuário atualizado com sucesso!')

          })
        }
        else this.$toast.error('Dados mal preenchidos.')
      }
    }
  }
}
</script>