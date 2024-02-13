<script>
import CardHeart from "./CardHeart.vue";
export default {
  props: {
    card: Object,
  },
  methods: {
    generateURL(path) {
      return new URL(path, import.meta.url).href;
    },
  },

  components: {
    CardHeart,
  },

  emits: ["card-clicked"],
};
</script>

<template>
  <!-- card container with click-->
  <div @click="$emit('card-clicked')" class="card">
    <!-- product image section -->
    <div class="card-image">
      <!-- div with heart icon -->
      <CardHeart></CardHeart>
      <!-- images that change with the hover event -->
      <figure>
        <img :src="generateURL(card.frontImage)" alt="front-image" />
        <img :src="generateURL(card.hoverImage)" alt="back-image" />
      </figure>
      <!-- badge with additional info of the product -->
      <div class="badge-container">
        <!-- badge generator -->
        <div
          v-for="ticket in card.badge"
          class="badge"
          :class="ticket.category"
        >
          {{ ticket.text }}
        </div>
      </div>
    </div>
    <!-- product info section -->
    <div class="card-info">
      <!-- product's vendor -->
      <div class="card-vendor">{{ card.vendor }}</div>
      <!-- product's name -->
      <div class="card-name">{{ card.productName }}</div>
      <!-- product's current price -->
      <span class="price current">{{ card.price }}</span>
      <!-- product's original price if it does exist -->
      <span class="price original">{{ card.originalPrice }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/mixins" as *;
@use "../assets/styles/partials/variables" as *;

.card {
  width: calc(100% / 3 - 20px);
  display: flex;
  flex-direction: column;

  .card-image {
    position: relative;

    img:last-child {
      display: none;
    }

    &:hover img:last-child {
      display: block;
    }
    &:hover img:first-child {
      display: none;
    }

    .badge-container {
      position: absolute;
      left: 0;
      bottom: 50px;
      display: flex;
      gap: 5px;
    }

    .badge {
      padding: 1rem;
      color: white;
      font-weight: bold;
    }

    .badge.red {
      background-color: $current-price-color;
    }

    .badge.green {
      background-color: green;
    }
  }

  .card-vendor {
    font-size: $card-vendor-size;
  }
  .card-name {
    font-size: $card-name-size;
  }

  .card-name,
  .price.current {
    font-weight: bold;
  }
  .price {
    font-size: 0.95rem;
  }
  .price.current {
    color: $current-price-color;
  }
  .price.original {
    text-decoration: line-through;
    margin-left: 5px;
  }
}
</style>
