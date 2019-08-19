<template>
  <nav>
    <template v-for="element in elements">
      <div v-bind:class="{ button: true, selected: element.selected }"
           v-bind:key="element.name">
        <icon v-bind:name="element.name"></icon>
        <span>{{ element.text }}</span>
      </div>
    </template>
  </nav>
</template>

<script>
import Icon from './Icon'

let elements = [
  { name: 'home', text: 'Home', selected: true },
  { name: 'credit_card', text: 'Cards', selected: false },
  { name: 'compare_arrows', text: 'Transactions', selected: false },
  { name: 'more_vert', text: 'More', selected: false }
]

export default {
  name: 'Navigation',
  data: function () {
    return {
      elements: elements
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

nav {
  height: 100px;
  width: 411px;
  top: 732px;
  border-radius: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  color: $medium-grey;
  position: fixed;
  padding: 0 1vw;
}

div.button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.1vh 1.1vw;
  border-radius: 45px;
  font-weight: 600;

  cursor: pointer;

  span {
    margin-left: 0.55vw;
  }

  &.selected {
    background-color: $grey;
    color: $blue;
  }

  &:not(.selected) > span {
    display: none;
  }
}
</style>
