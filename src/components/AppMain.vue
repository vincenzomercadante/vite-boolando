<script>
import CardHearth from "./CardHearth.vue";
export default {
  data() {
    return {
      products: [
        {
          frontImage: "../assets/img/4.webp",
          hoverImage: "../assets/img/4b.webp",
          badge: [
            {
              text: "-50%",
              category: "red",
            },
          ],
          vendor: "Levi's",
          productName: "TEE UNISEX",
          price: "14,99$",
          originalPrice: "29,99$",
        },
        {
          frontImage: "../assets/img/5.webp",
          hoverImage: "../assets/img/5b.webp",
          badge: [],
          vendor: "Maya Deluxe",
          productName: "STRIPE BODICE",
          price: "99,99$",
          originalPrice: "",
        },
        {
          frontImage: "../assets/img/6.webp",
          hoverImage: "../assets/img/6b.webp",
          badge: [
            {
              text: "Sostenibilità",
              category: "green",
            },
          ],
          vendor: "Esprit",
          productName: "MAGLIONE - BLACK",
          price: "29,99$",
          originalPrice: "",
        },
        {
          frontImage: "../assets/img/1.webp",
          hoverImage: "../assets/img/1b.webp",
          badge: [
            {
              text: "-50%",
              category: "red",
            },
            {
              text: "Sostenibilità",
              category: "green",
            },
          ],
          vendor: "Levi's",
          productName: "RELAXED FIT TEE UNISEX",
          price: "14,99$",
          originalPrice: "29,99$",
        },
        {
          frontImage: "../assets/img/2.webp",
          hoverImage: "../assets/img/2b.webp",
          badge: [
            {
              text: "-30%",
              category: "red",
            },
          ],
          vendor: "Guess",
          productName: "ROSES TEE",
          price: "20,99$",
          originalPrice: "29,99$",
        },
        {
          frontImage: "../assets/img/3.webp",
          hoverImage: "../assets/img/3b.webp",
          badge: [
            {
              text: "-30%",
              category: "red",
            },
          ],
          vendor: "Come Zucchero Filato",
          productName: "VOGLIA DI COLORI PASTELLO",
          price: "129,99$",
          originalPrice: "184,99$",
        },
      ],
    };
  },

  components: {
    CardHearth,
  },

  methods: {
    generateURL(path) {
      return new URL(path, import.meta.url).href;
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="card" v-for="product in products">
        <div class="card-image">
          <CardHearth></CardHearth>
          <figure>
            <img :src="generateURL(product.frontImage)" alt="front-image" />
            <img :src="generateURL(product.hoverImage)" alt="back-image" />
          </figure>
          <div class="badge-container">
            <div
              v-for="ticket in product.badge"
              class="badge"
              :class="ticket.category"
            >
              {{ ticket.text }}
            </div>
          </div>
        </div>
        <div class="card-info">
          <div class="card-vendor">{{ product.vendor }}</div>
          <div class="card-name">{{ product.productName }}</div>
          <span class="price current">{{ product.price }}</span>
          <span class="price original">{{ product.originalPrice }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/mixins" as *;
main {
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    @include alignSection();
    gap: 20px;
    flex-wrap: wrap;
  }
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
        background-color: red;
      }

      .badge.green {
        background-color: green;
      }
    }

    .card-vendor {
      font-size: 0.9rem;
    }
    .card-name {
      font-size: 1.2rem;
    }

    .card-name,
    .price.current {
      font-weight: bold;
    }
    .price {
      font-size: 0.95rem;
    }
    .price.current {
      color: red;
    }
    .price.original {
      text-decoration: line-through;
      margin-left: 5px;
    }
  }
}
</style>
