<template>
  <div class="servicios-digitales">
    <Header>
        <template slot="main-text">
            <p>Servicios</p>
            <p>Digitales</p>
        </template>
        <template slot="secondary-text">
            <p> Dentro de esta sección podras encontrar la descripción de los Servicios Digitales que fueron
                desarrollados por el Comité de Investigación y la Mesa de Agencias de IAB México para consolidar
                las categorías más ofrecidas en el mercado.</p>
        </template>
    </Header>
    <div class="digital-services-d">
        <TitlePurple text="Servicios" highlight="Digitales"/>
        <div class="digital-services">
            <div class="container container--1240">
                <div class="row">
                    <Services v-for="(service, index) in services" :id="index" :key="index" :colWidth="isOpen(index)" :closeCallback="onClose" :openCallback="openCallback" :text="service.text" :textDescription="service.textDescription" :hasPt3="service.hasPt3" :slug="service.slug" :order="order(index)">
                        <template slot="picture">
                            <img :src="require(`@/assets/imgs/servicios/${service.picture}`)" alt="Card image cap">
                        </template>
                    </Services>
                    <!-- <Services :colWidth="isOpen(2)" :closeCallback="onClose" :openCallback="openCallback" :id="2" text="Creatividad y Estrategia">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_creatividad.png" alt="Card image cap">
                        </template>
                    </Services> -->
                    <!-- <Services text="Producción de contenidos">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_contenidos.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Apps y otros mobiles">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_app.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Deseños y desarrallo web">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_web.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Social media">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_social.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Analytics">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_analytics.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Research">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/ico_research.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Desarrollo de nuevas tecnologías">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_tec.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="E-commerce">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_ecomerce.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Programas de crm">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_cmr.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Experiential marketing (digital)">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/icon_experimental.png" alt="Card image cap">
                        </template>
                    </Services>
                    <Services text="Gestión de Influencers">
                        <template slot="picture">
                            <img src="../assets/imgs/servicios/ico_gestion.png" alt="Card image cap">
                        </template>
                    </Services> -->
                </div>
            </div>
        </div>
    </div>
    <AgenceBlock/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TitlePurple from "@/components/TitlePurple";
import AgenceBlock from "@/components/AgenceBlock";
import Services from "@/components/Services";
export default {
  components: {
    Header,
    Footer,
    TitlePurple,
    AgenceBlock,
    Services
  },
  data() {
    return {
      currentOpenId: null,
      services: [
        {
          text: "Servicio de gestión de medios",
          textDescription:
            "Pauta o compra de medios digitales/online/web, planeación de medios digitales/online, ejecución de campañas digitales/online, optimización de campañas digitales/web/online, campañas de display, campañas de search digitales/online/web, Adwords, SEA (Search Engine Advertising), SEM (Search Engine Marketing), campañas de clasificados (digitales/online)",
          picture: "icon-gestion.png",
          hasPt3: true,
          slug: "servicio-de-gestion-de-medios"
        },
        {
          text: "Creatividad y Estrategia",
          textDescription:
            "Estrategia de comunicación (digital/web/online), desarrollo de concepto creativo (digital/web/online), dirección de arte, estrategia digital/web/online,",
          picture: "icon_creatividad.png",
          hasPt3: false,
          slug: "creatividad-y-estrategia"
        },
        {
          text: "Producción de contenidos",
          textDescription:
            "Producción de video (producción de contenido audiovisual digital, cobertura digital de eventos, streaming de video), producción de imagen (display, standard, banners, rich media, rising stars), producción de audio (radio online, música, podcast, anuncios en formato de audio), producción editorial (texto para blogs, sitios web, revistas digitales), content marketing.",
          picture: "icon_contenidos.png",
          hasPt3: false,
          slug: "produccion-de-contenido"
        },
        {
          text: "Apps y otros mobiles",
          textDescription:
            "Desarrollo de aplicaciones móviles/apps/SMS, mantenimiento de apps/aplicaciones móviles, geofencing, servicios de geolocalización, lbs (location based services).",
          picture: "icon_app.png",
          hasPt3: false,
          slug: "apps-y-otros-mobile"
        },
        {
          text: "Diseños y desarrollo web",
          textDescription: "Desarrollo, diseño, maquetación, programación (web/online/digital, de sitios web, de landing page), desarrollo de software, desarrollo de videojuegos, desarrollo de sitios responsivos, SEO (search Engine Optimization), UX (User Experience), Back end, Front end.",
          picture: "icon_web.png",
          hasPt3: false,
          slug: "diseno-desarrollo-web"
        },
        {
          text: "Social media",
          textDescription:
            "Gestión, administración o manejo de social media/plataformas sociales/redes sociales/fan page (Facebook, Instagram, Twitter, Tumblr, YouTube, Snapchat), community management, posteos/posts en redes sociales/social media/plataformas sociales/fan page.",
          picture: "icon_social.png",
          hasPt3: false,
          slug: "social-media"
        },
        {
          text: "Analytics",
          textDescription:
            "Analytics (Incluye Google Analytics, Facebook Analytics, Twitter Analytics, entre otros), social media analytics, web anaIytics, heatmaps, eyetracking, social analytics, social listening, business intelligence, big data, DMP (Data Management Platform), métrica o medición de tráfico a sitio/página/propiedades digitales.",
          picture: "icon_analytics.png",
          hasPt3: false,
          slug: "analytics"
        },
        {
          text: "Research",
          textDescription:
            "Research digital/online/web, investigación/sondeos/estudios sobre temas digitales, panel online, servicios de consultoría sobre temas digitales.",
          picture: "ico_research.png",
          hasPt3: false,
          slug: "research"
        },
        {
          text: "Desarrollo de nuevas tecnologías",
          textDescription:
            "Desarrollo de VR/realidad virtual, desarrollo de AR/Augmented Reality/Realidad Aumentada, desarrollo o programación de inteligencia artificial, desarrollo o programación de chatbots",
          picture: "icon_tec.png",
          hasPt3: false,
          slug: "desarrollo-de-nuevas-tecnologias"
        },
        {
          text: "E-commerce",
          textDescription:
            "Desarrollo de catálogos de producto, desarrollo/gestión de ecommerce/comercio electrónico, ventas online.",
          picture: "icon_ecomerce.png",
          hasPt3: false,
          slug: "e-commerce"
        },
        {
          text: "Programas de crm",
          textDescription: "Desarrollo de programas de lealtad, CRM, social CRM, inbound marketing",
          picture: "icon_cmr.png",
          hasPt3: false,
          slug: "programas-de-crm"
        },
        {
          text: "Experiential marketing (digital)",
          textDescription:
            "Desarrollo de eventos, activaciones, promociones, convenciones, stands, BTL, que tienen integración digital o hacen uso de herramientas digitales para su ejecución (ejemplo: activación en social media, geofencing, lbs/location based services, live streaming, VR, AR, códigos QR, entre otros). ",
          picture: "icon_experimental.png",
          hasPt3: false,
          slug: "experiential-marketing-digital"
        },
        {
          text: "Gestión de Influencers",
          textDescription:
            "influencers (influenciador)/ celebrities/ embajadores de marca, gestión o contratación de influencers (influenciador)/ celebrities/ embajadores de marca, menciones o dinámicas en social media/redes sociales/plataformas sociales, PR/Relaciones públicas digital/web/online, branded content",
          picture: "ico_gestion.png",
          hasPt3: false,
          slug: "gestion-de-influencers"
        }
      ]
    };
  },

  methods: {
    openCallback(id) {
      this.currentOpenId = id;
    },
    onClose() {
      this.currentOpenId = null;
    },
    order(id) {
      let order = 2;
      let withdraw = 1;
      if (id < 2) {
        order += 1;
      } else if (id < 4) {
        order += 2;
        withdraw = 2;
      } else if (id < 8) {
        order += 3;
      } else if (id < 12) {
        order += 4;
      } else if (id < 16) {
        order += 5;
      }
      if (window.innerWidth <= 765) {
          withdraw = 1
      }
      if (this.currentOpenId === id) order -= withdraw;
      return order;
    },
    isOpen(id) {
      if (window.innerWidth <= 765) {
        return this.currentOpenId === id ? 12 : 6;
      } else {
        return this.currentOpenId === id ? 12 : 3;
      }
    }
  }
};
</script>

