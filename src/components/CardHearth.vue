<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },

  methods: {
    isClicked() {
      this.isClicked = this.isClicked ? false : true;
    },
  },
};
</script>

<template>
  <div @click="isClicked()" :class="isClicked ? 'clicked' : ''">
    <i class="fa-solid fa-heart"></i>
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
}

.clicked i {
  color: red;
}
</style>
