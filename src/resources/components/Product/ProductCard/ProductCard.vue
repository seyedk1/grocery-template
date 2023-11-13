<template>
  <div class="product-card-main" @click="navigateProductDetail(product)">
    <div
      class="product-card"
      :class="{ 'product-card-shop': $route.name === 'shop' }"
    >
      <div class="product-image-parent">
        <v-img
          height="100"
          width="100"
          :src="`/src/assets/images/products/${product.image}.png`"
        ></v-img>
      </div>

      <div class="product-details-parent">
        <div class="star-rating-parent">
          <v-rating
            v-model="rating"
            color="yellow-darken-3"
            size="small"
            readonly
          ></v-rating>
        </div>

        <div class="product-name-parent my-1">
          <h5 class="product-name">{{ product.name }}</h5>
        </div>

        <div class="product-price-parent my-1">
          <h5 class="product-price">{{ product.price }} تومن</h5>
        </div>

        <div
          class="cart--qty-parent my-1"
          :class="{ 'cart--qty-parent-shop': $route.name === 'shop' }"
        >
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
          <v-btn icon class="cart-btn-parent" color="#0baf9a" size="35">
            <v-icon style="color: white">mdi-cart-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./ProductCard.scss" lang="scss" scoped></style>
<script src="./ProductCard.js"></script>
