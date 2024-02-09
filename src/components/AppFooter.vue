<script>
export default {
  props: {
    footerLinks: Array,
    footerIcons: Array,
  },
};
</script>

<template>
  <footer>
    <!-- container -->
    <div class="container">
      <!-- footer left -->
      <div class="footer-info">
        <h4>Boolando S.r.l</h4>
        <p>
          <a v-for="link in footerLinks" :href="link.href">{{ link.text }}</a>
        </p>
      </div>
      <!-- footer right -->
      <div class="footer-icon">
        <p>Trovaci anche su</p>
        <a v-for="icon in footerIcons" :href="icon.href"
          ><font-awesome-icon :icon="icon.img" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

footer {
  @include centerSection();
  background-color: $footer-bg;

  .container {
    @include alignSection();
    padding: $section-padding;
    color: white;
  }

  a {
    margin-right: $footer-icon-distance;
  }

  .footer-icon {
    text-align: center;
  }
  .footer-icon p {
    margin-bottom: 10px;
  }
  .footer-icon a {
    background-color: white;
    color: black;
    padding: 5px;
  }
}

h4 {
  font-size: 1.2rem;
  color: white;
}
</style>
