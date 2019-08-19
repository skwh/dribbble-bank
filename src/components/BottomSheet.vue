<template>
  <section class="bottom-sheet">
    <div class="handle">
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BottomSheet'
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

section.bottom-sheet {
  border-radius: 45px;
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  background-color: $grey;
  padding-top: 1.55vh;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 100px;
  position: fixed;
  bottom: 252px;
  width: 411px;

  .handle {
    background-color: rgba(0,0,0, 0.15);
    height: 5px;
    border-radius: 50px;
    width: 20%;
    margin: auto;
  }
}
</style>
