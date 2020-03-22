<template>
  <div>
    <Input
      type="number"
      placeholder="Please fill customer cash."
      v-model.number="receivedCash"
    />
    <p v-if="isWarn" class="warning-text">
      The received cash should greater than total cost.
    </p>
  </div>
</template>

<script>
import { Input } from 'ant-design-vue';
import { toNumber } from 'lodash';
import { mapGetters } from 'vuex';

export default {
  name: 'InsertCash',
  data: function () {
    return {
      receivedCash: 0,
      isWarn: false,
    };
  },
  watch: {
    receivedCash: function () {
      if (this.receivedCash === '') {
        this.receivedCash = 0;
      }
      if (this.receivedCash < toNumber(this.totalCost)) {
        this.isWarn = true;
      } else {
        this.isWarn = false;
      }

      this.$store.commit('payment/receivedCashFromCustomer', this.receivedCash);
    },
  },
  computed: {
    ...mapGetters('cart', ['totalCost']),
  },
  components: { Input },
};
</script>

<style scoped>
  .warning-text {
    color: red;
  }
</style>
