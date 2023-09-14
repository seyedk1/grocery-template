<template>
  <div id="footer-main">
    <div class="footer-up-parent">
      <!--start fast-cart-logo-parent-->
      <v-col class="common-class fast-cart-logo-parent">
        <div class="logo-parent my-2">
          <v-img
            src="/src/assets/images/logo/logo.png"
            width="50"
            height="auto"
            class="logo-image-style img-fluid"
          ></v-img>
        </div>
        <div class="text-parent my-2">
          <p class="text-content">
            این یک واقعیت ثابت شده است که خواننده حواسش پرت می شود با محتوای
            خواندنی.
          </p>
        </div>

        <div class="social-media-parent my-2">
          <v-btn
            icon="mdi mdi-pinterest"
            size="small"
            class="icon-style mx-1"
          ></v-btn>
          <v-btn
            icon="mdi mdi-instagram"
            size="small"
            class="icon-style mx-1"
          ></v-btn>
          <v-btn
            icon="mdi mdi-twitter"
            size="small"
            class="icon-style mx-1"
          ></v-btn>
          <v-btn
            icon="mdi mdi-google"
            size="small"
            class="icon-style mx-1"
          ></v-btn>
          <v-btn
            icon="mdi mdi-facebook"
            size="small"
            class="icon-style mx-1"
          ></v-btn>
        </div>
      </v-col>
      <!--end fast-cart-logo-parent-->

      <!--start footer-columns-parent-->
      <v-col
        class="common-class footer-columns-parent"
        v-for="item in footerItems"
        :key="item.id"
      >
        <div class="title-parent">
          <h3 class="title">{{ item.title }}</h3>
        </div>

        <ul class="elements-parent">
          <li class="each-element" v-for="(element, i) in item.items" :key="i">
            <svg-icon type="mdi" :path="path"></svg-icon>
            {{ element.name }}
          </li>
        </ul>
      </v-col>
      <!--end footer-columns-parent-->
    </div>
    <div class="footer-down-parent"></div>
  </div>
</template>

<style src="./Footer.scss" lang="scss" scoped></style>
<script src="./Footer.js"></script>
