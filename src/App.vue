<script>
// import axios package
import axios from "axios";

// import store file for the Global State
import { store } from "./db/store";

// import app components
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppModal from "./components/AppModal.vue";

export default {
  data() {
    return {
      store,
      products: [],
      headerItems: [],
      footerItems: [],
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppModal,
  },

  created() {
    // get products array from API
    axios.get(`${store.apiUri}products`).then((res) => {
      this.products = res.data;
    });

    // get headerItems array from API
    axios.get(`${store.apiUri}headerItems`).then((res) => {
      this.headerItems = res.data;
    });

    //get footerItems array from API
    axios.get(`${store.apiUri}footerItems`).then((res) => {
      this.footerItems = res.data;
    });
  },
};
</script>

<template>
  <!-- header -->
  <AppHeader
    :headerLinks="headerItems.headerLinkTexts"
    :headerIcons="headerItems.headerLinkIcons"
    :logoPath="headerItems.logo"
  ></AppHeader>
  <!-- modal -->
  <AppModal v-if="store.modal.show" />
  <!-- main -->
  <AppMain :products="products"></AppMain>
  <!-- footer -->
  <AppFooter
    :footerLinks="footerItems.footerLinksText"
    :footerIcons="footerItems.footerLinkIcons"
  ></AppFooter>
</template>

<style lang="scss">
@use "./assets/styles/general.scss";
</style>
