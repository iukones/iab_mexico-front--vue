<template>
  <div class="header__top-section navbar-c">
    <div class="blur"></div>
    <div class="row">
      <div class="col-3">
        <router-link to="/" class="header-container__logo-section">
            <img class="header-logo-background d-none d-md-block" src="../assets/imgs/bg_logo_header.png" alt="">
            <img class="header-logo-background d-block d-md-none" src="../assets/imgs/bg_logo_header_mobil.png" alt="">
            <img class="header-logo d-none d-md-block" src="../assets/imgs/logo_iab.png" alt="">
            <img class="header-logo d-block d-md-none" src="../assets/imgs/logo_iab_mobil.png" alt="">
        </router-link>
      </div>
      <div class="col-7">
      </div>
      <div class="col-2">
        <a href="javascript:void(0)" @click="click">
            <img class="header-hamburger-menu" src="../assets/imgs/navegacion/Menu_hamburgesa.png" alt="">
        </a>
        <!-- <a v-if="displaySearchIcon" href="javascript:void(0)" @click="click">
            <img class="search-menu" src="../assets/imgs/navegacion/icon_buscar.png" alt="">
        </a> -->
        <Overlay :displayMenu="displayMenu" :click="click">
          <template slot="overlay-content">
                <a href="/"><span class="trait d-inline-block position-relative"></span>Home</a>
                <a href="/servicios-digitales"><span class="trait d-inline-block position-relative"></span>Servicios digitales</a>
                <a href="/agencias"><span class="trait d-inline-block position-relative"></span>Agencias</a>
                <a href="/formar-parte"><span class="trait d-inline-block position-relative"></span>Forma parte</a>
          </template>
        </Overlay>
      </div>
    </div>
  </div>

</template>


<script>
import Overlay from "@/components/Overlay";
export default {
  components: {
    Overlay
  },
  data() {
    return {
      displayMenu: "none"
    };
  },
  computed: {
    displaySearchIcon() {
      return this.$route.name === 'formar-parte' || this.$route.name === 'agencias-descripcion'
    }
  },
  methods: {
    click() {
      if (this.displayMenu === "none") {
        this.displayMenu = "block";
        document.body.style.overflow = "hidden";
      } else {
        this.displayMenu = "none";
        document.body.style.overflow = "auto";
      }
    }
  }
};
</script>

<style lang="scss">
.navbar-c {
  @import url("https://fonts.googleapis.com/css?family=Montserrat:100");

  font-family: "Montserrat", sans-serif;
  .header__top-section {
    margin-bottom: -48px;
  }

  .header-container__logo-section {
    .header-logo-background {
      display: block;
      position: relative;
      bottom: 2px;
      z-index: 1;
    }
    .header-logo {
      position: absolute;
      z-index: 2;
      top: 4px;
      left: 27px;
      @media (max-width: 575.98px) {
        left: 20px;
      }
    }
  }

  .header-search-icon {
    margin-top: 17px;
  }

  .header-hamburger-menu {
    float: right;
    margin-right: 18px;
    margin-top: 18px;
    width: 33px;
  }

  .search-menu {
    float: right;
    margin-top: 1rem;
    margin-right: 2.5rem;
    width: 33px;
  }

  .trait {
    width: 107px;
    height: 17px;
    background: linear-gradient(to right, #682fbc, #cf3fd4);
    bottom: 8px;
    margin-right: 25px;
    @media (max-width: 450px) {
      width: 17px;
    }
  }

  /* OVERLAY */
  .overlay-content a {
    padding: 8px;
    text-decoration: none;
    font-size: 70px;
    color: #4a4a4a;
    display: block;
    transition: 0.3s;
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #686767;
  }

  @media (max-width: 450px) {
    .overlay a {
      font-size: 20px;
    }
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
}
</style>

