<template>
  <div class="confetti-container">
    <div class="confetti-1 animate__animated animate__fadeIn" />
    <div class="confetti-2 animate__animated animate__fadeIn" />
    <div class="confetti-3 animate__animated animate__fadeIn" />
    <div class="confetti-4 animate__animated animate__fadeIn" />
    <div class="confetti-5 animate__animated animate__fadeIn" />
    <div class="confetti-6 animate__animated animate__fadeIn" />
    <div class="confetti-7 animate__animated animate__fadeIn" />
    <div class="confetti-8 animate__animated animate__fadeIn" />
    <div class="confetti-9 animate__animated animate__fadeIn" />
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="sass">
.confetti-container
  z-index: 0

.confetti-1
  z-index: 0
  transform: rotate(100deg) !important
  position: absolute
  width: 26px
  height: 12px
  left: 17%
  top: 177.84px
  background: #88B98B

.confetti-2
  z-index: 0
  position: absolute
  width: 19px
  height: 28px
  left: 14%
  top: 210.82px
  background: #F98E7C
  transform: rotate(-45deg)

.confetti-3
  z-index: 0
  position: absolute
  width: 26px
  height: 17px
  left: 9%
  top: 289.16px
  background: #7AE0FC
  transform: rotate(-23deg)

.confetti-4
  z-index: 0
  position: absolute
  width: 38px
  height: 14px
  left: 15%
  top: 426.3px
  background: #F97AB4
  transform: rotate(-80deg)

.confetti-5
  z-index: 0
  position: absolute
  width: 26px
  height: 17px
  left: 12%
  top: 523.16px
  background: #7AE0FC
  transform: rotate(-23deg)

.confetti-6
  z-index: 0
  position: absolute
  width: 38px
  height: 14px
  right: 11%
  top: 172.44px
  background: #F97AB4
  transform: rotate(-48deg)

.confetti-7
  z-index: 0
  position: absolute
  width: 19px
  height: 28px
  right: 15%
  top: 244.44px
  background: #F98E7C
  transform: rotate(-45deg)

.confetti-8
  z-index: 0
  position: absolute
  width: 26px
  height: 17px
  right: 12%
  top: 436.76px
  background: #7AE0FC
  transform: rotate(-23deg)

.confetti-9
  z-index: 0
  position: absolute
  width: 19px
  height: 28px
  right: 16%
  top: 497.44px
  background: #F98E7C
  transform: rotate(-45deg)


</style>