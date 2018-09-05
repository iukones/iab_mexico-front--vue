<template>
  <div class="agencias">
    <Header>
        <template slot="main-text">
            <p>Agencias</p>
            <p class="header-subtitle">que ofrecen servicios digitales</p>
        </template>
        <template slot="secondary-text">
            <p>En este apartado podrás realizar la búsqueda de las Agencias que pertenecen al Directorio a través de filtros como: Servicio digital ofrecido, ubicación o tamaño de la agencia.</p>
        </template>
    </Header>
    <div class="filter-input">
        <div class="container container--1240">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="red-detail filter-input-red-detail mr-2 mr-md-3"></div>
                    <p class="filter-input-title mt-3 mt-md-0">Filtrar por</p>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class=" col-sm-12  col-md-4">
                        <select-input ref="services_filter" :selectedOption='$route.query.servicio' class="" :options="skill_map">
                            <template slot="image">
                                <img src="../assets/imgs/icon/ico_imput_servicio.png" alt="">
                            </template>
                        </select-input>
                    </div>
                    <div class=" col-sm-12  col-md-4" >
                      <select-input class="" :options="locationsOptions" ref="locations_filter">
                            <template slot="image">
                                <img src="../assets/imgs/icon/ico_imput_mapa.png" alt="">
                            </template>
                        </select-input>
                    </div>
                    <div class="  col-sm-12 col-md-2" >
                      <select-input :options="numberOptions" inputSize="small" ref="number_filter">
                            <template slot="image">
                                <img src="../assets/imgs/icon/ico_imput_persona.png" alt="">
                            </template>
                        </select-input>
                    </div>
                    <div class="  col-sm-6 col-md-2">
                      <div style="max-width: 95%"> 
                            <div class="purple-button filter-input-purple-button pt-4 ml-2 ml-md-0" @click="filter">Filtrar</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

    <div class="filter-results">
        <div class="container container--1240">
            <div class="row d-flex justify-content-between px-3 px-md-0">
                <div v-for="(agency, k) in current_agencies" class="">
                    <a :href="'agencias-descripcion/' + agency['.key']">
                        <div class="logo-square" :style="{'background-image': `url(${agency.imagen})`}">
                            <!-- <img :src="agency['imagen']" alt=""> -->
                        </div>
                    </a>
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
import SelectInput from "@/components/SelectInput";
import data from "@/data";

export default {
  components: {
    Header,
    Footer,
    SelectInput
  },
  firebase: {
    agencies: data.db.ref("lite")
  },
  data() {
    return {
      agencies: null,
      current_agencies: [],
      servicesOptions: [
        "Todos los servicios",
        "Analytics",
        "Apps y Otros Mobile",
        "Creatividad y Estrategia",
        "Desarrollo de Nuevas Tecnologías",
        "Diseño & Desarrollo Web",
        "E-commerce",
        "Experiential Marketing (Digital)",
        "Gestión de Influencers",
        "Producción de Contenidos",
        "Programas de CRM",
        "Research",
        "Servicio de Gestión de Medios",
        "Social Media"
      ],
      skill_map: [
        { text: "Todos los servicios", val: "Todos los servicios" },
        { text: "Analytics", val: "analytics" },
        { text: "Apps y Otros Mobile", val: "apps-y-otros-mobile" },
        { text: "Creatividad y Estrategia", val: "creatividad-y-estrategia" },
        {
          text: "Desarrollo de Nuevas Tecnologías",
          val: "desarrollo-de-nuevas-tecnologias"
        },
        { text: "Diseño & Desarrollo Web", val: "diseno-desarrollo-web" },
        { text: "E-commerce", val: "e-commerce" },
        {
          text: "Experiential Marketing (Digital)",
          val: "experiential-marketing-digital"
        },
        { text: "Gestión de Influencers", val: "gestion-de-influencers" },
        { text: "Producción de Contenidos", val: "produccion-de-contenido" },
        { text: "Programas de CRM", val: "programas-de-crm" },
        { text: "Research", val: "research" },
        {
          text: "Servicio de Gestión de Medios",
          val: "servicio-de-gestion-de-medios"
        },
        { text: "Social Media", val: "social-media" }
      ],
      locationsOptions: [
        "Todas las ubicaciones",
        "Ciudad de México",
        "Coahuila",
        "Estado de México",
        "Nuevo León"
      ],
      numberOptions: ["-----", "1 - 15", "16 - 30", "31 - 100", "101 o más"]
    };
  },
  methods: {
    filter(e, filters) {
      let agencies = {};
      if (!filters) {
        filters = {
          skills: {
            element: this.$refs.services_filter.selectedOption,
            default: "Todos los servicios"
          },
          ubicacion: {
            element: this.$refs.locations_filter.selectedOption,
            default: "Todas las ubicaciones"
          },
          personas: {
            element: this.$refs.number_filter.selectedOption,
            default: "-----"
          }
        }
      }
      let current_agencies = this.agencies;
      for (let f in filters) {
        console.log(f)
        let selected = filters[f].element;
        console.log(selected)
        // console.log(this.$refs)
        if (selected && selected != filters[f].default) {
          current_agencies = current_agencies.filter(a => {
            if (typeof a[f] == "object") {
              return a[f][selected];
            }
            return a[f] == selected;
          });
        }
      }
      // console.log(current_agencies);
      this.current_agencies = current_agencies;
    }
  },
  created() {
    
  },
  watch: {
    agencies: function(val) {
      this.current_agencies = val;
      let service = this.$route.query.servicio;
      if (service) {
        this.filter(null, {
          skills: {
            element: service,
            default: "Todos los servicios"
          }
        })
      }
    }
  }
};
</script>

<style lang="scss">
.agencias {
  header {
    background-image: url("../assets/imgs/headers/header_agencias.jpg");
    @media (max-width: 575.98px) {
      background-image: url("../assets/imgs/headers/mobil/header_agencias.png");
    }
  }

  /* Filter Section */

  .filter {
    &-results {
      margin-top: 5rem;
      @media (max-width: 575.98px) {
        margin-top: 2rem;
      }
    }

    &-input-red-detail {
      display: inline-block;
      width: 2.4vw;
      height: 10px;
      @media (max-width: 575.98px) {
        width: 9vw;
      }
    }

    &-input-title {
      display: inline-block;
      height: 39px;
      font-size: 36px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 0.44;
      letter-spacing: normal;
      color: #000000;
      @media (max-width: 575.98px) {
        font-size: 26px;
      }
    }

    &-input-purple-button {
      border-radius: 40px;
      min-width: 15.8vw;
      height: 5rem;
      font-size: 1.125rem;
      margin: 0 auto;
      margin: 0;
      cursor: pointer;
      @media (max-width: 575.98px) {
        min-width: 44vw;
        height: 4rem;
      }
    }

    &-results-container {
      max-width: 1000px;
      display: block;
      margin: 0 auto;
      margin-bottom: 60px;
    }
  }

  /* filter results */

  .logo-square {
    width: 242px;
    height: 242px;
    background-color: #fafafa;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    position: relative;
    margin-bottom: 8px;
    -webkit-filter: grayscale(100%);
    @media (max-width: 575.98px) {
      -webkit-filter: grayscale(0%);
      width: 45vw;
      height: 150px;
      // height: 112px;
    }
    /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    &:hover {
      -webkit-filter: grayscale(0%);
      /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }

    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 160px;
      transform: translate(-50%, -50%);
      @media (max-width: 575.98px) {
        width: 26vw;
        height: 46px;
      }
    }
  }
}
</style>
