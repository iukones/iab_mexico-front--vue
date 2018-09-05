<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@font-face {
  font-family: "Montserrat-Medium";
  src: url("./assets/webfonts_Montserrat-Medium/Montserrat-Medium.ttf.woff")
      format("woff"),
    url("./assets/webfonts_Montserrat-Medium/Montserrat-Medium.ttf.svg#Montserrat-Medium")
      format("svg"),
    url("./assets/webfonts_Montserrat-Medium/Montserrat-Medium.ttf.eot"),
    url("./assets/webfonts_Montserrat-Medium/Montserrat-Medium.ttf.eot?#iefix")
      format("embedded-opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url("./assets/webfonts_Montserrat-Medium/Montserrat-Bold.ttf")
    format("ttf");
  font-weight: normal;
  font-style: normal;
}

a,
u {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

body {
  width: 100%;
  margin: 0 !important;
  /* font-family: 'Montserrat', sans-serif !important; */
  font-family: "Montserrat", sans-serif !important;
  overflow-x: hidden;
}

body .row {
  width: 100%;
  margin: 0;
  margin-right: 0px;
  margin-left: 0px;
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.container {
  &--custom {
    max-width: 100%;
    margin: 0px;
  }
  &--1240 {
    max-width: 1240px;
    padding: 0;
  }
}

.special-highlight {
  padding: 4px 10px;
  color: white;
  background: linear-gradient(to right, #682fbc, #cf3fd4);
}

.--special-red {
  color: rgb(248, 77, 71);
}

.--special-purple {
  color: rgb(92, 52, 132);
}

.purple-button {
  font-size: 16px;
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding: 12px;
  font-weight: bold;
  border-radius: 30px;
  min-width: 264px;
  background: linear-gradient(to right, #682fbc, #cf3fd4);
}
.purple-button:hover {
  text-decoration: none;
  color: white;
  background: linear-gradient(to right, rgb(127, 76, 202), rgb(213, 91, 218));
}

.red-detail {
  width: 17px;
  height: 7px;
  background-color: #ff0000;
  /* position: absolute;
    bottom: 58px;
    left: 32px; */
}
</style>
