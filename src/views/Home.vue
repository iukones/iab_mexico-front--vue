<template>
  <div class="home">
    <Header :hasBottomSection="true" :anchorTag="'#infography'">
        <template slot="main-text">
            <div class="d-flex justify-content-center  home-main-text">
                <p class="mb-3 mb-md-5 mt-3">Directorio <span>de Agencias</span></p>
            </div>
        </template>
        <template slot="secondary-text">
            <p>Este directorio contiene a las Agencias que ofrecen Servicios Digitales en México.</p>
            <p class="third_text">Selecciona la búsqueda que mejor resuelva tu consulta.</p>
        </template>
        <template slot="bottom-section">
            <div class="col-12 col-sm-12 col-md">
              <router-link to="/agencias" class="header-button">
                <p class="header-button">Buscar por Agencia</p>
              </router-link>
            </div>
              <div class="col-12 col-sm-12 col-md-1">
                  <p class="header__bottom-or">o</p>
              </div>
              <div class="col-12 col-sm-12 col-md">
                  <router-link to="/servicios-digitales" class="header-button">
                    <p class="header-button">Servicios Digitales</p>
                  </router-link>
              </div>
        </template>
    </Header>
    <div class="supporting-one">
        <TitlePurple highlight="Objetivo"/>
        <div class="supporting-one__main">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6">
                    <img class="supporting-one__main-lines-detail" src="../assets/imgs/objetivo_home/bg_lines_2x.png" alt="">
                    <div class="supporting-one__text-area">
                        <p>La Mesa de Agencias y el Comité de Lineamientos y Mejores Prácticas de IAB México generaron la iniciativa
                            llamada <span class="font-weight-bold">Directorio de Servicios Digitales</span>, el cual tiene el objetivo de dar visibilidad a los
                            servicios digitales de <span class="font-weight-bold">Agencias Socias de IAB México</span> con los Anunciantes, a través de un directorio
                            impreso y digital, donde se <span class="font-weight-bold">definen y verifican los servicios</span> que ofrecen cada una de las agencias
                            participantes.
                        </p>
                        <router-link class="purple-button mx-1 mt-5 mt-md-0 mx-md-5" to="/servicios-digitales">Conocer los servicios digitales</router-link>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                    <img src="../assets/imgs/objetivo_home/img_objetivo.jpg" class="supporting-one__main-image" alt="">
                </div>
            </div>
        </div>
    </div>

    <div id="infography" class="supporting-two">
      <TitlePurple text="Metodología de" highlight="Validación"/>
        <div class="supporting-two__phrase-section">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="supporting-two__phrase-detail-container">
                        <div class="supporting-two__phrase-detail">
                        </div>
                        <p>Las Agencias que se encuentran en este directorio completaron un riguroso proceso de validación
                            de Servicios Digitales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="supporting-two__main-section">
            <div v-if="!this.isMobile" class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <img src="../assets/imgs/metodologia/img_metodolagia.png" class="supporting-two__main-desktop-image" alt="">
                </div>
            </div>
            <div class="supporting-two__explanation-section">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-3">
                        <div class="supporting-two__explanation-text-section">
                            <img v-if="this.isMobile" src="../assets/imgs/metodologia/mobil/img_preregistro.png" class="supporting-two__main-mobile-image" alt="">
                            <p class="--special-red step-title">PRE-REGISTRO</p>
                            <p class="step-paragraph">La agencia completa un pre-registro declarando su interés en participar en el Directorio. </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-3">
                        <div class="supporting-two__explanation-text-section">
                            <img v-if="this.isMobile" src="../assets/imgs/metodologia/mobil/img_formulario.png" class="supporting-two__main-mobile-image" alt="">
                            <p class="--special-purple step-title">FORMULARIO</p>
                            <p class="step-paragraph">Recibe un formulario donde reporta los servicios digitales que ofrece presentando los documentos
                                que soportan la información. Pueden ser cartas membretadas, facturas y/o contratos de los
                                clientes que avalan dichos servicios.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-3">
                        <div class="supporting-two__explanation-text-section">
                            <img v-if="this.isMobile" src="../assets/imgs/metodologia/mobil/img_validacion.png" class="supporting-two__main-mobile-image" alt="">
                            <p class="--special-red step-title">VALIDACIÓN</p>
                            <p class="step-paragraph">La firma de consultoría valida telefónicamente que al menos DOS clientes hayan recibido cada
                                servicio reportado en los últimos dos años. Es posible que un cliente confirme 1 o más servicios
                                digitales.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-3">
                        <div class="supporting-two__explanation-text-section">
                            <img v-if="this.isMobile" src="../assets/imgs/metodologia/mobil/img_aprobacion.png" class="supporting-two__main-mobile-image" alt="">
                            <p class="--special-purple step-title">APROBACIÓN</p>
                            <p class="step-paragraph">Una vez concluida la fase de validación, la Agencia te incorpora al Directorio de Agencias con Servicio Digitales
                              por los próximos dos años.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AgenceBlock :buttonAgences="true"/>
    <Footer/>
  </div> 
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TitlePurple from "@/components/TitlePurple";
import AgenceBlock from "@/components/AgenceBlock";
import data from "@/data"

export default {
  components: {
    Header,
    Footer,
    TitlePurple,
    AgenceBlock
  },
  firebase: {
    test_array: data.db.ref('one'),
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    isMobile () {
      return this.windowWidth <= 765
    }
  }
};
</script>

