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
        <li class="menu-item" v-for="(item, index) in menuItems" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="./HeaderMenu.scss" lang="scss" scoped></style>
<script src="./HeaderMenu.js"></script>
