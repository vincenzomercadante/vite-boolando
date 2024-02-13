<script>
import { store } from "../db/store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    closeModal() {
      this.store.modal.show = false;
    },
  },
};
</script>

<template>
  <!-- layover effect div -->
  <div class="layover">
    <!-- modal container -->
    <div class="modal">
      <!-- icon close the menu -->
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        class="close-modal"
        @click="closeModal()"
      />
      <!-- modal title -->
      <h3>{{ store.modal.product.productName }}</h3>

      <!-- modal text -->
      <div class="modal-text">
        <!-- product vendor -->
        <h4>{{ store.modal.product.vendor }}</h4>
        <!-- product current price -->
        <span class="modal-price">{{ store.modal.product.price }}</span>
        <!-- product original price -->
        <span class="modal-discount">{{
          store.modal.product.originalPrice
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layover {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #333, $alpha: 0.9);
  z-index: 1;

  .modal {
    padding: 1rem;
    width: 80%;
    max-width: 920px;
    background-color: white;
    position: relative;

    .modal-text {
      margin-top: 10px;

      * {
        margin-bottom: 10px;
        margin-right: 10px;
      }

      .modal-price {
        color: red;
        font-weight: bold;
      }

      .modal-discount {
        text-decoration: line-through;
      }
    }

    .close-modal {
      position: absolute;
      top: 10px;
      right: 10px;
      font-weight: bold;
      font-size: 1.3rem;
      color: rgb(182, 26, 26);
      cursor: pointer;
    }
  }
}
</style>
