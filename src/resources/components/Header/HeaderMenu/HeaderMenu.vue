<template>
  <div id="menu-items-main">
    <div class="category-text-parent">
      <v-btn
        class="category-text--icon"
        prepend-icon="mdi mdi-shape-outline"
        variant="text"
      >
        دسته بندی
      </v-btn>
    </div>
    <div class="menu-items-parent">
      <ul class="menu-items">
        <router-link
          tag="li"
          class="menu-item"
          v-for="(item, index) in menuItems"
          :to="{ name: item.to.name }"
          :key="index"
        >
          {{ item.name }}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style src="./HeaderMenu.scss" lang="scss" scoped></style>
<script src="./HeaderMenu.js"></script>
