<template>
  <div class="head-dashboard-parent">
    <div class="head-title-parent">
      <h2 class="head-title"><slot name="headerTitle"></slot></h2>
      <span class="title-image-parent">
        <v-img
          width="30"
          height="20"
          :src="'/src/assets/images/profile/grocery.svg'"
          class="title-image"
        ></v-img>
      </span>
    </div>

    <slot name="needBtn"></slot>
  </div>
</template>

<style src="./ProfileHeader.scss" lang="scss"></style>
<script src="./ProfileHeader.js"></script>
