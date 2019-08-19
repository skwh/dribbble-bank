<template>
  <div id="container">
    <div id="app">
      <router-view />
      <navigation></navigation>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: #e6eaee;
}

#app {
  width: 411px;
  max-width: 411px;
  height: 823px;
  max-height: 823px;
  overflow: hidden;
  background-color: white;
  border-radius: 45px;
  box-sizing: content-box;
}

#container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  line-height: 1;
}
</style>
