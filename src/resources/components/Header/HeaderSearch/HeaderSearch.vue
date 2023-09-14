<template>
    <div id="header-main">
      <div class="header-logo-parent">
        <v-img
          src="/src/assets/images/logo/logo.png"
          width="70"
          height="auto"
          class="logo-image-style"
        ></v-img>
      </div>
      <div class="search-parent">
        <v-autocomplete
        :menu-props="{
          border:1 +'px solid #ced4da',
          borderRadius:0.25+'rem'
        }"
          auto-select-first
          class="placeholder-color-style"
          density="comfortable"
          item-props
          menu-icon=""
          placeholder="جستجوی محصول"
          prepend-inner-icon="mdi mdi-magnify"
          theme="light"
          variant="solo"
        >
          <template #no-data> محصولی یافت نشد </template>
        </v-autocomplete>
      </div>
      <div class="icons--language-parent">
        <ul class="ul-icons">
          <li class="icons-style-li" v-for="(icon, index) in path">
            <svg-icon
              type="mdi"
              width="47"
              height="47"
              :path="icon"
              :key="index"
              class="icon-style"
            ></svg-icon>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <style src="./HeaderSearch.scss" lang="scss" scoped></style>
  <script src="./HeaderSearch.js"></script>
  