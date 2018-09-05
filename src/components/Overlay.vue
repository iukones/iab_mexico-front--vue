<template>
  <div class="overlay-c">
    <div id="myNav" class="overlay" :style="`display: ${displayMenu}`">
      <div class="corner-overlay corner-overlay--top position-relative">
      </div>
          <!-- Button to close the overlay navigation -->
      <a href="javascript:void(0)" class="closebtn" @click="click">
          <img class="header-hamburger-menu-close" src="../assets/imgs/navegacion/ico_cerrar.png" alt="">
      </a>
          <!-- Overlay content -->
      <div class="overlay-content d-flex">
        <!-- <div class="align-self-center"> -->
          <slot name="overlay-content"></slot>
        <!-- </div> -->
      </div>
      <div class="corner-overlay corner-overlay--bottom position-relative">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    displayMenu: {
      type: String,
      required: true
    },
    click: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay-c {
  .overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.95);
    overflow-x: hidden;
    transition: 0.5s;
  }
  .overlay-content {
    // position: relative;
    // top: -30%;
    width: 100%;
    left: 5vw;
    // margin-top: 30px;
    margin-top: -170px;
    flex-direction: column;
    @media (max-width: 575px) {
      // top: -40%;
    }
  }
  .corner-overlay {
    &--top {
      left: 0;
    }
    &--bottom {
      left: 70vw;
    }
    background-image: url("../assets/imgs/benefecios/bg_lines.png");
    width: 30vw;
    height: 50vh;
  }
  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 25px;
  }
}
</style>


