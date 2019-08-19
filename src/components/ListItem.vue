<template>

<div class="list-item">
  <div class="icon-holder">
    <icon v-bind:name="icon"
          v-bind:style="{ color: color }"></icon>
  </div>
  <div class="list-item-body">
    <div class="list-item-text">
      <h5>{{ headerText }}</h5>
      <h2>{{ mainText }}</h2>
    </div>
    <div class="list-item-spotlight">
      <h1 v-bind:style="{ color: color }">{{ spotlightText }}</h1>
    </div>
  </div>
</div>

</template>

<script>
import Icon from './Icon'

export default {
  name: 'ListItem',
  components: {
    Icon
  },
  props: {
    icon: String,
    headerText: String,
    mainText: String,
    spotlightText: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

h1, h2, h5 {
  margin: 0;
}

div.list-item {
  display: flex;
  align-items: center;
  height: 50px;
  margin: 1.3vh 0vw;
}

div.list-item-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 auto;
  margin: 0.5vh 0.5vw;

  h1, h2, h5 {
    margin: 0.4vw;
  }

}

div.icon-holder {
  background-color: $light-grey;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25vh 0.25vw;
  height: 40px;
  width: 40px;

  i.material-icons-outlined {
    font-size: 18px;
    font-weight: bold;
  }

}

div.list-item-text {
  h5 {
    color: $medium-grey;
    font-weight: lighter;
    font-size: 14px;
  }
  h2 {
    color: black;
    font-size: 16px;
    font-weight: 600;
  }
}

div.list-item-spotlight {
  h1 {
    font-size: 16px;
    font-weight: normal;
  }
}

</style>
