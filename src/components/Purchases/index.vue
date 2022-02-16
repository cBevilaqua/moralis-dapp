<template>
  <div>
    <PurchaseForm @save="onPurchase" />

    <hr>

    <h3>My Purchases</h3>
    <table>
      <thead>
        <th>Created</th>
        <th>ID</th>
        <th>Value</th>
      </thead>
      <tbody>
        <tr v-for="purchase in purchases" :key="purchase.id">
          <td>{{ purchase.createdAt | formatDate }}</td>
          <td>{{ purchase.id }}</td>
          <td>{{ purchase.get("value") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="./Purchases.js" />
