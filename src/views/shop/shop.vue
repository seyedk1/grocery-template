<template>
  <div id="main-container">
    <HeaderSearch></HeaderSearch>
    <HeaderMenu></HeaderMenu>
    <div class="header-shop-page-title">
      <h2>فروشگاه</h2>
    </div>

    <div class="products-sale-parent">
      <div class="filter-parents">
        <div class="order-by-parent">
          <h5 class="order-by-text">مرتب سازی بر اساس:</h5>
          <v-select
            v-model="select"
            :items="items"
            label="انتخاب کنید"
            single-line
            variant="solo-filled"
            class="select-my-items"
            :direction="direction"
          ></v-select>
        </div>
      </div>

      <ProductSection></ProductSection>
    </div>
    <Footer></Footer>
  </div>
</template>

<style src="./shop.scss" lang="scss" scoped></style>
<script src="./shop.js"></script>
