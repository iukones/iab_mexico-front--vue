<template>
    <div class="alignments">
            <div class="general-alignments-info-section">
                <div class="info-section-detail"></div>
                <div class="info-number-container">
                  <p class="info-section-number">{{number}}</p>
                </div>
                <div class="image-container">
                  <slot name="image"></slot>
                </div>
                <p class="info-section-text"><slot name="text"></slot></p>
                  <p v-if="hasButtonSection" @click="$emit('action', {})" class="purple-button info-section-button">{{textButton}}</p>
            </div>
    </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
    hasButtonSection: {
      type: Boolean,
      default: false
    },
    textButton: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.alignments {
    .general-alignments-info-section {
      background-color: rgba(216, 216, 216, 0.27);
      padding-right: 10px;
      position: relative;
      height: 500px;
      width: 230px;
      @media (max-width: 575px) {
        min-width: 90%;
        margin-left: 5%;
        margin-right: 5%;
      }
    }
  /* RED DETAIL */
  .info-section-detail {
    width: 8px;
    height: 4px;
    background-color: #ff0000;
    position: absolute;
    top: 195px;
    left: 8px;
  }
  /* NUMBER */
  .info-number-container {
    overflow: hidden;
    position: relative;
    .info-section-number {
      background-color: #f84d47;
      position: relative;
      float: right;
      width: 50px;
      height: 50px;
      text-align: center;
      border: 4px solid white;
      border-radius: 26px;
      color: white;
      font-size: 29px;
      right: 0;
      top: 0;
    }
  }

  /* IMAGE */

  .image-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 160px;
    display: block;
    margin-top: -25px;
    text-align: center;
    img {
      width: 106px;
      margin-left: auto;
      margin-right: auto;
      &.vertical-image {
        height: 106px;
        width: auto;
      }
    }
  }

  /* TEXT */
  .info-section-text {
    color: #4a4a4a;
    font-size: 14px;
    margin-left: 25px;
    margin-top: -15px;
    .quote {
      font-size: 12px;
    }
  }
  /* BUTTON-PURPLE */
  .info-section-button {
    min-width: 85%;
    width: 85%;
    padding: 5px;
    font-size: 12px;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    @media (max-width: 575px) {
      height: 35px;
      padding-top: 8px;
    }
  }
}
</style>


