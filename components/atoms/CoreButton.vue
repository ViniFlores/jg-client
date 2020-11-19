<template>
  <v-btn large depressed height="44px" class="d-flex p-relative flex-row button-shape justify-start">
    <div class="button-circle primary mr-2" />
    <div class="button-text font-medium">
      {{text}}
    </div>
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    }
  },
  components: {
  }
}
</script>

<style lang="sass">
.button-shape
  border-radius: 16px
  overflow: hidden

.button-circle
  border-radius: 50%
  height: 32px
  width: 32px

.button-text
  font-weight: 600
  line-height: 29px
  color: #344356

</style>
