<template>
  <v-container fluid tag="section" id="home-section-main">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      :show-arrows="false"
      class="slider-styles"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style src="./HomeSection.scss" lang="scss" scoped></style>
<script src="./HomeSection.js"></script>
