<script>
import { store } from "../db/store";

import ProductCard from "./ProductCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    products: Array,
  },

  components: {
    ProductCard,
  },

  methods: {
    handleCardClick(productIndex) {
      store.modal.show = true;
      store.modal.product = this.products[productIndex];
    },
  },
};
</script>

<template>
  <main>
    <!-- container -->
    <div class="container">
      <!-- card for every product of products array -->
      <ProductCard
        v-for="(product, index) in products"
        :card="product"
        :index="index"
        @card-clicked="handleCardClick"
      ></ProductCard>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/mixins" as *;
@use "../assets/styles/partials/variables" as *;
main {
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    @include alignSection();
    gap: $card-gap;
    flex-wrap: wrap;
  }
}
</style>
