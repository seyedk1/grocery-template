<template>
  <div class="address-cards-parent col-lg-12">
    <div class="address-card-parent col-lg-4">
      <div class="card-title-parent">
        <h4 class="card-title">
          عنوان: <span class="title-value"> خانه</span>
        </h4>
      </div>

      <div class="card-address-details-parent">
        <ul class="address-details">
          <li class="each-info">
            آدرس:
            <span class="each-info-value"
              >بلوار سیدرضی، سید رضی ۵۳ قاسمی ۶</span
            >
          </li>
          <li class="each-info">
            شهر: <span class="each-info-value">مشهد</span>
          </li>
          <li class="each-info">
            کد پستی: <span class="each-info-value">۹۱۹۷۹۷۵۴۱۹</span>
          </li>
          <li class="each-info">
            شماره تماس: <span class="each-info-value">۰۹۳۰۵۱۰۷۷۲۴</span>
          </li>
        </ul>
      </div>

      <div class="edit-delete-parent">
        <v-btn class="edit-delete-style" variant="flat">
          <template v-slot:prepend>
            <svg-icon
              type="mdi"
              :path="path[0]"
              color="#222"
              size="20"
              class="btn-icon"
            ></svg-icon>
          </template>
          ویرایش
        </v-btn>

        <v-btn class="edit-delete-style" variant="flat">
          <template v-slot:prepend>
            <svg-icon
              type="mdi"
              :path="path[1]"
              color="#222"
              size="20"
              class="btn-icon"
            ></svg-icon>
          </template>
          حذف
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style src="./ProfileAddress.scss" lang="scss"></style>
<script src="./ProfileAddress.js"></script>
