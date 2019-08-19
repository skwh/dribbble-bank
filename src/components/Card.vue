<template>

<div class="card"
     v-bind:style="{ backgroundColor: color, boxShadow: '0px 5px 10px ' + color }">
  <h1 class="balance">
    {{ currency }}
    {{ balance }}
  </h1>
  <div class="number">
    <div v-for="n in 3"
         v-bind:key="n"
         class="stars">
         ****
    </div>
    <div>{{ lastFourDigits }}</div>
  </div>
  <div class="expiry">
    <p>Valid Thru</p>
    <p>{{ expMonth }} / {{ expYear }}</p>
  </div>
</div>

</template>

<script>
export default {
  name: 'Card',
  props: {
    color: String,
    currency: String,
    balance: Number,
    lastFourDigits: Number,
    expMonth: Number,
    expYear: Number
  }
}
</script>

<style lang="scss" scoped>
div.card {
  border-radius: 25px;
  color: white;
  padding: 1.85vh 2vw;
  margin: 1.85vh 3.5vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1.balance {
    font-weight: normal;
    margin: 0;
    letter-spacing: 2px;
  }

  div.number {
    display: flex;
    justify-content: space-between;
    font-family: "Menlo", monospace;
    align-content: stretch;
    font-size: 20px;
  }
  div.stars {
    font-size: 18px;
  }

  div.expiry {
    width: 40;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    p {
      margin: 0;
      font-size: 14px;
    }

    p:first-child {
      text-transform: uppercase;
      font-size: 8px;
    }

  }
}
</style>
