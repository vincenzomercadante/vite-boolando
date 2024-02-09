<script>
export default {
  data() {
    return {
      clicked: false,
      icon: "fa-solid fa-heart",
    };
  },

  methods: {
    isClicked() {
      this.clicked = this.clicked ? false : true;
    },
  },
};
</script>

<template>
  <!-- div that contains the heart icon -->
  <div @click="isClicked()">
    <!-- icon -->
    <font-awesome-icon :icon="icon" :class="this.clicked ? 'clicked' : ''" />
  </div>
</template>

<style scoped lang="scss">
div {
  position: absolute;
  right: 0;
  top: 20px;
  height: 50px;
  aspect-ratio: 1;
  line-height: 50px;
  font-size: 1.2rem;
  text-align: center;
  background-color: white;

  i {
    color: black;
  }

  .clicked {
    color: red;
  }
}
</style>
