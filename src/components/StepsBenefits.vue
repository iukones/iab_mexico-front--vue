<template>
  <div class="steps-benefits">
    <div class="number-section">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12">
                        <p class="mt-5 mb-5">{{numberInCycle}}</p>
                    </div>
                </div>
            </div>
            <div class="change-section">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-4">
                        <slot name="image"></slot>
                    </div>
                    <div class="col-12 col-sm-12 col-md-7">
                        <div class="change-section-detail"></div>
                        <p class="mb-0">{{text}}</p>
                        <a :href="buttonLink" target="_blank" @click="$emit('action', {})" v-if="hasButtonSection">
                            <p  class="purple-button change-section-purple-button-margin">
                                {{textButton}}
                            </p>
                        </a>
                        <a :href="buttonLink" target="_blank" @click="$emit('action', {})" v-if="hasActionButtonSection">
                            <p  class="purple-button change-section-purple-button-margin">
                                {{textButton}}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            table: [1,2,3,4,5,6]
        }
    },
    props: {
        numberInCycle: {
            type: Number, 
            required: true
        },
        text: {
            type: String,
            required: true
        },
        hasButtonSection: {
            type: Boolean, 
            default: false
        },
        hasActionButtonSection: {
            type: Boolean, 
            default: false
        },
        textButton: {
            type: String, 
            default: ""
        },
        numberSelected: {
            type: Number, 
            required: true
        },
        buttonLink: {
            type: String,
        }
    }
};
</script>

<style lang="scss" scoped>
.steps-benefits {
  .number-section {
    max-width: 1100px;
    display: block;
    margin: 0 auto;
    p {
      width: 82px;
      font-size: 53px;
      line-height: normal;
      text-align: center;
      background-color: #671f85;
      color: #f5f5f6;
      border: solid 9px #ffffff;
      border-radius: 60px;
      margin-bottom: 0px;
      float: right;
      &.mt-5.mb-5 {
        @media (max-width: 575.98px) {
          margin-bottom: 0 !important;
        }
      }
    }
  }

  .change-section {
    max-width: 1100px;
    display: block;
    margin: 0 auto;
    img {
      width: 263px;
      display: block;
      margin: 0 auto;
    }
    &-detail {
      width: 90px;
      height: 13px;
      background-color: #ff0000;
      display: inline-block;
      position: absolute;
      top: 37px;
      @media (max-width: 575.98px) {
        margin-left: 10px;
        width: 13px;
      }
    }
    p:nth-child(2) {
      font-family: "Montserrat";
      font-size: 45px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #4a4a4a;
      margin-left: 100px;
      @media (max-width: 575.98px) {
        margin-left: 10px * 2 + 13;
        padding: 25px 0;
        font-size: 26px;
      }
    }
  }

  .change-section .change-section-purple-button-margin {
    width: 278px;
    top: 80px;
    left: 147px;
    cursor: pointer;
    @media (max-width: 575.98px) {
      top: 0;
      left: 0;
    }
  }

}
</style>


