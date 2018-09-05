<template>
  <div class="select-input mb-3 mb-md-0">
    <div class="position-relative">
      <div>
          <div :class="`input-datalist-container input-datalist-container--${size} input--${inputSize} d-flex pl-4 py-3`">
              <div class="align-self-center">
                <slot name="image"></slot>
                <input class="input-datalist mx-2" v-model="selectedText" type="text" @click="onInputClick"/>
              </div>
          </div>
      </div>
      <div v-show="showOptionsList" ref="optionList">
          <div :class="`input-datalist-container input-datalist-container--${size} input-datalist-container--open position-absolute d-flex px-2 pt-5 pb-3`" :style="`top: ${optionListTop}`">
              <div class="align-self-center" @click="onLiClick">
                  <div class="select-option d-none d-md-block" :style="`height: ${overlayHeight};top: ${overlayTop}`" />
                  <ul class="pl-3" @mouseover="onLiOver">
                      <li v-for="option in options" :val="option.val || option">{{option.text || option}}</li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "big"
    },
    inputSize: {
      type: String,
      default: "big"
    }
  },
  data() {
    return {
      selectedOption: "",
      selectedText: "",
      showOptionsList: true,
      overlayHeight: "2rem",
      overlayTop: "0px",
      selectedLi: null,
      optionListTop: "-5rem"
    };
  },

  created() {
    // this.selectedOption
    this.selectedText = this.options[0].text || this.options[0];
    if (this.options.length > 8) {
      this.optionListTop = "-10rem";
    }
  },

  mounted() {
    this.overlayHeight = `${
      this.$refs.optionList.querySelector("li").offsetHeight
    }px`;
    this.showOptionsList = false;
    document.body.click = this.closeInput
  },

  beforeDestroy () {
    document.body.click = null
  },

  methods: {
    closeInput(e) {
      console.log(e.target)
    },
    onInputClick() {
      this.showOptionsList = true;
    },
    onLiOver(e) {
      if (e.target.tagName === "LI") {
        this.overlayTop = `${e.target.offsetTop}px`;
        this.selectedLi = e.target;
      }
    },
    onLiClick() {
      this.selectedOption = this.selectedLi.getAttribute('val');
      this.selectedText = this.selectedLi.innerText;
      this.showOptionsList = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-datalist-container {
  white-space: nowrap;
  max-width: 95%;
  border-radius: 40px;
  background: transparent;
  border: 1px solid #5c3484;
  height: 5rem;
  color: #4a4a4a;
  font-size: 16px;
  overflow: hidden;
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 14px;
  }
  @media (max-width: 575.98px) {
    width: 95%;
    max-width: 95% !important;
    margin: 0 auto;
    height: 4rem;
  }
  -webkit-appearance: none;
  &--big {
    // width: 26.5vw;
    @media (max-width: 575.98px) {
      // width: 92vw;
      height: 4rem;
    }
  }
  &--small {
    width: 14vw;
    @media (max-width: 575.98px) {
      width: 45vw;
      height: 4rem;
    }
    &.input-datalist-container .input-datalist {
      min-width: 6.6vw;
      width: 6.6vw;
      margin-left: 1rem !important;
      @media (max-width: 575.98px) {
        min-width: 20vw;
        width: 20vw;
      }
      @media (min-width: 575.98px) and (max-width: 991.98px) {
        margin-left: 0.5rem !important;

        min-width: 1rem;
        max-width: 2rem;
      }
    }
  }
  &--open {
    height: auto;
    border-radius: 48px;
    background-color: #4f4290;
    box-shadow: 4px 6px 11px 0 rgba(0, 0, 0, 0.19);
    z-index: 3;
    li {
      list-style-type: none;
      color: #ffffff;
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.9;
      letter-spacing: normal;
      z-index: 5;
      cursor: pointer;
    }
  }
  .select-option {
    opacity: 0.26;
    background-color: #d8d8d8;
    z-index: 4;
    height: 10rem;
    width: 100%;
    left: -1px;
    position: absolute;
    cursor: pointer;
  }
  .input-datalist {
    border: none;
    color: #4a4a4a;
    // max-width: 90 !important;
    min-width: 18vw;
    @media (max-width: 575.98px) {
      min-width: 67vw;
    }
    @media (min-width: 575.98px) and (max-width: 991.98px) {
      min-width: 5rem;
      // max-width: 8rem; cortaba el texto del input
    }
  }

}
</style>
