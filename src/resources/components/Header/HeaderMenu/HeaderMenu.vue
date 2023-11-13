<template>
  <div id="menu-items-main">
    <div class="category-text-parent text-center">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            class="category-text--icon"
            prepend-icon="mdi mdi-shape-outline"
            variant="text"
            v-bind="props"
          >
            دسته بندی
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(cat, index) in categories" :key="index">
            <v-list-item-title>{{ cat.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
