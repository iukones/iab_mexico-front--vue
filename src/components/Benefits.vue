<template>
  <div class="benefits" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click="click">
    <div :class="isReversed ? 'desktop-hide' : ''">
        <div :class="`data-info-container data-info-container--${color}`">
            <p :class="`data-info-text data-info-text--${color}`">{{text}}</p>
            <div :class="`data-info-detail data-info-detail--${color}`"></div>
        </div>
    </div> 
    <div v-show="isReversed">
        <div :class="`data-info-container data-info-container--${color}`">
          <div :class="`data-info-detail data-info-detail--${color} data-info-detail--reversed`"></div>
            <p :class="`data-info-text data-info-text--${color}  data-info-text--reversed`"><slot name="textReverse"></slot></p>
        </div>
    </div>     
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReversed: false
    }
    
  },
  props: {
    color: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onMouseEnter() {
      this.isReversed = true
    },
    onMouseLeave() {
      this.isReversed = false
    },
    click() {
      this.isReversed = !this.isReversed;
    }
  }
};
</script>

<style lang="scss" scoped>
.benefits {
  .data-info-container {
    width: 408px;
    height: 281px;
    position: relative;
    padding: 16px 12px;
    cursor: pointer;
    &--purple {
      background-color: #d8cee5;
    }
    &--light-purple {
      background-color: #eee7f1;
    }
    &--red {
      background-color: #ffe9e9;
    }
    @media (max-width: 575px) {
      height: auto;
      width: 100%;
    }
    .data-info-text {
      text-transform: uppercase;
      font-size: 23px;
      &--purple {
        color: #5c3484;
      }
      &--light-purple {
        color: #4f4290;
      }
      &--red {
        color: #f84d47;
      }
      @media (max-width: 575px) {
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
    .data-info-detail {
      width: 50%;
      height: 36px;
      position: absolute;
      bottom: 0px;
      right: 0px;
      &--purple {
        border-top: 2px solid #5c3484;
      }
      &--light-purple {
        border-top: 2px solid #4f4290;
      }
      &--red {
        border-top: 2px solid #f84d47;
      }
      @media (max-width: 575px) {
        height: 15px;
      }
    }
    .data-info-text--reversed {
      font-size: 0.9rem;
      text-transform: none;
    }
    .data-info-detail--reversed {
      width: 53%;
      height: 36px;
      position: relative;
      bottom: 0px;
      left: 192px;
      @media (max-width: 575px) {
        display: none;
      }
    }
  }
  @media (min-width: 575.98px) {
    .desktop-hide {
      display: none;
    }
  }
}
</style>


