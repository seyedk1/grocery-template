<template>
  <div id="product-section-main">
    <div
      class="product-section-title-parent"
      :class="{ 'product-section-title-parent-shop': $route.name === 'shop' }"
    >
      <h2 class="product-title">محصولات ما</h2>
    </div>

    <div
      class="show-products-section"
      :class="{ 'show-products-section-shop': $route.name === 'shop' }"
    >
      <ProductCard
        v-for="(product, index) in products"
        :product="product"
        :key="index"
      ></ProductCard>
    </div>
  </div>
</template>

<style src="./ProductSection.scss" lang="scss" scoped></style>
<script src="./ProductSection.js"></script>
