<template>
  <div id="main-container">
    <Advertisement></Advertisement>
    <HeaderSearch></HeaderSearch>
    <HeaderMenu></HeaderMenu>
    <PageHeader>فروشگاه > {{ $route.query.productName }}</PageHeader>

    <div id="product-details-main">
      <div class="product-details-right-section col-lg-8">
        <div class="product-images-parent">
          <div class="show-product-image-parent">
            <v-img
              height="350"
              width="350"
              class="image-fluid show-image"
              :src="`/src/assets/images/products/${selectedImage.image}.png`"
            ></v-img>
          </div>

          <v-sheet max-width="545" class="tumbnail-product-images">
            <swiper
              :modules="modules"
              :slides-per-view="4"
              :space-between="25"
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="slider-main tumbnail-slider-images"
            >
              <swiper-slide
                v-for="image in productImages"
                :key="image.id"
                class="each-product-image"
                @click="updateImage(image)"
              >
                <v-img
                  height="100"
                  width="100"
                  class="image-fluid tumbnail-image"
                  :src="`/src/assets/images/products/${image.image}.png`"
                ></v-img
              ></swiper-slide>
            </swiper>
          </v-sheet>
        </div>

        <div class="product-details-information-parent">
          <div class="product-name-parent">
            <h2 class="product-name">{{ $route.query.productName }}</h2>
          </div>

          <div class="product-price-parent">
            <h3 class="product-price">۴۹۰۰۰ تومان</h3>
          </div>

          <div class="product-details-text-parent">
            <p class="product-details-text">
              کیک آب نبات چوبی کیک شکلاتی کیک شکلاتی دسر عناب. شیرینی کوتاه آلو
              شکر پودر دسر کوکی براونی شیرین. کیک کیک پای سیب دسر کیک مافین آلو
              شکر.
            </p>
          </div>

          <div class="product-info-details-li-parent">
            <ul class="product-info-details-box">
              <li class="each-info">
                دسته بندی:
                <p>شیرینیجات</p>
              </li>
              <li class="each-info">
                کد محصول:
                <p>SDFVW65467</p>
              </li>
              <li class="each-info">
                موجود در انبار:
                <p>۲</p>
              </li>
            </ul>
          </div>

          <div class="product-quantity--cart-parent">
            <div class="cart--qty-parent my-1">
              <div class="qty-parent">
                <div class="qty-right-minus">
                  <span class="mdi mdi-minus"></span>
                </div>

                <input
                  type="text"
                  name="quantity"
                  class="form-control input-number"
                  v-model="count"
                />

                <div class="qty-left-plus">
                  <span class="mdi mdi-plus"></span>
                </div>
              </div>
              <v-btn icon class="cart-btn-parent" color="#333" @click="navigationToCart()">
                افزودن به سبد خرید
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="product-details-left-section col-lg-4">
        <PopularProducts></PopularProducts>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style src="./ProductDetails.scss" lang="scss"></style>
<script src="./ProductDetails.js"></script>
