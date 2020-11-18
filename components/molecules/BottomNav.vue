<template>
  <transition
    leave-active-class="animate__fadeOutDown"
  >
    <v-bottom-navigation
      fixed
      grow
      class="animate__animated animate__fadeInUp"
      color="primary"
      v-model="value"
    >

      <v-btn
        v-for="item in items"
        :key="`NavButton-` + item.name"
        :value="item.id"
        :to="item.to"
      >
        <span>{{item.name}}</span>

        <v-icon>{{item.icon}}</v-icon>

      </v-btn>

    </v-bottom-navigation>
  </transition>
</template>

<script>
export default {
  data: () => ({
    items: [
      {id: 1, name: 'Aula', icon: 'mdi-book', to: '/'},
      {id: 2, name: 'Amigos', icon: 'mdi-account-multiple', to: '/friends'},
      {id: 3, name: 'Configurações', icon: 'mdi-cogs', to: '/preferences'},
    ],
    value: 1
  }),

}
</script>