<template>
  <div class="cart">
    <ItemList class="itemList" />
  </div>
</template>

<script>
import ItemList from './ItemList';

export default {
  name: 'Cart',
  components: {
    ItemList,
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
      height: 60%;
    }
  }
</style>
