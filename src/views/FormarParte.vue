<template>
  <div class="formar-parte">
    <Header :hasBottomSection="true">
        <template slot="main-text">
           <p>Forma parte del</p>
            <p>Directorio</p>
        </template>
        <template slot="secondary-text">
            <p> Al formar parte de este directorio tu agencia adquiere prestigio y <br/>visibilidad con los tomadores de decisiones.</p>
        </template>
        <template slot="bottom-section">
            <div class="col-12 col-sm-12">
                <a href="javascript:void(0)" @click="click">
                    <p class="header-button single-button">Registrarme</p>
                </a>
                <Overlay :displayMenu="displayMenu" :click="click">
                    <template v-if="displayForm" slot="overlay-content">
                        <div class="inscription">
                                <ContactForm  @success="clickCallback"
                                title="¿Quieres ser parte del Directorio de agencias?"
                                description="Ingresa tus datos para indicar tu interés en participar en la siguiente convocatoria."
                                />
                            <div class="corner-overlay corner-overlay--bottom position-relative">
                            </div>
                        </div>
                    </template>
                    <template v-else slot="overlay-content">
                        <div class="row">
                            <div class="col-7 offset-2 confirmation">
                                    <h1>Confirmación de solicitud</h1>
                                    <p>Hemos recibido tus datos confirmando tu interés en ser parte del directorio.</p>
                                    <p class="mb-5">IAB México realizará la siguiente convocatoria integrando este registro para que inicies el proceso de validación. Toda la comunicación referente al directorio será enviada a este correo. Recuerda que debes ser una Agencia Socia de IAB México para poder participar.</p>
                                    <div class="d-flex flex-column align-items-center">
                                        <button  @click="click">Entendido</button>
                                    </div>
                            </div>
                        </div>
                    </template>
                </Overlay>
              </div>
        </template>
    </Header>
    <div class="steps-to-be-part-of">
        <TitlePurple text="Pasos para" highlight="ser parte"/>
        <div class="steps-container">
            <div class="swiper-container swiper-container-s ">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <StepsBenefits :hasButtonSection="true"
                            :numberInCycle="1"
                            text="Consulta los requisitos y costo de participación"
                            :numberSelected="1"
                            textButton="Ver más"
                            buttonLink="http://iniciativas.iabmexico.com/socios/Directorio-Agencias.pdf">
                            <template slot="image">
                                <img src="../assets/imgs/pasos/img_pasos_01.png" alt="">
                            </template>
                        </StepsBenefits>
                    </div>
                    <div class="swiper-slide">
                        <StepsBenefits :hasActionButtonSection="true"
                            :numberInCycle="2"
                            text="Llena la liga de Pre-Registro."
                            :numberSelected="2"
                            textButton="Me interesa"
                            @action="click"
                            >
                            <template slot="image">
                                <img src="../assets/imgs/pasos/img_pasos_02.png" alt="">
                            </template>
                        </StepsBenefits>
                    </div>
                    <div class="swiper-slide">
                        <StepsBenefits
                            :numberInCycle="3"
                            text="Realiza el pago. Envía tu comprobante para recibir tu factura y la liga de registro."
                            :numberSelected="3">
                            <template slot="image">
                                <img src="../assets/imgs/pasos/img_pasos_03.png" alt="">
                            </template>
                        </StepsBenefits>
                    </div>
                    <div class="swiper-slide">
                        <StepsBenefits :hasButtonSection="true"
                            textButton = "Servicios Digitales"
                            buttonLink = "/servicios-digitales"
                            :numberInCycle="4"
                            text="Evalúa el catálogo de servicios digitales y consolida la información necesaria"
                            :numberSelected="4">
                            <template slot="image">
                                <img src="../assets/imgs/pasos/img_pasos_04.png" alt="">
                            </template>
                        </StepsBenefits>
                    </div>
                    <div class="swiper-slide">
                        <StepsBenefits
                            :numberInCycle="5"
                            text="Completa el formulario incluyendo toda la documentación"
                            :numberSelected="5">
                            <template slot="image">
                                <img src="../assets/imgs/pasos/img_pasos_05.png" alt="">
                            </template>
                        </StepsBenefits>
                    </div>
                    <div class="swiper-slide">
                        <StepsBenefits
                            :numberInCycle="6"
                            text="Forma parte del Directorio de Agencias con Servicios Digitales"
                            :numberSelected="6">
                            <template slot="image">
                                <img src="../assets/imgs/pasos/img_pasos_06.png" alt="">
                            </template>
                        </StepsBenefits>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        <!-- <div class="actual-number-section">
            <ul>
                <li v-for="number in table" :key="number" :class="numberSelected === number ? 'number-selected' : ''">{{number}}</li>
            </ul>
        </div> -->
    </div>
    <div class="benefits-of-participating">
        <TitlePurple text="Beneficios" highlight="de Participar"/>
        <div class="benefits-main-section-container">
            <div class="container container--1240">
            <img src="../assets/imgs/objetivo_home/bg_lines.png" alt="" class="benefits-detail">
            <div class="benefits-main-section">
                <div class="d-flex justify-content-around mb-2">
                    <Benefits
                        text="PROYECCIÓN NACIONAL E INTERNACIONAL EN UNA INICIATIVA DE INDUSTRIA"
                        color="purple"
                    >
                      <template slot="textReverse">
                        Visibilidad nacional e internacional de agencias con <span class="font-weight-bold">servicios digitales en México</span> que han validado sus servicios con el apoyo de una reconocida firma de consultoría.
                      </template>
                    </Benefits>
                    <Benefits
                        text="VERSIÓN IMPRESA Y DIGITAL A TRAVÉS DEL SITIO WEB"
                        color="light-purple"
                    >
                      <template slot="textReverse">
                        El <span class="font-weight-bold">Directorio de Agencias con Servicios Digitales</span> estará disponible dentro de un sitio web dedicado a darle visibilidad a las agencias socios y sus servicios digitales validados por la firma de Consultoría.
                      </template>
                    </Benefits>
                    <Benefits
                        text="RESPALDO DE PWC MÉXICO PARA VERIFICACIÓN DE SERVICIOS DIGITALES OFRECIDOS"
                        color="red"
                    >
                        <template slot="textReverse">
                          La información recopilada será validada por una firma de consultoría ajena a IAB México. Esta <span class="font-weight-bold">información será de carácter confidencial</span> y para uso exclusivo de la casa consultora, quien compartirá a IAB México los datos agregados para subir y presentar en el <span class="font-weight-bold">Directorio de Agencias con Servicios Digitales 2018-2019</span>.
                        </template>
                    </Benefits>
                </div>
                <div class="d-flex justify-content-around">
                    <Benefits
                        text="CAMPAÑA DE PUBLICIDAD Y RP DEL DIRECTORIO EN 2018 Y 2019"
                        color="red"
                    >
                      <template slot="textReverse">
                        Su lanzamiento estará acompañado de esfuerzos en pauta publicitaria en plataformas digitales y medios impresos
                      </template>
                    </Benefits>
                    <Benefits
                        text="DISTRIBUCIÓN DEL DIRECTORIO EN IAB CONECTA Y ENCUENTRO C-LEVEL"
                        color="light-purple"
                    >
                      <template slot="textReverse">
                        Distribución impresa del <span class="font-weight-bold">Directorio de Agencias con Servicios Digitales 2018-2019</span> a más de 20 CMO’s de diferentes marcas, Consejo Directivo,
                        P & VP de Mesas y Comités de IAB México.
                      </template>
                    </Benefits>
                    <Benefits
                        text="PARTICIPACIÓN EN SPEED MEETING ZONE AGENCIAS & CLIENTES EN IAB CONECTA 2018"
                        color="purple"
                    >
                      <template slot="textReverse">
                        Una de las novedades más importantes de la <span class="font-weight-bold">Zona Expo en IAB Conecta será el espacio de Speed Meeting</span>, el cual está dedicado a generar networking entre agencias con servicios digitales y clientes potenciales interesados. Los participantes del Directorio de Agencias con Servicios
                        Digitales tienen un lugar asegurado en alguno de los bloques de esta dinámica.
                      </template>
                    </Benefits>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="general-alignments">
        <TitlePurple text="Lineamientos" highlight="Generales"/>
        <div class="general-alignments-container">
            <div class="position-relative swiper-container-a-buttons">
                <div class="swiper-button-next" />
                <div class="swiper-button-prev" />
                <div class="general-alignments-main-section mt-5">
                    <div class="swiper-container swiper-container-a">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <Alignments :hasButtonSection="true"
                                    :number="1"
                                    textButton="Me interesa"
                                    @action="click">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_01.png" alt="">
                                    </template>
                                    <template slot="text">
                                        Sólo Agencias Socias de IAB México pueden ser parte de este directorio.
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="2">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_02.png" alt="">
                                    </template>
                                    <template slot="text">
                                        Cubrir un pago por Agencia de $25,000 + IVA MXN, como costo de recuperación del proyecto, para recibir el formulario de registro.
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="3">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_03.png" alt="">
                                    </template>
                                    <template slot="text">
                                        Toda información y documentación ingresada en este cuestionario es <span class="font-weight-bold">confidencial</span> y sólo estará disponible los datos agregados a través de la firma de Consultoría.
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="4">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_04.png" alt="">
                                    </template>
                                    <template slot="text">
                                        Una vez llenado y finalizado el formulario <span class="font-weight-bold">NO</span> podrán realizarse cambios en la información reportada, a menos que sea requerido por la firma de Consultoría.
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments :hasButtonSection="true"
                                    :number="5"
                                    textButton="Consulta el Glosario aquí"
                                    @action="$router.push('/servicios-digitales')">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_05.png" alt="">
                                    </template>
                                    <template slot="text">
                                        La documentación que apoyará la validación de los servicios digitales y sometida a revisión por la firma de Consultoría son: <span class="font-weight-bold">facturas, contratos y/o cartas membretadas firmadas por el cliente.</span>
                                        <div class="quote">
                                            • En cada uno de los documentos mencionados, deberá estar especificado el o los servicio(s) otorgado(s). Consulta el Glosario aquí
                                        </div>
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="6">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_06.png" alt="">
                                    </template>
                                    <template slot="text">
                                        Si presentas factura, deberá tener un monto <span class="font-weight-bold">mínimo de $100,000 + IVA M.N.</span> detallando claramente el servicio prestado.
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="7">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_07.png" alt="" class="vertical-image" />
                                    </template>
                                    <template slot="text">
                                        Cada servicio digital debe tener el respaldo de al menos <span class="font-weight-bold">dos clientes</span> que confirmen dicho servicio prestado. Sotemplate el servicio será considerado por la firma de Consultoría para incluirlo en el Directorio.
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="8">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_08.png" alt="" class="vertical-image" />
                                    </template>
                                    <template slot="text">
                                        Cualquier cliente puede validar <span class="font-weight-bold">más de un servicio.</span>
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="9">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_09.png" alt="" />
                                    </template>
                                    <template slot="text">
                                        El servicio digital deberá haber ocurrido a <span class="font-weight-bold">más tardar 1 año y medio</span> antes de la fecha de ingreso aldirectorio.
                                    </template>
                                </Alignments>
                            </div>
                            <div class="swiper-slide">
                                <Alignments
                                    :number="10">
                                    <template slot="image">
                                        <img src="../assets/imgs/lineamientos/img_lineamiento_10.png" alt="" />
                                    </template>
                                    <template slot="text">
                                        Ser parte del directorio tiene una <span class="font-weight-bold">vigencia de 2 años.</span>
                                    </template>
                                </Alignments>
                            </div>
                        </div>
                    </div>
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
import Benefits from "@/components/Benefits";
import Alignments from "@/components/Alignments";
import StepsBenefits from "@/components/StepsBenefits";
import Overlay from "@/components/Overlay";
import ContactForm from "@/components/ContactForm";
import Swiper from "swiper";

