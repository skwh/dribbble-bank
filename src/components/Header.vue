<template>
  <section class="header">
    <div class="left">
      <slot name="left">
      </slot>
    </div>
    <div class="right">
      <slot name="right">
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pageHeader'
}
</script>

<style lang="scss" scoped>
section.header {
  margin: 50px 2vw 0 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
