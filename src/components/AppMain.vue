<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: {
    products: Array,
  },

  components: {
    ProductCard,
  },
};
</script>

<template>
  <main>
    <!-- container -->
    <div class="container">
      <!-- card for every product of products array -->
      <ProductCard v-for="product in products" :card="product"></ProductCard>
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
