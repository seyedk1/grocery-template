<template>
  <div id="popular-products-main">
    <div class="popular-products-background">
      <div class="header-popular-products-parent">
        <h3 class="popular-products-header">محصولات پر طرفدار</h3>
      </div>

      <div class="popular-products-list-parent">
        <div
          class="each-popular-product"
          v-for="product in popularProducts"
          :key="product.id"
        >
          <div class="popular-product-image-parent">
            <v-img
              height="60"
              width="60"
              class="image-fluid"
              :src="`/src/assets/images/products/${product.image}.png`"
            ></v-img>
          </div>
          <div class="popular-product-info-parent">
            <div class="popular-product-name-parent">
              <h4 class="product-name">{{ product.name }}</h4>
            </div>
            <div class="popular-product-price-parent">
              <h3 class="product-price">
                {{ product.price + " " + "تومان" }}
              </h3>
            </div>
          </div>
          <div class="popular-product-price-parent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./PopularProducts.scss" lang="scss"></style>
<script src="./PopularProducts.js"></script>
