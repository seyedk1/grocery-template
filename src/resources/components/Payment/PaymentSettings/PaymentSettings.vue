<template>
  <v-radio-group v-model="whichPost">
    <div class="card-post-parent">
      <div class="card-post-content">
        <v-radio color="#0da487" class="radio-card"></v-radio>

        <div class="card-title-parent">
          <h3 class="card-title">ارسال پست سفارشی</h3>
        </div>

        <div class="cost-parent">
          <div class="deliver-parent">
            <h4 class="deliver-title">
              ۳ مورد: <span class="deliver-value"> ۳۶.۰۰۰</span>
            </h4>
          </div>

          <div class="deliver-parent">
            <h4 class="deliver-title">
              هزینه تحویل <span class="deliver-value">۲۸.۲۰۰</span>
            </h4>
          </div>
        </div>

        <div class="select-time-parent">
          <v-autocomplete
            label="انتخاب زمان"
            :items="[
              'امروز 10:00 صبح - 6:00 عصر',
              'جمعه 10:00 صبح - 6:00 عصر',
              'شنبه 10:00 صبح - 6:00 عصر',
            ]"
            variant="outlined"
          ></v-autocomplete>
        </div>
      </div>
    </div>
  </v-radio-group>
</template>

<style src="./PaymentSettings.scss" lang="scss"></style>
<script src="./PaymentSettings.js"></script>
