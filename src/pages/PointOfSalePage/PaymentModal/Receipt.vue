<template>
  <div>
    <ItemList is-form-disabled />
    <TotalCost
      is-change-enabled
      class="row-total-cost"
    />
  </div>
</template>

<script>
import ItemList from '@/pages/PointOfSalePage/Cart/ItemList';
import TotalCost from '@/pages/PointOfSalePage/Cart/TotalCost';

export default {
  name: 'Receipt',
  components: {
    ItemList,
    TotalCost,
  },
};
</script>

<style scoped>
  .row-total-cost {
    margin-top: 16px;
  }
</style>
