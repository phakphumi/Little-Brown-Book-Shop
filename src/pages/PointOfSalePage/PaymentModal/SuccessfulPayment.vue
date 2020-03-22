<template>
  <div class="successful-payment">
    <div class="success-icon">
      <Icon type="check-square" />
    </div>
    <div class="success-message">
      Successful Payment
    </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue';

export default {
  name: 'SuccessfulPayment',
  components: { Icon },
};
</script>

<style scoped lang="scss">
  .successful-payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .success-icon {
      font-size: 60px;
      color: $color-forest-green;
    }
  }
</style>
