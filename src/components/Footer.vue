<template>
  <footer>
    <div class="footer-images-container">
        <div class="row">
            <div class="col-3">
                <a href="https://www.facebook.com/iabmexico/">
                    <div class="footer-menu-image footer-menu-image-1"></div>
                </a>
            </div>
            <div class="col-3">
                <a href="https://www.youtube.com/user/iabmexico">
                    <div class="footer-menu-image footer-menu-image-2"></div>
                </a>
            </div>
            <div class="col-3">
                <a href="https://www.twitter.com/iabmexico/">
                    <div class="footer-menu-image footer-menu-image-3"></div>
                </a>
            </div>
            <div class="col-3">
                <a href="https://mx.linkedin.com/company/iab-m-xico">
                    <div class="footer-menu-image footer-menu-image-4"></div>
                </a>
            </div>
        </div>
    </div>
    <p class="footer-text">IAB MÉXICO 2018</p>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  height: 232px;
  background-image: url("../assets/imgs/footer/footer.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .footer {
    &-images-container {
      display: block;
      margin: 0 auto;
      max-width: 400px;
      padding-top: 106px;
    }
    &-text {
      margin-top: 16px;
      color: white;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    &-menu-image {
      display: block;
      margin: 0 auto;
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-attachment: scroll;
      background-position: center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      &-1 {
        background-image: url("../assets/imgs/footer/ico_Facebook.png");
        &:hover {
          background-image: url("../assets/imgs/footer/ico_Facebook_hover.png");
        }
      }

      &-2 {
        background-image: url("../assets/imgs/footer/ico_youtube.png");
        &:hover {
          background-image: url("../assets/imgs/footer/ico_youtube_hover.png");
        }
      }

      &-3 {
        background-image: url("../assets/imgs/footer/ico_Twitter.png");
        &:hover {
          background-image: url("../assets/imgs/footer/ico_Twitter_hover.png");
        }
      }

      &-4 {
        background-image: url("../assets/imgs/footer/ico_instagram.png");
        &:hover {
          background-image: url("../assets/imgs/footer/ico_instagram_hover.png");
        }
      }
    }
  }
}
</style>

