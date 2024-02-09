<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

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
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain :products="products"></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use "./assets/styles/general.scss";
</style>
