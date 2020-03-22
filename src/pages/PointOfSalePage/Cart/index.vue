<template>
  <div class="cart">
    <ItemList class="itemList" />
    <TotalCost class="totalCost" />
  </div>
</template>

<script>
import ItemList from './ItemList';
import TotalCost from './TotalCost';

export default {
  name: 'Cart',
  components: {
    ItemList,
    TotalCost,
  },
};
</script>

<style scoped lang="scss">
  .cart {
    height: inherit;
    background-color: #FFFFFF;
    border: 2px solid #00410F;
    margin: 8px;
    padding: 8px;

    .itemList {
      height: 70%;
      overflow: scroll;
    }

    .totalCost {
      height: 20%;
      overflow: scroll;
    }
  }
</style>
