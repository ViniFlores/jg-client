<template>
  <v-bottom-navigation
    fixed
    grow
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
</template>

<script>
  export default {
    data: () => ({
      items: [
        {id: 1, name: 'Aula', icon: 'mdi-book', to: '/class'},
        {id: 2, name: 'Amigos', icon: 'mdi-account-multiple', to: '/'},
        {id: 3, name: 'Configurações', icon: 'mdi-cogs', to: '/'}
      ],
      value: 1 
    }),
  }
</script>