export default {
  components: {
    Header,
    Footer,
    TitlePurple,
    AgenceBlock,
    Benefits,
    Alignments,
    StepsBenefits,
    Overlay,
    ContactForm
  },
  props: {
    action: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      displayMenu: "none",
      displayForm: true,
    };
  },
  watch: {
    action: function () {
      this.actionChange();
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
    clickCallback(){
      this.displayForm = false;
    },
    actionChange() {
    //   console.log(this.$route.params.action);
      if(this.action == 'form') {
        this.click()
      }
    }
  },
  mounted() {
    this.actionChange();
    const swiperAlignments = new Swiper(".swiper-container-a", {
      navigation: {
        nextEl: ".swiper-container-a-buttons .swiper-button-next",
        prevEl: ".swiper-container-a-buttons .swiper-button-prev"
      },
      freeMode: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
      breakpoints: {
        575: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
        }
      }
    });
    const swiperSteps = new Swiper(".swiper-container-s", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style lang="scss">
@import "~swiper/dist/css/swiper.css";
.formar-parte {
  header {
    background-image: url("../assets/imgs/headers/header_forma.jpg");
    & .header-main-text {
      line-height: 1.4;
      margin-bottom: 1rem;
    }
    & .header-main-text p:nth-child(1) {
      font-size: 6em;
      font-weight: 700;
      @media (max-width: 575px) {
        font-size: 30px;
      }
      @media (min-width: 575.98px) and (max-width: 820px) {
        font-size: 60px;
      }
    //   font-family: "Montserrat", sans-serif;
    }
    & .header-main-text p:nth-child(2) {
      font-size: 9em;
      font-weight: 700;
      margin: 0;
      line-height: .8;
      letter-spacing: 1.5px;
      @media (max-width: 575px) {
        font-size: 3em;
        margin-top: 30px;
      }
      @media (min-width: 575.98px) and (max-width: 820px) {
        font-size: 6em;
        margin-top: 24px;
      }
    }
    // & .header-secondary-text p:nth-child(1) {
    //   font-size: 16px;
    //   font-weight: 300;
    //   line-height: 1.4;
    //   font-family: "Montserrat-Light", sans-serif;
    //   margin-bottom: 4rem;
    //   text-shadow: 2px 2px black;
    //   letter-spacing: 1px;
    // }
    & .header-button {
      cursor: pointer;
    //   max-width: 50%;
      margin: 0 auto;
      display: block;
      width: 90%;
    }
  }

  /* OVERLAY REGISTRAME */
  button {
    background-color: #4a4a4a;
    border-radius: 40px;
    color: #f5f5f6;
    width: 304px;
    height: 56px;
    cursor: pointer;
    text-align: center;
    outline: none;
    margin-top: 20px; //se agrega separacion en el boton enviar.
  }

  /* OVERLAY CONFIRMATION */

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

  .overlay {
      @media (max-width: 575.98px) {
          background-color: white !important;
      }
      .corner-overlay {
          height: 37vh;
          width: 50vw;
      }
      .overlay-content {
          @media (max-width: 575.98px) {
            //   margin-top: 90px;
              left: 0;
          }
      }
  }
  .inscription {
    padding-left: 10px;
    padding-right: 10px;
  }

  /* STEPS OF PARTICIPATING */

  .steps-container {
    width: 100%;
    height: 831px;
    background-image: url("../assets/imgs/pasos/bg.png");
    background-position: center top;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% 100%;
    //margin-top: -130px;
    @media (max-width: 575.98px) {
      height: auto;
    }
    .steps-benefits {
      @media (max-width: 575.98px) {
        width: 100%;
      }
    }
    .swiper-container-s {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
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
      align-items: start;
    }
    .swiper-button-next {
      background-image: url("../assets/imgs/navegacion/row_right_hover_b.png");
      width: 50px;
      right: 180px;
      @media (max-width: 575.98px) {
        top: 250px;
        right: 2px; //10
      }
    }
    .swiper-button-prev {
      background-image: url("../assets/imgs/navegacion/row_left_hover_b.png");
      width: 50px;
      left: 120px;
      @media (max-width: 575.98px) {
        top: 250px;
        left: 2px; //10
      }
    }
  }

  /*    BENEFITS    */

  .benefits-main-section-container {
    background-image: url("../assets/imgs/benefecios/bg.png");
    background-repeat: no-repeat;
    background-position: 30%, 50%;
    /* -webkit-background-size: cover; */
    background-size: 100% 78%;
    height: 1000px;
    margin-top: 100px;
    position: relative;
    @media (max-width: 575px) {
      margin-bottom: 50px;
      margin-top: 50px;
      height: auto;
      & > div > div > div {
        flex-direction: column;
      }
      .benefits {
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }

    .benefits-main-section .row:nth-child(1) {
      margin-bottom: 6px;
    }
    .benefits-detail {
      position: absolute;
      z-index: 2;
      right: 56px;
      bottom: 168px;
      width: 430px;
      height: 430px;
      @media (max-width: 575px) {
        width: 50%;
        height: auto;
        right: 0;
        left: auto;
        float: right;
        bottom: 110px;
      }
    }
  }

  /* ALIGNMENTS PART  -------------------- */

  .general-alignments {
    &-container {
      height: 1000px;
      width: 100%;
      padding-top: 80px;
      background-image: url("../assets/imgs/lineamientos/bg.png");
      background-position: center top;
      /* -webkit-background-size: cover; */
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: 100% 78%;
      @media (max-width: 575px) {
        height: auto;
        padding-top: 25px;
      }
      .swiper-container-a {
        width: 100%;
        height: 100%;
      }
      .swiper-button {
        &-next {
          background-image: url("../assets/imgs/navegacion/row_right_hover_a.png");
          right: 5rem;
          outline: none !important;
          @media (max-width: 575px) {
            right: 1rem;
          }
        }
        &-prev {
          background-image: url("../assets/imgs/navegacion/row_left_hover_a.png");
          left: 5rem;
          outline: none !important;
          @media (max-width: 575px) {
            left: 1rem;
          }
        }
        &-disabled {
          display: none;
        }
      }
    }
    &-main-section {
      max-width: 230px * 4 + 10 * 3;
      margin: 0 auto;
    }
  }
}
</style>
