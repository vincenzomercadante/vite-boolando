<script>
export default {
  data() {
    return {
      links: [
        {
          text: "Donna",
          href: "#",
          active: false,
        },
        {
          text: "Uomo",
          href: "#",
          active: false,
        },
        {
          text: "Bambino",
          href: "#",
          active: false,
        },
      ],
      icons: [
        {
          img: "fa-regular fa-user",
          href: "#",
        },
        {
          img: "fa-regular fa-heart",
          href: "#",
        },
        {
          img: "fa-solid fa-bag-shopping",
          href: "#",
        },
      ],

      logo: "../assets/img/boolean-logo.png",
    };
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
        <li v-for="link in links">
          <a :href="link.href" :class="link.active ? 'active' : ''">{{
            link.text
          }}</a>
        </li>
      </ul>
      <!-- site logo -->
      <figure>
        <img :src="generateUrl(logo)" alt="boolando logo" />
      </figure>
      <!-- header icon list -->
      <ul>
        <li v-for="icon in icons">
          <a :href="icon.href"><i :class="icon.img"></i></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;
header {
  display: flex;
  justify-content: center;
  background-color: $header-background;
  box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.41);

  .container {
    padding: $header-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
  figure {
    width: $logo-width;
  }
}
</style>
