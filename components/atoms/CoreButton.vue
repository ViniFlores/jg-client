<template>
  <v-btn large depressed class="d-flex flex-row button-shape justify-start">
    <div class="button-circle primary mr-5" />
    <div class="button-text">
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
  },
  components: {
  }
}
</script>

<style lang="sass">
.button-shape
  border-radius: 16px

.button-circle
  border-radius: 50%
  height: 32px
  width: 32px

.button-text
  font-weight: 600
  font-size: 18px
  line-height: 29px
  color: #344356
</style>
