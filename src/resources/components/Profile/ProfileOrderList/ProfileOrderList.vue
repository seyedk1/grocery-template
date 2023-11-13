<template>
  <div class="order-card-parent">
    <div class="icon-parent">
      <svg-icon
        type="mdi"
        width="45"
        height="45"
        :path="path"
        class="icon-style"
      ></svg-icon>
    </div>

    <div class="status--label-parent">
      <div class="status-parent">
        <h3 class="status-text">وضعیت</h3>
      </div>

      <div class="status-label-parent">
        <span class="status-label">در انتظار</span>
      </div>
    </div>

    <div class="product-order-card-parent">
      <div class="product-image-parent">
        <v-img
          width="100"
          height="100"
          src="/src/assets/images/products/8.png"
          class="product img-fluid"
        ></v-img>
      </div>

      <div class="product-order-details-parent">
        <div class="product-name-parent">
          <h2 class="product-name">کوکی های ترد فانتزی شکلات چیپ</h2>
        </div>

        <div class="product-more-detail-parent">
          <p class="product-more-detail">
            چدار دولسلات گودا. پنیر ماکارونی رشته های پنیر پنیر کوتج فتا هالومی
            پنیر جارلسبرگ مثلث ها می گویند پنیر.
          </p>
        </div>

        <div class="product-ul-parent">
          <ul class="product-details-list-parent">
            <li class="each-row">
              قیمت: <span class="value">۲۰.۶۸۰ تومان</span>
            </li>
            <li class="each-row">
              امتیاز:
              <span class="value"
                ><v-rating
                  v-model="rating"
                  color="yellow-darken-3"
                  size="small"
                  readonly
                ></v-rating
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./ProfileOrderList.scss" lang="scss"></style>
<script src="./ProfileOrderList.js"></script>
