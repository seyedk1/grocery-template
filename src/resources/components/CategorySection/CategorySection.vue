<template>
  <section id="category-main">
    <div class="category-section-parent">
      <div class="category-title-parent">
        <h2 class="category-title">دسته بندی های ما</h2>
      </div>
      <div class="category-names-parent">
        <v-slide-group show-arrows class="slider-group-style">
          <v-slide-group-item
            v-for="(cat, index) in categoryImages"
            :key="index"
          >
            <v-col cols="2" class="parent-category-images">
              <router-link class="image-link" to="/">
                <v-img
                  :src="`/src/assets/images/category/${cat.image}.png`"
                  width="100px"
                  hight="100px"
                  class="category-image"
                >
                </v-img>
              </router-link>
              <div class="category-name-parent">
                <p class="category-name">
                  {{ cat.name }}
                </p>
              </div>
            </v-col>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>
  </section>
</template>

<style src="./CategorySection.scss" lang="scss" scoped></style>
<script src="./CategorySection.js"></script>
