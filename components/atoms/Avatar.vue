<template>
  <div class="d-flex font-big align-center justify-center avatar yellow darken-2 circle white--text">
    {{firstname.charAt(0)}}
  </div>
</template>

<script>
export default {
  components: {
  },

  computed: {
    firstname() {
      return this.$store.getters['auth/firstname']
    }
  }
}
</script>

<style lang="sass">
.avatar
  height: 172px
  width: 172px
  margin-top: 52px
</style>