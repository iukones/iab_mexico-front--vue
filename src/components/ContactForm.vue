<template>
  <div class="contact-form">
    <div class="row position-relative ">
      <div class="col-sm-12 col-lg-8 offset-lg-2">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        <br>
        <div class="fields d-flex px-0 pl-5 flex-column align-items-center">
            <input class="name mb-4" type="text" placeholder="Nombre completo" ref="name">
            <input class="company-name mb-4" type="text" placeholder="Empresa" ref="company">
            <input class="mail mb-4" type="e-mail" placeholder="Correo electrónico" ref="email">
        </div>
        <div class="d-flex flex-column  align-items-left">
            <div class="">
                <input class="privacy" type="checkbox" ref="accepted_privacy" >
                <span class="ml-2 privacity-message" href="#">
                  He leído y acepto el <a href="http://www.iabmexico.com/globlal-nav/aviso-de-privacidad/" target="_blank">Aviso de privacidad</a>
                </span>
            </div>
        </div>
        <div class="button-save d-flex flex-column align-items-end">
            <button class="save" ref="submitButton" type="submit" @click="submit">Enviar</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const axios = require('axios');
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    clickCallBack: {
      type: Function,
      required: false
    },
    type: {
      type: String,
      default: "agency"
    },
    agency: {
      type: String,
      default: ""
    }
  },
  methods: {
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submit(){
      let name = this.$refs.name.value;
      let email = this.$refs.email.value;
      let company = this.$refs.company.value;
      let privacy = this.$refs.accepted_privacy.checked;
      let button = this.$refs.submitButton;

      if (!name || !email || !this.validateEmail(email) || !company || !privacy){
        if (!privacy) {
          alert("Para ponerte en contacto debes aceptar los términos y condiciones.");
        }
        alert("Por favor rellena todos los campos con información válida.");
        return
      }
      button.disabled = true;
      button.innerText = 'Enviando';
      axios.post(
        'https://us-central1-directorio-agencias.cloudfunctions.net/mail_contact/',
        {subject: "Test from page", type: this.type, name, company, email, agency: this.agency}
        ).then((r) => {
          button.disabled = false;
          button.innerText = "Enviar"
          this.$emit('success', {})
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  max-width: 1240px;
  margin: auto;
  color: #4a4a4a;
  @media (max-width: 575.98px) {
    width: 100%;
  }
  .row {
    z-index: 3;
  }
  h1 {
    font-size: 36px;
    text-transform: uppercase;
    margin-top: 25px; //se agrega altura para movil en landscape
    @media (max-width: 575.98px) {
      font-size: 25px;
    }
  }
  p {
    font-size: 20px;
    @media (max-width: 575.98px) {
      text-align: left;
    }
  }
  .fields {
    @media (max-width: 575.98px) {
      padding-left: 0 !important;
    }
    input {
      height: 88px;
      width: 600px;
      border: 1px solid #5c3484;
      border-radius: 40px;
      @media (max-width: 575.98px) {
        height: 50px;
        width: 100%;
      }
    }
    input:focus {
      outline: none;
    }
    .name {
      background: #ffffff url("../assets/imgs/icon/ico_imput_num_pers.png")
        no-repeat scroll 20px 28px;
      padding-left: 60px;
      font-size: 20px;
      @media (max-width: 575.98px) {
        background-position: 20px 10px;
      }
    }
    .company-name {
      background: #ffffff url("../assets/imgs/icon/ico_imput_agencia.png")
        no-repeat scroll 20px 30px;
      padding-left: 60px;
      font-size: 20px;
      @media (max-width: 575.98px) {
        background-position: 20px 10px;
      }
    }
    .mail {
      background: #ffffff url("../assets/imgs/icon/ico_imput_correo.png")
        no-repeat scroll 20px 35px;
      padding-left: 56px;
      font-size: 20px;
      @media (max-width: 575.98px) {
        background-position: 20px 15px;
      }
    }
  }
  .privacity-message {
    font-size: 16px;
  }
  .corner-overlay--bottom {
    z-index: 1;
    left: 43vw;
    background-image: url("../assets/imgs/benefecios/bg_lines.png");
    height: 57vh;
    top: -351px;
  }
  .button-save {
    width: 600px;
    @media (max-width: 575.98px) {
      margin-top: 25px;
      width: 100%;
    }
  }
  button {
    background-color: #4a4a4a;
    border-radius: 40px;
    color: #f5f5f6;
    width: 304px;
    height: 56px;
    cursor: pointer;
    text-align: center;
    outline: none;
    @media (max-width: 575.98px) {
      width: 100%;
    }
  }
  .actual-number-section {
    display: block;
    margin: 0 auto;
    width: 310px;
    margin-right: 30px;
    margin-top: 40px;
    li {
      display: inline;
      font-family: Montserrat;
      font-size: 42px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #f84d47;
      margin: 0 2px;
      padding: 0 6px;
      padding-bottom: 6px;
    }
  }

  .number-selected {
    border-bottom: 5px solid #5c3484;
  }
}
</style>



