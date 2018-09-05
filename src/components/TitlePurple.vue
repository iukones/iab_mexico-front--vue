<template>
  <div class="title-purple">
    <div class="title__section">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="title">
                        <img class="title-lines-detail" src="../assets/imgs/objetivo_home/bg_lines.png" alt="">
                        <p>{{text}}
                            <span class="special-highlight">{{highlight}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    },
    highlight: {
      type: String,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
.title-purple {
  .title {
    width: 390px;
    height: 180px;
    box-sizing: border-box;
    margin-left: 60px;
    border-bottom: 6px solid #ff2d38;
    display: block;
    @media (max-width: 575.98px) {
      margin-left: 0;
      overflow: hidden;
      height: 125px;
      width: 90%;
    }
  }
  .title-lines-detail {
    width: 174px;
    @media (max-width: 575.98px) {
      width: 105px;
    }
  }

  .title p {
    display: block;
    font-size: 62px;
    transform: translate(0, -50%);
    padding: 4px 10px;
    position: absolute;
    top: 90px;
    @media (max-width: 575.98px) {
      left: 10px;
      top: 50px;
      font-size: 32px;
      text-align: left;
      .special-highlight {
        display: block;
        margin-left: -7px;
        padding: 0 20px 0 10px;
      }
    }
    left: 130px;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>

