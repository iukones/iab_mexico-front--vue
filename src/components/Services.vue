<template>
  <div :class="`services-c col-${colWidth} order-${order} mb-3 ${textDescription !== '' ? 'services-c--clickable' : ''}`" @click="growCardUp">
    <div v-show="colWidth===6 || colWidth===3">
      <div class="d-flex justify-content-center">
        <div class="image-container d-flex align-items-end">
          <slot name="picture"></slot>
        </div>
      </div>
      <div class="row text-content mt-2">
        <div class="col-1 offset-3">
          <div class="d-flex align-items-center red-detail-container">
            <div class="red-detail"></div>
          </div>
        </div>
        <div class="col-6">
          <p class="mb-0">{{text}}</p>
        </div>
      </div>
    </div>
    <div v-show="colWidth===12">
      <div class="row row--flipped">
        <div class="flipped-content px-4 pt-4">
          <a role="button" href="javascript:void(0)" class="closebtn" @click="growCardDown">
            <img class="close-detail" src="../assets/imgs/navegacion/ico_cerrar.png" alt="">
          </a>
          <div class="row">
            <div class="picture px-1 mr-md-3">
              <slot name="picture"></slot>
            </div>
            <div>
              <div :class="`d-flex align-items-center red-detail-container justify-content-end ${hasPt3 ? '' : 'no-pt'}`">
                <div class="red-detail"></div>
              </div>
            </div>
            <div :class="`${hasPt3 ? 'pt-3' : ''} title-container`">
              <h1>{{text}}</h1>
            </div>
          </div>
          <p class="mt-md-3">{{textDescription}}</p>
          <div class="d-flex justify-content-center">
            <router-link :to="`/agencias?servicio=${slug}`" class="purple-button mb-3 my-md-3">Agencias</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textDescription: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    hasPt3: {
      type: Boolean,
      default: true
    },
    openCallback: {
      type: Function,
      required: true
    },
    order: {
      type: Number,
      required: true
    },
    closeCallback: {
      type: Function,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    colWidth: {
      type: Number,
      default: 6
    }
  },
  methods: {
    growCardUp() {
      this.openCallback(this.id);
    },
    growCardDown(e) {
      this.closeCallback();
      e.stopPropagation();
    }
  }
};
</script>


<style lang="scss" scoped>
.services-c.col-12 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.services-c--clickable {
  cursor: pointer;
}

.service-title {
  display: flex;
  @media (max-width: 575px) {
    display: block;
    margin-top: 25px;
    img {
      float: left;
      width: 75px;
    }
  }
}

.service-description {
  background-image: linear-gradient(
    -180deg,
    rgba(133, 61, 186, 0.15) 0%,
    rgba(129, 60, 181, 0.09) 44%,
    rgba(92, 52, 132, 0.06) 100%
  );
  padding: 30px;
  @media (max-width: 575px) {
    padding: 20px 10px;
    margin: 10px;
  }
  & h1 {
    font-size: 50px;
    color: #4a4a4a;
    margin-left: 30px;
    font-weight: 400;
    @media (max-width: 575px) {
      font-size: 30px;
    }
  }
  & p {
    padding-top: 30px;
  }
}

.service-close-icon {
  width: 25px;
  position: absolute;
  right: 30px;
}
.image-container {
  height: 180px;
}

.text-content {
  text-transform: uppercase;
  p {
    @media (max-width: 575.98px) {
      font-size: 3.7vw;
    }
  }
}
.red-detail-container {
  height: 28px;
  @media (max-width: 575.98px) {
    width: 2.7vw;
  }
  &.no-pt {
    margin-top: -1rem;
  }
}
.row--flipped {
  .flipped-content {
    width: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(48, 35, 174, 0.3),
      rgba(200, 109, 215, 0.03)
    );
    @media (max-width: 575.98px) {
      height: initial;
    }
    .red-detail-container {
      @media (max-width: 575.98px) {
        height: 10vh;
        width: initial;
      }
      height: 6.5vw;
      .red-detail {
        @media (max-width: 575.98px) {
          width: 13px;
        }
        width: 64px;
        height: 10px;
        float: right;
      }
    }
    .purple-button {
      @media (max-width: 575.98px) {
        margin-top: 8rem;
      }
    }
  }
  .closebtn {
    float: right;
  }
  .title-container {
    max-width: 35%;
    @media (max-width: 575.98px) {
      max-width: 60%;
      margin-left: 10px;
    }
    h1 {
      @media (max-width: 575.98px) {
        font-size: 30px;
      }
    }
  }
  .picture {
    @media (max-width: 575.98px) {
      flex: 0 0 25%;
      // max-width: 25%;
      max-width: 17%;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>