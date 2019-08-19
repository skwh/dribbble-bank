<template>

<main class="page">
  <div class="top-sheet">
    <page-header>
      <template v-slot:left>
        <h1>Balance</h1>
      </template>
      <template v-slot:right>
        <h1>Profile</h1>
      </template>
    </page-header>
  </div>
  <card v-bind:color="card.color"
        v-bind:currency="card.currency"
        v-bind:balance="card.balance"
        v-bind:lastFourDigits="card.lastFourDigits"
        v-bind:expMonth="card.expMonth"
        v-bind:expYear="card.expYear"></card>
  <bottom-sheet>
    <h1 class="sheet-title">Transaction List</h1>
    <div class="filters">
      <button v-for="(op, idx) in options"
              v-bind:class="{ selected: op.selected }"
              v-bind:key="idx">
        {{ op.title }}
      </button>
    </div>
    <div class="transaction-list">
      <list-item v-for="(transaction, idx) in transactions"
                 v-bind:icon="transaction.status"
                 v-bind:headerText="transaction.timestamp"
                 v-bind:mainText="transaction.summary"
                 v-bind:spotlightText="transaction.netAmount"
                 v-bind:color="transaction.color"
                 v-bind:key="idx"></list-item>
    </div>
  </bottom-sheet>
</main>

</template>

<script>
import PageHeader from '../components/Header'
import BottomSheet from '../components/BottomSheet'
import ListItem from '../components/ListItem'
import Card from '../components/Card'

const COLOR_RED = '#FF3258'
const COLOR_BLUE = '#2A3990'

const filters = [
  { title: 'All', selected: true },
  { title: 'Expenses', selected: false },
  { title: 'Deposits', selected: false }
]

const transactionList = [
  { status: 'arrow_downward', timestamp: 'Today 12:45', summary: 'Yandex Taxi', netAmount: '- ₽ 180', color: COLOR_RED },
  { status: 'arrow_upward', timestamp: '12.08.2019 12:45', summary: 'Transfer', netAmount: '+ € 3000', color: COLOR_BLUE },
  { status: 'arrow_downward', timestamp: '10.08.2019 23:18', summary: 'Restaurant "Dubai"', netAmount: '- ₽ 12000', color: COLOR_RED },
  { status: 'arrow_downward', timestamp: '15.07.2019 14:00', summary: 'Aeroflot', netAmount: '- ₽ 25000', color: COLOR_RED }
]

const cardDetails = {
  balance: 395000,
  currency: '₽',
  lastFourDigits: 3456,
  expMonth: 12,
  expYear: 23,
  color: '#6374ED'
}

export default {
  name: 'BalancePage',
  data: () => {
    return {
      options: filters,
      transactions: transactionList,
      card: cardDetails
    }
  },
  components: {
    PageHeader,
    BottomSheet,
    ListItem,
    Card
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

h1.sheet-title {
  color: $blue;
  font-size: 22px;
  margin-top: 3vh;
}

div.top-sheet {
  h1 {
    font-weight: 600;
    font-size: 22px;
  }
}

div.filters {
  display: flex;
  justify-content: left;
  margin: 1.2em 0;

  button {
    background-color: transparent;
    border: none;
    padding: 0.55vh 2vw;
    color: $dark-grey;
    border-radius: 5px;
    font-size: 14px;
    margin: 0 0.45vw;
    font-family: "Open Sans", sans-serif;

    &.selected {
      color: white;
      background-color: $blue;
    }
  }
}
</style>
