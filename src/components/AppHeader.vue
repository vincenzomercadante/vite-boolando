<script>
export default {
  props: {
    headerLinks: Array,
    headerIcons: Array,
    logoPath: String,
  },

  methods: {
    generateUrl(path) {
      return new URL(path, import.meta.url).href;
    },
  },
};
</script>

<template>
  <header>
    <!-- container header links & logo -->
    <div class="container">
      <!-- category links -->
      <ul>
        <li v-for="link in headerLinks">
          <a :href="link.href" :class="link.active ? 'active' : ''">{{
            link.text
          }}</a>
        </li>
      </ul>
      <!-- site logo -->
      <figure>
        <img :src="generateUrl(logoPath)" alt="boolando logo" />
      </figure>
      <!-- header icon list -->
      <ul>
        <li v-for="icon in headerIcons">
          <a :href="icon.href"><font-awesome-icon :icon="icon.img" /></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;
header {
  display: flex;
  justify-content: center;
  background-color: $header-background;
  box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.41);

  .container {
    @include alignSection();
    padding: $section-padding;
    color: white;
    font-weight: bold;
  }
  figure {
    width: $logo-width;
    align-self: center;
  }
}
</style>
