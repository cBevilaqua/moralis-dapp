<template>
  <div>
    <h3>Purchase new Item</h3>
    <form @submit.prevent="buy">
      <input required type="number" placeholder="Value" v-model="value">
      <button type="submit">Buy</button>
    </form>
  </div>
</template>
<script src="./PurchaseForm.js" />
