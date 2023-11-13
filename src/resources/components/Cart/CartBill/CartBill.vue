<template>
  <div id="cart-bill-main">
    <div class="bill-title-parent">
      <h3 class="bill-title">صورت حساب</h3>
    </div>

    <div class="discount--form-parent">
      <div class="discount-form-title-parent">
        <h3 class="discount-code-title">کد تخفیف</h3>
      </div>

      <div class="discount-form-parent">
        <v-text-field class="input-discount-code" type="input"> </v-text-field>
        <div class="submit-btn-parent">
          <v-btn
            class="submit-text-btn"
            variant="flat"
            color="#0da487"
            size="small"
          >
            ثبت
          </v-btn>
        </div>
      </div>
    </div>

    <div class="discount-details-parent">
      <div class="total-cart-parent">
        <h3 class="total-title">جمع کل</h3>

        <h3>۱۲۵۰۰۰ تومان</h3>
      </div>

      <div class="total-cart-parent">
        <h3 class="total-title">کد تخفیف</h3>

        <h3>۰ تومان</h3>
      </div>

      <div class="total-cart-parent post-cost">
        <h3 class="total-title">هزینه پست</h3>

        <h3>۶۰۰۰ تومان</h3>
      </div>

      <div class="total-cart-parent">
        <h2 class="total-title">جمع نهایی</h2>

        <h2>۱۳۲۲۰۰ تومان</h2>
      </div>
    </div>

    <div class="payment--back-shop-btn-parent">
      <div class="payment-btn-parent">
        <v-btn
          class="payment-text-btn"
          variant="flat"
          color="#ff5353"
          size="small"
          @click="$router.push({ name: 'payment' })"
        >
          پرداخت
        </v-btn>
      </div>

      <div class="back-shop-btn-parent">
        <v-btn
          class="back-text-btn"
          variant="flat"
          color="#ececec"
          size="small"
        >
          بازگشت به فروشگاه
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style src="./CartBill.scss" lang="scss"></style>
<script src="./CartBill.js"></script>
