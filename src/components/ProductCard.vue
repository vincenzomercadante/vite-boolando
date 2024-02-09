<script>
import CardHearth from "./CardHearth.vue";
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
    CardHearth,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <CardHearth></CardHearth>
      <figure>
        <img :src="generateURL(card.frontImage)" alt="front-image" />
        <img :src="generateURL(card.hoverImage)" alt="back-image" />
      </figure>
      <div class="badge-container">
        <div
          v-for="ticket in card.badge"
          class="badge"
          :class="ticket.category"
        >
          {{ ticket.text }}
        </div>
      </div>
    </div>
    <div class="card-info">
      <div class="card-vendor">{{ card.vendor }}</div>
      <div class="card-name">{{ card.productName }}</div>
      <span class="price current">{{ card.price }}</span>
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
