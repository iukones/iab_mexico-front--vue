<template>
  <div class="agencia-descripcion">
      <!-- <pre> {{agency}}</pre> -->
    <Header />
    <div class="agency-info-section">
        <div class="agency-info-section-container container-fluid mt-5">
            <div class="icon-back-container">
                <img src="../assets/imgs/navegacion/ico_regreso.png" alt="Regresar" @click="back" />
                <img src="../assets/imgs/navegacion/ico_regreso_active.png" alt="Regresar" class="active" @click="back" />
            </div>
            <div class="row" >
                <div class="col-12 col-md-4 basic--info">
                    <div class="logo-square card-center-logo">
                        <img :src="agency.imagen" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="row basic--info" style="min-height: 125px;">
                        <div class="col-12 col-md-10">
                            <div class="agency-info-agency-title">
                                <p>{{ agency.name }}</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-2">
                            <div class="agency-info-agency-feature">
                                <div class="agency-info-agency-feature-title">
                                    <p>Servicios Digitales</p>
                                </div>
                                <div class="agency-info-agency-feature-number">
                                    <p>{{ skill_count }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row d-none d-md-flex">
                            <div class="col-12 col-md-6">
                                <div class="row agency-info-agency-icons">
                                    <div class="row pt-3 position-relative">
                                        <div v-for="(exists, skill) in agency.skills" v-tooltip="{content: skills[skill].text, trigger: 'hover click'}">
                                            <!-- <div class="popover d-flex flex-column align-items-center">
                                                <p>{{ skill }}</p>
                                            </div>  -->
                                            <div class="col-12 col-md" v-if="exists">
                                                <div class="agency-info-agency-icons-icon-node">
                                                    <img :src="skills[skill].img" :alt="'Ícono ' + skills[skill].text">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row agency-info-red-section pt-4 pl-4">
                                        <div class="col-12 col-md-12 mb-2">
                                            <img class="mr-2" src="../assets/imgs/icon/ico_personas.png" alt="">
                                            <p>{{agency.contacto.personas}}</p>
                                        </div>
                                        <div class="col-12 col-md-12 mb-2">
                                            <img class="mr-3 pl-1" src="../assets/imgs/icon/ico_ubicacion.png" alt="">
                                            <p>{{agency.ubicacion}}</p>
                                        </div>
                                        <div class="col-12 col-md-12 mb-2">
                                            <img class="mr-3" src="../assets/imgs/icon/ico_site.png" alt="">
                                            <a :href="agency.sitio" target='_blank'>Sitio Web</a>
                                        </div>
                                        <!-- <div class="col-12 col-md-12">
                                            <img class="mr-2" src="../assets/imgs/icon/ico_demo.png" alt="">
                                            <p>Demo Reel</p>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="row agency-info-agency-text">
                                    <p class="pt-5">{{ agency.descripcion }}</p>

                                    <a href="javascript:void(0)"  class="purple-button agency-info-agency-purple-button" @click="click">
                                      Contacto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Overlay :displayMenu="displayMenu" :click="click">
                                        <template slot="overlay-content">
                                            <div style="width: 90%">
                                                <div class="d-flex flex-column row--center">
                                                    <div class="agency-description contact-card">
                                                        <div class="row row--title">
                                                            <div class="card-logo col-12 col-md-3">
                                                                <img :src="agency.imagen" alt="">
                                                            </div>
                                                            <div class="card-title col-12 col-md-9">
                                                                <p>{{ agency.name }}</p>
                                                            </div>
                                                        </div>
                                                        <div class="row row--contact-agency">
                                                            <div class="infos-contact col-12 col-md-8">
                                                                <div class="row row--contact-name">
                                                                    <div class="col-2">
                                                                        <img class="contact-icon icon-large" src="../assets/imgs/icon/ico_imput_num_pers@2x.png">
                                                                    </div>
                                                                    <div class="col-9">
                                                                        <span class='prominent'>{{agency.contacto['nombre completo']}}</span>
                                                                        <br>
                                                                        <span class="semi-prominent">
                                                                            {{ agency.contacto.puesto }}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-12 col-md-7 col--contact-left">
                                                                        <div class="row contact-tel-container padded-container">
                                                                            <div class="col-2 icon-container">
                                                                                <img class=" contact-icon" src="../assets/imgs/icon/ico_tel.png">
                                                                            </div>
                                                                            <div class="col-9">
                                                                                <span ><span class="font-weight-bold"> Móvil: </span> {{ agency.contacto['telefono movil'] }}</span>
                                                                                <br>
                                                                                <span v-if="agency.contacto['telefono de oficina']"> <span class="font-weight-bold"> Oficina: </span> {{ agency.contacto['telefono de oficina'] }}</span>
                                                                            </div>

                                                                        </div>
                                                                        <div class="row contact-mail-container padded-container">
                                                                            <div class="row">
                                                                                <div class="col-2 icon-container">
                                                                                    <img class="contact-icon" src="../assets/imgs/icon/ico_imput_correo.png">
                                                                                </div>
                                                                                <div class="col-9">
                                                                                    <span>{{ agency.contacto.mail }}</span>
                                                                                </div>
                                                                            <!-- </div>
                                                                            <div class="row"> -->
                                                                                <div class="col-2 icon-container">
                                                                                    <img class="contact-icon" src="../assets/imgs/icon/ico_site.png">
                                                                                </div>
                                                                                <div class="col-9" style="line-height: 2">
                                                                                    <span><a :href="agency.sitio">{{ agency.sitio }}</a></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-md-5 col--contact-rigth contact-address-container">
                                                                        <div class="row padded-container">
                                                                            <div class="col-2">
                                                                                <img src="../assets/imgs/icon/ico_ubicacion.png" alt="Ícono de Locación">
                                                                            </div>
                                                                            <div class="col-9">
                                                                                {{ agency.direccion }} {{ agency.direccion_detalle }}
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="map col-12 col-md-4">
                                                                <a :href="`https://www.google.com/maps/search/{agency.direccion}`" _target="blank">
                                                                    <iframe style="pointer-events: none; border:0"
                                                                        width="345"
                                                                        scrolling="no"
                                                                        height="345"
                                                                        frameborder="0"
                                                                        :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyDbSVr_MWQQacoRgnHg6ewNPxPalbfQ9DM&q='+ agency.direccion" allowfullscreen>
                                                                    </iframe>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ContactForm v-if="displayForm" @success="clickCallback"
                                                    title="¿Quieres que la agencia te contacte?" type="user" :agency="agency.name"
                                                    description="Ingresa tus datos para que el contacto comercial de la agencia se ponga en contacto contigo."
                                                    :clickCallBack="clickCallBack"/>
                                                    <div class="row" v-else>
                                                        <div class="col-7 offset-2 confirmation">
                                                                <h1>Confirmación de solicitud</h1>
                                                                <p>Pronto se pondrá en contacto contigo la agencia.</p>
                                                                <!-- <p class="mb-5">IAB México realizará la siguiente convocatoria integrando este registro para que inicies el proceso de validación. Toda la comunicación referente al directorio será enviada a este correo. Recuerda que debes ser una Agencia Socia de IAB México para poder participar.</p> -->
                                                                <div class="d-flex flex-column align-items-center">
                                                                    <button  @click="click">Entendido</button>
                                                                </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </template>
                                    </Overlay>
                </div>
            </div>

            <div class="row d-lg-none d-md-none mobile-detail-view">
                            <div class="col-12 col-md-6">
                                <div class="row agency-info-agency-icons">
                                    <div class="row pb-3 pt-3 position-relative justify-content-center">
                                        <div v-for="(exists, skill) in agency.skills" v-tooltip="skills[skill].text">
                                            <!-- <div class="popover d-flex flex-column align-items-center">
                                                <p>{{ skill }}</p>
                                            </div>  -->
                                            <div class="col-12 col-md" v-if="exists">
                                                <div class="agency-info-agency-icons-icon-node">
                                                    <img :src="skills[skill].img" :alt="'Ícono ' + skills[skill].text">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row agency-info-red-section pt-4 pl-4">
                                        <div class="col-12 col-md-12 mb-2">
                                            <img class="mr-2" src="../assets/imgs/icon/ico_personas.png" alt="">
                                            <p>{{agency.contacto.personas}}</p>
                                        </div>
                                        <div class="col-12 col-md-12 mb-2">
                                            <img class="mr-3 pl-1" src="../assets/imgs/icon/ico_ubicacion.png" alt="">
                                            <p>{{agency.ubicacion}}</p>
                                        </div>
                                        <div class="col-12 col-md-12 mb-2">
                                            <img class="mr-3" src="../assets/imgs/icon/ico_site.png" alt="">
                                            <a :href="agency.sitio" target='_blank'>Sitio Web</a>
                                        </div>
                                        <!-- <div class="col-12 col-md-12">
                                            <img class="mr-2" src="../assets/imgs/icon/ico_demo.png" alt="">
                                            <p>Demo Reel</p>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="row agency-info-agency-text">
                                    <p class="pt-3">{{ agency.descripcion }}</p>

                                    <a href="javascript:void(0)"  class="purple-button agency-info-agency-purple-button" @click="click">
                                      Contacto
                                    </a>
                                </div>
                            </div>
            </div>
        </div>
    </div>
    <!-- <div class="recomendations-section">
        <div class="recomendations-section-container container container--1240">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="red-detail filter-input-red-detail"></div>
                    <p class="filter-input-title">10 Recomendaciones</p>
                </div>
            </div>
            <div class="recomendations-section-main">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="recomendations-section-main-first-section">
                            <div>
                                <img src="../assets/imgs/icon/ico_comentarios.png" alt="">
                                <p>Jumex</p>
                                <p>Ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Vestibulum ac Ultrices posuere cubilia Curae; Donec velit neque, auctor
                                    sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac Ultrices posuere cubilia
                                    Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum
                                    acUltrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Vestibulum ac</p>
                                <p>2 horas antes</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="recomendations-section-main-second-section">
                            <div>
                                <img src="../assets/imgs/icon/ico_comentarios.png" alt="">
                                <p>Jumex</p>
                                <p>Ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Vestibulum ac</p>
                                <p>2 horas antes</p>
                            </div>
                        </div>
                        <div class="recomendations-section-main-third-section">
                            <div>
                                <img src="../assets/imgs/icon/ico_comentarios.png" alt="">
                                <p>Jumex</p>
                                <p>Ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Vestibulum ac</p>
                                <p>2 horas antes</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="recomendations-section-main-fourth-section">
                            <div>
                                <img src="../assets/imgs/icon/ico_comentarios.png" alt="">
                                <p>Jumex</p>
                                <p>Ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Vestibulum ac</p>
                                <p>2 horas antes</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="recomendations-section-main-fifth-section">
                            <div>
                                <img src="../assets/imgs/icon/ico_comentarios.png" alt="">
                                <p>Jumex</p>
                                <p>Ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Vestibulum ac</p>
                                <p>2 horas antes</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="recomendations-section-main-fifth-section">
                            <div>
                                <img src="../assets/imgs/icon/ico_comentarios.png" alt="">
                                <p>Jumex</p>
                                <p>Ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Vestibulum ac</p>
                                <p>2 horas antes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="see-more-button">Ver más</p>
        </div>
    </div> -->
    <div class="similar-agencies">
        <div class="similar-agencies-container container container--1240">
        <div class="row">
            <div class="col-12 col-md-12">
                <div class="red-detail filter-input-red-detail"></div>

                <p class="filter-input-title"> Agencias Similares</p>
            </div>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="i in [1]" :key="i">
                        <div class="row">
                            <div class="col-6 col-md-2" v-for="a_data in similar">
                                <a :href="'/agencias-descripcion/' + a_data.slug" :title="a_data.name">
                                    <div class="carousel-image-container">
                                            <img :src="a_data.imagen" :alt="a_data.name + 'Logo'">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>   
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Overlay from "@/components/Overlay";
import ContactForm from "@/components/ContactForm";
import Swiper from "swiper";
import data from "@/data"

export default {
  components: {
    Header,
    Footer,
    Overlay,
    ContactForm
  },
  firebase: function (){
      return {
        agency: {
            source: data.db.ref('agencias/' + this.$route.params.agency_slug),
            asObject: true,
        }
      }
  },
  data() {
    return {
      displayMenu: "none",
      displayForm: true,
      skills: {
        'analytics': {text:'Analytics', img: require('../assets/imgs/servicios/minis/icon_analitycs copy.png')},
        'apps-y-otros-mobile': {text:'Apps y Otros Mobile', img: require('../assets/imgs/servicios/minis/icon_app copy.png')},
        'creatividad-y-estrategia': {text:'Creatividad y Estrategia', img: require('../assets/imgs/servicios/minis/icon_creatividad copy.png')},
        'desarrollo-de-nuevas-tecnologias': {text:'Desarrollo de Nuevas Tecnologías', img: require('../assets/imgs/servicios/minis/icon_tec copy.png')},
        'diseno-desarrollo-web': {text:'Diseño & Desarrollo Web', img: require('../assets/imgs/servicios/minis/icon_web copy.png')},
        'e-commerce': {text:'E-commerce', img: require('../assets/imgs/servicios/minis/icon_ecomerce copy.png')},
        'experiential-marketing-digital': {text:'Experiential Marketing (Digital)', img: require('../assets/imgs/servicios/minis/icon_experimental copy.png')},
        'gestion-de-influencers': {text:'Gestión de Influencers', img: require('../assets/imgs/servicios/minis/ico_gestion copy 2.png')},
        'produccion-de-contenido': {text:'Producción de Contenido', img: require('../assets/imgs/servicios/minis/icon_contenidos copy.png')},
        'programas-de-crm': {text:'Programas de CRM', img: require('../assets/imgs/servicios/minis/icon_cmr copy.png')},
        'research': {text:'Research', img: require('../assets/imgs/servicios/minis/ico_reserch copy.png')},
        'servicio-de-gestion-de-medios': {text:'Servicio de Gestión de Medios', img: require('../assets/imgs/servicios/minis/ico_gestion_medias.png')},
        'social-media': {text:'Social Media', img: require('../assets/imgs/servicios/minis/icon_social copy.png')}
        },
    //   agency: ""
    };
  },
  computed: {
      skill_count: function(){
          let count = 0;
          for (let x in this.agency.skills) {
              if (this.agency.skills[x]) count++;
          }
          return count
        //   return this.agency.filter(function(x){ return x})
      },
      similar: function() {
        // let sim_complete = [];
        for (let k in this.agency.similar){
            this.agency.similar[k].slug = k
        }
        let v = Object.values(this.agency.similar)
        v.sort(function(a, b){
            var keyA = a.similarity,
                keyB = b.similarity;
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        })
        return v.slice(0, 6)
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
    },
    clickCallback() {
      this.displayForm = false;
    },
    back() {
      if(window.history.length == 0) {
        window.location.href = '/agencias';
      } else {
        window.history.back();
      }
    }
  },
  mounted() {
    const swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    // document.querySelectorAll('[data-toggle="popover"]').popover();
  }
};
</script>


<style lang="scss">
@import "~swiper/dist/css/swiper.css";

/* OVERLAY AGENCY DESCRIPTION */
.agency-description {
  .prominent {
      width: 80% !important;
      font-size: 1.5em !important;
      color: #4A4A4A;
  }
  .semi-prominent {
    width: 80% !important;
    font-size: 1.2em !important;
    color: #4A4A4A;
  }
  .row--title {
    height: 261px;
    @media (max-width: 575.98px) {
            height: auto;
    }
    // width: 1030px;
    .card-logo {
      height: 261px;
      background-color: #ffffff;
    //   max-height: 100px;
      overflow: hidden;
      img {
        top: 50%;
        left: 50%;
        position: relative;
        transform: translate(-50%, -50%);
        max-width: 80%;
          @media (max-width: 575.98px) {
              width: 100%;
          }
      }
    }
    .card-title {
      background-color: #d3cbe3;
      margin: 0;
      min-height: 100px;
      @media (max-width: 575.98px) {
            position: relative;
            height: 150px;
      }
      p {
        color: #4a4a4a;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 12px;
        font-size: 44px;
        font-family: "Montserrat", sans-serif;
        @media (max-width: 575.98px) {
            position: relative !important;
            height: 120px !important;
        }
      }
    }
  }
  .row--contact-agency {
      .row--contact-name {
        padding-top: 10px;
        padding-left: 10px; 
        height: 120px;
        background-color: #e2d6e7;
        @media (max-width: 767px) {
            padding-left: 0;
            height: auto;
        }
      }

  }
}
.agencia-descripcion {
    .icon-back-container {
        overflow: hidden;
        @media (min-width: 575.98px) {
            margin-bottom: 15px;
            margin-right: 15px;
            &:hover {
                img {
                    display: none;
                    &.active {
                        display: block;
                    }
                }
            }
        }
        img {
            cursor: pointer;
            float: right;
            &.active {
                display: none;
            }
        }
    }
  .popover {
    position: absolute;
    background-color: rgb(92, 52, 132);
    border-radius: 30px;
    width: 242px;
    text-align: center;
    left: 65%;
    top: -20%;
    z-index: 1;
    p {
      margin: 1rem 0;
    }
    &::after {
      content: " ";
      position: absolute;
      top: 99%; /* At the bottom of the tooltip */
      left: 35%;
      border-width: 15px 30px;
      border-style: solid;
      border-color: rgb(92, 52, 132) transparent transparent transparent;
    }
  }
  .swiper-container {
    width: 90%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-button-prev {
    background-image: url("../assets/imgs/navegacion/row_left_a.png");
    outline: none;
  }
  .swiper-button-next {
    background-image: url("../assets/imgs/navegacion/row_right_a.png");
    outline: none;
  }
  /* Header */

  header {
    height: 230px;
    background-image: url("../assets/imgs/headers/header_mini.png");
  }

  /* Agency info */

  .agency-info-section {
    display: block;
    width: 100%;
    height: 800px;
    overflow: hidden;
    background-image: url("../assets/imgs/decripcion\ agencia/bg_info.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
    color: white;
    @media (max-width: 575.98px) {
        height: auto !important;
        margin-bottom: 20px;
    }
  }

  .agency-info-section-container {
    display: block;
  }

  .logo-square {
    width: 100%;
    height: 400px;
    background-color: #fdfcfc;
  }

  .logo-square img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    transform: translate(-50%, -50%);
  }

  .agency-info-agency-title {
    background-color: #eee1f1;
    color: #4a4a4a;
    height: 100%;
    position: relative;
  }

  .agency-info-agency-title p {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 12px;
    font-size: 44px;
    font-family: "Montserrat", sans-serif;
    @media (max-width: 575.98px) {
          transform: none;
          position: static;
          font-size: 2.2em;
          max-width: 100%;
          padding-top: 1rem;
          padding-left: 10px;
          word-wrap: break;
      }
  }

  .agency-info-agency-feature {
    background-color: #ff2b42;
    color: black;
    height: 100%;
    padding-top: 16px;
    @media (max-width: 767px) {
        padding: 0;
    }
  }

  .agency-info-agency-feature-title {
    color: white;
    width: 120px;
    display: inline-block;
    text-align: center;
    font-family: Montserrat;
  }

  .agency-info-agency-feature-title p {
    font-weight: bold;
    margin: 0;
    font-size: 20px;
    line-height: 1;
  }

  .agency-info-agency-feature-number {
    color: white;
    width: 75px;
    display: inline-block;
    text-align: center;
    font-family: Montserrat;
  }

  .agency-info-agency-feature-number p {
    font-weight: bold;
    margin: 0;
    font-size: 48px;
  }

  .agency-info-agency-icons {
    background-color: #f5f0f9;
    height: 50%;
    @media (max-width: 575.98px) {
        height: auto;
    }
  }

  .agency-info-agency-text {
    background-color: #cabade;
    // height: 32.2vw;
    height: 100%;
  }

  .agency-info-agency-text p {
    color: #4c4c4c;
    font-size: 1.2em;
    width: 90%;
    margin: 0 auto;
  }
  .agency-info-agency-text  p:nth-child(1) {
    height: 80%;
    overflow: auto;
    max-height: 330px;
    @media (max-width: 575.98px) {
        height: auto;
        overflow: hidden;
        font-size: 1em;
        max-height: none;
    }
  }

  .agency-info-section-container .agency-info-agency-purple-button {
    color: white;
    font-weight: 100;
    font-size: 20px;
    position: absolute;
    left: 50%;
    height: 56px;
    width: 304px;
    transform: translate(-50%);
    bottom: 4%;
    cursor: pointer;
    @media (max-width: 575.98px) {
        width: 75%;
        position: static;
        transform: none;
        margin: 10px auto;
    }
    // @media (max-width: 575.98px) {
    //       .row{
    //           min-height: 200px;
    //       }
    //   }
  }

  .agency-info-agency-icons {
    .row {
      height: 17vw;
      @media (max-width: 575.98px) {
          height: auto;

      }
    }
  }

  .agency-info-agency-icons-icon-node {
    width: 92px;
    height: 48px;
    position: relative;
  }

  .agency-info-agency-icons-icon-node img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 85%;
    transform: translate(-50%, -50%) scale(0.8);
  }

  .agency-info-red-section {
    background-color: #f9d0db;
    // height: 50%;
    width: 100%;
    color: #5c5c5c;
  }

  .agency-info-red-section p {
    display: inline;
    font-size: 20px;
  }

  .agency-info-red-section img {
    display: inline-block;
    margin: 4px 0;
    transform: scale(0.8);
  }

  /* Recomendations Section */

  .recomendations-section {
    display: block;
    margin-top: 15rem;
    width: 100%;
    background-image: url("../assets/imgs/decripcion\ agencia/bg_recomendaciones.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
    color: white;
  }

  .recomendations-section-container {
    display: block;
  }

  .filter-input-title {
    display: inline-block;
    font-size: 28px;
    padding-left: 15px;
    color: #5c5c5c;
      @media (max-width: 575px) {
          padding-left: 15px;
      }
  }

  .filter-input-red-detail {
    display: inline-block;
  }

  .recomendations-section-main {
    width: 100%;
    height: 500px;
    color: #5c5c5c;
  }

  .recomendations-section-main-first-section {
    background-color: #e4d5e9;
    height: 300px;
    width: 100%;
  }

  .recomendations-section-main-first-section div {
    max-width: 460px;
    padding-top: 12px;
    margin: 0 auto;
    display: block;
  }

  .recomendations-section-main-first-section div p:nth-child(2) {
    display: inline;
    font-size: 28px;
  }

  .recomendations-section-main-first-section div p:nth-child(3) {
    font-size: 12px;
  }

  .recomendations-section-main-first-section div p:nth-child(4) {
    font-size: 10px;
  }

  .recomendations-section-main-first-section img {
    display: inline-block;
    margin: 4px 0;
    transform: scale(0.7);
  }

  .recomendations-section-main-second-section {
    background-color: #fee3eb;
    height: 150px;
    width: 100%;
  }

  .recomendations-section-main-second-section div {
    max-width: 460px;
    padding-top: 12px;
    margin: 0 auto;
    display: block;
  }

  .recomendations-section-main-second-section div p:nth-child(2) {
    display: inline;
    font-size: 24px;
  }

  .recomendations-section-main-second-section div p:nth-child(3) {
    font-size: 12px;
  }

  .recomendations-section-main-second-section div p:nth-child(4) {
    font-size: 10px;
  }

  .recomendations-section-main-second-section img {
    display: inline-block;
    margin: 4px 0;
    transform: scale(0.6);
  }

  .recomendations-section-main-third-section {
    background-color: #e7e1ef;
    height: 150px;
    width: 100%;
  }

  .recomendations-section-main-third-section div {
    max-width: 460px;
    padding-top: 12px;
    margin: 0 auto;
    display: block;
  }

  .recomendations-section-main-third-section div p:nth-child(2) {
    display: inline;
    font-size: 24px;
  }

  .recomendations-section-main-third-section div p:nth-child(3) {
    font-size: 12px;
  }

  .recomendations-section-main-third-section div p:nth-child(4) {
    font-size: 10px;
  }

  .recomendations-section-main-third-section img {
    display: inline-block;
    margin: 4px 0;
    transform: scale(0.6);
  }

  .recomendations-section-main-fourth-section {
    background-color: #fae2e7;
    height: 200px;
    width: 100%;
  }

  .recomendations-section-main-fourth-section div {
    max-width: 302px;
    padding-top: 12px;
    margin: 0 auto;
    display: block;
  }

  .recomendations-section-main-fourth-section div p:nth-child(2) {
    display: inline;
    font-size: 22px;
  }

  .recomendations-section-main-fourth-section div p:nth-child(3) {
    font-size: 11px;
  }

  .recomendations-section-main-fourth-section div p:nth-child(4) {
    font-size: 10px;
  }

  .recomendations-section-main-fourth-section img {
    display: inline-block;
    margin: 4px 0;
    transform: scale(0.55);
  }

  .recomendations-section-main-fifth-section {
    background-color: #ded4e8;
    height: 200px;
    width: 100%;
  }

  .recomendations-section-main-fifth-section div {
    max-width: 302px;
    padding-top: 12px;
    margin: 0 auto;
    display: block;
  }

  .recomendations-section-main-fifth-section div p:nth-child(2) {
    display: inline;
    font-size: 22px;
  }

  .recomendations-section-main-fifth-section div p:nth-child(3) {
    font-size: 11px;
  }

  .recomendations-section-main-fifth-section div p:nth-child(4) {
    font-size: 10px;
  }

  .recomendations-section-main-fifth-section img {
    display: inline-block;
    margin: 4px 0;
    transform: scale(0.55);
  }

  .see-more-button {
    background-color: #4a4a4a;
    text-align: center;
    width: 200px;
    border-radius: 25px;
    height: 40px;
    font-weight: bolder;
    padding-top: 9px;
    display: block;
    margin: 30px auto;
    cursor: pointer;
  }

  /* Modal Card */

  .stuck {
    z-index: 3;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translate(-50%);
    bottom: 10px;
    width: 1000px;
    background-color: #eee;
    overflow-y: scroll;
    display: none;
  }

  .agencies-card-strecher {
    height: 1000px;
    width: 100%;
    display: block;
  }

  .agencies-card-container {
    width: 100%;
    height: 1000px;
    position: relative;
  }

  .close-card-icon {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 24px;
  }

  .agencies-card-lines-detail {
    width: 300px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .agencies-card-lines-detail-two {
    width: 300px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .card-center {
    position: absolute;
    width: 700px;
    height: 800px;
    background-color: lightgrey;
    left: 50%;
    top: 100px;
    transform: translate(-50%);
    color: #4a4a4a;
  }

  .card-center-logo {
    display: inline-block;
    margin-bottom: 0px;
        // height: unset;
    @media (min-width: 767px) {
        height: 100%;
    }
  }

  .card-center-title {
    display: inline-block;
    font-size: 52px;
    position: relative;
    bottom: 80px;
    left: 34px;
    margin-bottom: 0;
  }

  .card-center-info {
    margin-top: -21px;
  }

  .card-center-info-agency-data {
    height: 300px;
    width: 400px;
    background-color: red;
  }

  .card-center-info-agency-location {
    height: 300px;
    width: 300px;
    background-color: blue;
  }

  .card-center-info-cordinator {
    width: 100%;
    height: 100px;
    background-color: aqua;
  }

  /* */

  .filter-results-container {
    max-width: 1000px;
    display: block;
    margin: 0 auto;
    margin-bottom: 60px;
  }

  .card-center-logo-square {
    width: 193px;
    height: 193px;
    background-color: #fafafa;
    position: relative;
    margin-bottom: 8px;
  }

  .card-center-logo-square img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    transform: translate(-50%, -50%);
  }

  /* Similar Agencies */

  .similar-agencies-container {
    display: block;
  }

  /* Carousel */

  .carousel {
    display: block;
    margin: 0 auto;
    margin-bottom: 120px;
  }

  .carousel-images-container {
    height: 136px;
    display: block;
    margin: 0 auto;
  }

  .carousel-image-container {
    width: 180px;
    height: 170px;
    position: relative;
    background-color: #f9f9f9;
      @media (max-width: 575px) {
          margin: 0 4% 4%;
          width: 96%;
      }
  }

  .carousel-image-container img {
    width: 130px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background-color: rgb(92, 52, 132);
    border-radius: 30px;
    // width: 242px;
    // text-align: center;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}

.contact-card {
    padding-bottom: 20px;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1030px;
    @media (max-width: 575.98px) {
        width: 100%;
    }
}
.col--contact-left {
    padding: 15px 0 0 15px;
    color: #4A4A4A;
    background-color: #CAC0D5;
    min-height: 100px;

    .row {
        min-height: 100px;
    }
}
.col--contact-rigth {
    color: #4A4A4A;
    padding: 15px 0 0 15px;
    background-color: #F9EBE9;
    @media (max-width: 575.98px) {
        padding-left: 15px !important;
    }
}
.row--center {
    margin: 0 auto;
    overflow: hidden;
}
.icon-container{
    // padding: 5px;
}
.contact-icon{
    // margin-left: 8px;
    margin: 3px auto;
    display: block;
}
.icon-large{
    width: 50%;
}
.padded-container{
    padding: 10px 0 0 10px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    // overflow: ;
    @media (max-width: 575.98px) {
        padding-left: 0;
    }
}
  .confirmation {
    font-family: "Montserrat-Light", sans-serif;
    color: #4a4a4a;
    h1 {
      font-size: 36px;
      text-transform: uppercase;
    }
    & p:nth-child(2) {
      font-size: 18px;
    }
    & p:nth-child(3) {
      font-size: 24px;
    }
  }
  .map{
      overflow: hidden;
  }
  .contact-mail-container{
      background-color: #E4E2ED;
  }
  .contact-address-container{
      line-height: 1.7;
  }

  .basic--info{
    @media (max-width: 575.98px) {
        min-height: 160px;
        & > div {
            // min-height: 60px;
        }
        .logo-square.card-center-logo img {
            width: 90% !important;
        }
    }
  }
  .mobile-detail-view{
      @media (max-width: 575.98px) {
          .row{
            //   min-height: 200px;
          }
      }
  }
</style>

