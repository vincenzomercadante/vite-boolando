<script></script>

<template>
  <!-- layover effect div -->
  <div class="layover">
    <!-- modal container -->
    <div class="modal">
      <!-- modal title -->
      <h3>Titolo Modal</h3>

      <!-- modal text -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio
        illum consequatur facere quibusdam, omnis exercitationem nulla placeat
        est qui aliquam dolorem repellat aperiam quas ipsum, laborum assumenda
        sapiente eveniet.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layover {
  position: absolute;
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

    p {
      margin-top: 10px;
    }
  }
}
</style>
