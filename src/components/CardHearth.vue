<script>
export default {
  data() {
    return {
      clicked: false,
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
  <div @click="isClicked()">
    <i class="fa-solid fa-heart" :class="clicked ? 'clicked' : ''"></i>
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