<style lang="scss">
/* Digital Services */
.servicios-digitales {
  header {
    background-image: url("../assets/imgs/headers/header_servicios.jpg");
    & .header-main-text {
      & p {
        font-weight: 700 !important;
      }
      line-height: 1;
      & p:nth-child(2) {
        font-size: 120px;
        letter-spacing: -1px;
        margin-top: 0;
        @media (max-width: 575.98px) {
          font-size: 57px;
          margin-top: 35px;
        }
      }
    }
  }

  /* Digital services main */

  .digital-services {
    width: 100%;
    background-image: url("../assets/imgs/servicios/bg.png");
    background-repeat: no-repeat;
    /* -webkit-background-size: cover; */
    background-size: 100% 100%;
    padding-top: 100px;
  }

  .container {
    .card {
      background-color: transparent;
      border: transparent;
      height: 300px;
      cursor: pointer;
      position: relative;
      .card-img-top {
        height: 36%;
        width: 45%;
      }
      .red-detail {
        width: 14px;
        height: 6px;
        background-color: #ff0000;
        top: 18px;
        position: relative;
      }
      .card-title {
        text-align: center;
        text-transform: uppercase;
        color: #4a4a4a;
      }
    }
  }

  /* CLICK OPEN DETAILS */
  .presentation-card {
    width: 100%;
    height: 460px;
    background-image: linear-gradient(
      194deg,
      rgba(48, 35, 174, 0.164),
      rgba(200, 109, 215, 0.006)
    );
    padding-top: 24px;
    position: relative;
  }

  .presentation-card-main-image {
    width: 70px;
    display: block;
    margin: 0 auto;
  }

  .presentation-card-main-section-container {
    max-width: 670px;
    display: block;
    margin: 0 auto;
  }

  .presentation-card-main-section-detail {
    width: 46px;
    height: 8px;
    background-color: #ff0000;
    display: inline-block;
    margin-left: 40px;
    margin-bottom: 127px;
  }

  .presentation-card-tittle-container {
    display: inline-block;
  }

  .presentation-card-tittle-container p {
    font-size: 56px;
    display: inline-block;
  }

  .presentation-card-tittle {
    font-size: 42px;
    display: inline-block;
    width: 312px;
    color: #4a4a4a;
    font-family: Montserrat;
    margin-left: 20px;
  }

  .presentation-card-close-icon {
    position: absolute;
    top: 7rem;
    right: 8rem;
  }
}
</style>