<style lang="scss">
.home {
  header {
    background-image: url("../assets/imgs/headers/header_home.jpg");
    .home-main-text {
      p {
        line-height: 0.7;
        max-width: 80vw;
        @media (max-width: 575.98px) {
          font-size: 50px !important;
          font-family: "Montserrat", sans-serif;
          font-weight: 500 !important;
        }
        @media (min-width: 575.98px) and (max-width: 991.98px) {
          font-size: 100px !important;
          font-family: "Montserrat", sans-serif;
          font-weight: 500 !important;
        }
        span {
          font-size: 110px;
          @media (max-width: 575.98px) {
            font-size: 40px;
          }
          @media (min-width: 575.98px) and (max-width: 991.98px) {
            font-size: 75px;
          }
        }
      }
    }
    & .header-secondary-text p:nth-child(1) {
      @media (max-width: 575.98px) {
        margin-bottom: 1rem;
      }
      @media (min-width: 575.98px) and (max-width: 991.98px) {
        font-size: 18px;
        margin-bottom: 0.8rem;
      }
    }

    & .header-secondary-text p:nth-child(2) {
      @import url("https://fonts.googleapis.com/css?family=Montserrat:100");
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-weight: 100;
      color: #fff;
      @media (max-width: 575.98px) {
        font-size: 12px !important;
      }
      @media (min-width: 575.98px) and (max-width: 991.98px) {
        font-size: 17px;
        margin-bottom: 3rem;
      }
    }

    & .header-button {
      padding: 5px 0px;
      width: 100%;
      @media (max-width: 575.98px) {
        width: 311px;
        margin: auto;
      }
    }
    & .header-button p {
      margin: 0;
    }
    & .header__bottom-or {
      @media (max-width: 575.98px) {
        margin-bottom: 0;
      }
    }
    & .header-navigation-arrow {
      @media (max-width: 575.98px) {
        top: 456px;
      }
    }
  }

  /* SUPPORTING ONE */

  .supporting-one {
    display: block;
    margin-bottom: 100px;
    &__title {
      width: 390px;
      height: 180px;
      box-sizing: border-box;
      margin-left: 60px;
      border-bottom: 6px solid #ff2d38;
      display: block;
    }
  }

  .supporting-one__title p {
    width: 320px;
    margin: 0 auto;
    display: block;
    font-size: 62px;
    color: white;
    background: linear-gradient(to right, #682fbc, #cf3fd4);
    transform: translate(0, -50%);
    padding: 4px 10px;
    position: absolute;
    top: 90px;
    right: 0;
    box-sizing: border-box;
    text-align: center;
  }

  .supporting-one__main {
    position: relative;
    bottom: 62px;
    width: 100%;
    background-image: url("../assets/imgs/objetivo_home/bg_ondas@2x.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .supporting-one__main .row {
    position: relative;
    top: 80px;
    max-width: 1160px;
    margin: 0 auto;
  }

  .supporting-one__main .supporting-one__text-area {
    font-size: 18px;
    line-height: 1.6;
    max-width: 571px;
    color: rgb(74, 74, 74);
    padding: 4em 3rem 2rem 3rem;
    background-color: rgba(92, 52, 132, 0.11);
    @media (max-width: 575.98px) {
      padding: 2rem 0.6rem 0.5rem;
      height: 508px;
    }
  }

  .supporting-one__main .supporting-one__text-area p:nth-child(2) {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    display: block;
    margin: 0 auto;
    padding: 12px;
    font-weight: bold;
    border-radius: 30px;
    width: 348px;
    margin-top: 28px;
    background: linear-gradient(to right, #682fbc, #cf3fd4);
  }

  .supporting-one__main-image {
    position: relative;
    right: 34px;
    top: 35px;
    width: 100%;
    margin-bottom: 35px;
    box-shadow: 18px 40px rgb(79, 66, 144);
  }

  .supporting-one__main-lines-detail {
    position: absolute;
    width: 412px;
    left: -10px;
    top: 110px;
  }

  /* SUPPORTING TWO */

  .supporting-two {
    display: block;
  }

  .supporting-two__phrase-detail-container {
    display: block;
    margin: 0 auto;
    max-width: 1051px;
  }

  .supporting-two__phrase-section p {
    font-size: 22px;
    display: inline-block;
    max-width: 750px;
    margin-top: 30px;
    color: rgb(127, 132, 140);
    margin-left: 6px;
  }

  .supporting-two__phrase-detail {
    display: inline-block;
    width: 60px;
    border-bottom: 6px solid rgb(112, 38, 164);
    position: relative;
    bottom: 33px;
  }

  .supporting-two__main-section {
    width: 100%;
    background-image: url("../assets/imgs/metodologia/bg_metodoligia.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .supporting-two__main-desktop-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 1160px;
  }

  .supporting-two__main-mobile-image {
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 250px;
    margin-bottom: 20px;
  }

  .supporting-two__explanation-section {
    max-width: 1160px;
    margin: 0 auto;
  }

  .supporting-two__explanation-text-section {
    padding: 0 42px;
  }

  .supporting-two__explanation-text-section {
    .step-title {
    font-weight: bold;
    text-align: left;
    font-size: 24px;
    }
    .step-paragraph {
    text-align: left;
    font-size: 12px;
    }
  }
}
</style>


