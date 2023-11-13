<template>
  <div id="main-container">
    <Advertisement></Advertisement>
    <HeaderSearch></HeaderSearch>
    <HeaderMenu></HeaderMenu>
    <PageHeader> پرداخت </PageHeader>

    <div id="payment-main">
      <div class="select-box-cart-level-parent">
        <div class="all-boxes-parent">
          <div
            class="boxes--icon-parent"
            v-for="box in boxes"
            :key="box.id"
            @click="updatePaymentContainer(box)"
          >
            <div class="box-names-parent">
              <div class="level-text-parent">
                <span class="level-text"> {{ "مرحله " + box.id }} </span>
              </div>
              <div class="content-text-parent">
                <h4 class="content-text">{{ box.title }}</h4>
              </div>
            </div>

            <div class="box-icon-parent">
              <svg-icon
                type="mdi"
                :path="box.icon"
                width="35"
                height="35"
                color="#0da487"
              ></svg-icon>
            </div>
          </div>
        </div>

        <div class="card-level-parent">
          <div class="card-level">
            <div class="card-header-parent">
              <h3 class="card-title">{{ paymentHeaderContainer }}</h3>
              <v-btn
                v-if="paymentBtnContainer"
                class="add-address"
                variant="flat"
                color="#ff5353"
                size="small"
              >
                افزودن
              </v-btn>
            </div>
            <component :is="`${paymentComponentContainer}`"></component>
            <div class="buttons-card-parent">
              <div class="button-parent">
                <v-btn
                  class="text-btn"
                  variant="flat"
                  color="#ececec"
                  size="small"
                >
                  بازگشت به فروشگاه
                </v-btn>
              </div>

              <div class="button-parent">
                <v-btn
                  class="text-btn continue"
                  variant="flat"
                  color="#ff5353"
                  size="small"
                >
                  ادامه خرید: آدرس تحویل
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style src="./PaymentViews.scss" lang="scss"></style>
<script src="./PaymentViews.js"></script>
