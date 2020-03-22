<template>
  <Card
    @click="addToCart"
    hoverable
    class="card"
  >
    <div
      slot="cover"
      class="coverImgContainer"
    >
      <img
        :alt="title"
        :src="coverUrl"
        class="coverImg"
      />
    </div>
    <div class="title">{{title}}</div>
    <template slot="actions">
      <div class="priceBar">
        <Icon type="shopping-cart" />
        {{ price }} ฿
      </div>
    </template>
  </Card>
</template>

<script>
import {
  Card,
  Icon,
} from 'ant-design-vue';

export default {
  name: 'Book',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    coverUrl: {
      type: String,
      required: true,
      default: '',
    },
    isbn: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('cart/addToCart', {
        isbn: this.isbn,
        title: this.title,
        price: this.price,
      });
    },
  },
  components: {
    Card,
    Icon,
  },
};
</script>

<style lang="scss">
  .card {
    .ant-card-body {
      padding: 12px;
    }

    .ant-card-actions {
      background-color: $color-green2;
    }
  }
</style>

<style scoped lang="scss">
  .card {
    margin: 8px;

    .coverImgContainer {
      height: 260px;

      @include tablet-view {
        height: 170px;
      }
      @include mobile-view {
        height: 280px;
      }

      .coverImg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 16px;
      font-weight: bold;
      height: 48px;
    }

    .priceBar {
      font-weight: bold;
      color: #FFFFFF;
    }
  }
</style>
