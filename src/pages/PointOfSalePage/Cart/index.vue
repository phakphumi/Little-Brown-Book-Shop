<template>
  <div class="cart">
    <ItemList class="itemList" />
    <div class="footer">
      <TotalCost />
      <ButtonGroup />
    </div>
  </div>
</template>

<script>
import ButtonGroup from './ButtonGroup';
import ItemList from './ItemList';
import TotalCost from './TotalCost';

export default {
  name: 'Cart',
  components: {
    ButtonGroup,
    ItemList,
    TotalCost,
  },
};
</script>

<style scoped lang="scss">
  .cart {
    height: inherit;
    background-color: #FFFFFF;
    border: 2px solid $color-green2;
    margin: 8px;
    padding: 8px;

    .itemList {
      height: 70%;
      overflow: scroll;
    }


    .footer {
      height: 30%;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
</style>
