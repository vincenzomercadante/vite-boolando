<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: "fa-brands fa-twitter",
          href: "#",
        },
        {
          icon: "fa-brands fa-facebook-f",
          href: "#",
        },
        {
          icon: "fa-brands fa-instagram",
          href: "#",
        },
        {
          icon: "fa-brands fa-pinterest-p",
          href: "#",
        },
        {
          icon: "fa-brands fa-youtube",
          href: "#",
        },
      ],
      infos: [
        {
          text: "Informazione legali",
          href: "#",
        },
        {
          text: "Informativa sulla privacy",
          href: "#",
        },
        {
          text: "Diretto di recesso",
          href: "#",
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-info">
        <h4>Boolando S.r.l</h4>
        <p>
          <a v-for="info in infos" :href="info.href">{{ info.text }}</a>
        </p>
      </div>
      <div class="footer-icon">
        <p>Trovaci anche su</p>
        <a v-for="social in socials" :href="social.href"
          ><i :class="social.icon"></i
        ></a>
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
