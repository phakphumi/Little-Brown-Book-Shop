<template>
  <Modal
    title="Payment"
    :visible="isVisibleModal"
    @cancel="handleCancelModal"
  >
    <InsertCash v-if="paymentStep === 1" />
    <SuccessfulPayment v-else-if="paymentStep === 2" />
    <Receipt v-else-if="paymentStep === 3" />
    <template slot="footer">
      <Button
        key="back"
        @click="handleSecondaryBtnClick"
        v-if="paymentStep < 3"
      >
        <template v-if="paymentStep === 1">Cancel</template>
        <template v-else-if="paymentStep === 2">Close</template>
      </Button>
      <Button
        key="submit"
        type="primary"
        :disabled="isDisabledNextBtn"
        @click="handlePrimaryBtnClick"
      >
        <template v-if="paymentStep === 1">Pay</template>
        <template v-else-if="paymentStep === 2">View Receipt</template>
        <template v-else>Done</template>
      </Button>
    </template>
  </Modal>
</template>

<script>
import {
  Button,
  Modal,
} from 'ant-design-vue';
import { toNumber } from 'lodash';
import {
  mapGetters,
  mapMutations,
  mapState,
} from 'vuex';

import InsertCash from './InsertCash';
import Receipt from './Receipt';
import SuccessfulPayment from './SuccessfulPayment';

export default {
  name: 'PaymentModal',
  methods: {
    paymentDone: function () {
      this.clearCart();
      this.clearPayment();
    },
    ...mapMutations('payment', [
      'clearPayment',
      'nextPaymentStep',
    ]),
    ...mapMutations('cart', [
      'clearCart',
    ]),
  },
  computed: {
    handlePrimaryBtnClick: function () {
      switch (this.paymentStep) {
        case 3:
          return () => {
            this.clearCart();
            this.clearPayment();
          };

        default:
          return this.nextPaymentStep;
      }
    },
    handleSecondaryBtnClick: function () {
      switch (this.paymentStep) {
        case 2:
          return () => {
            this.clearCart();
            this.clearPayment();
          };
        default:
          return this.clearPayment;
      }
    },
    handleCancelModal: function () {
      switch (this.paymentStep) {
        case 2:
        case 3:
          return () => {
            this.clearCart();
            this.clearPayment();
          };
        default:
          return this.clearPayment;
      }
    },
    isDisabledNextBtn: function () {
      return this.receivedCash < toNumber(this.totalCost);
    },
    isVisibleModal: function () {
      return this.paymentStep !== 0;
    },
    ...mapGetters('cart', ['totalCost']),
    ...mapState('payment', [
      'receivedCash',
      'paymentStep',
    ]),
  },
  components: {
    Button,
    InsertCash,
    Modal,
    Receipt,
    SuccessfulPayment,
  },
};
</script>
