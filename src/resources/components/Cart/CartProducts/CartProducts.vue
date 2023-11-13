<template>
  <tbody class="cart-box">
    <slot name="cartName"></slot>
    <tr class="each-cart-row" v-for="item in cartItems" :key="item.id">
      <td class="each-row-element-parent">
        <div class="element-image--details-parent">
          <div class="image-parent">
            <v-img
              height="70"
              width="70"
              :src="`/src/assets/images/products/${item.productImage}.png`"
            ></v-img>
          </div>
          <div class="element-details-parent">
            <ul>
              <li class="product-name">{{ item.productName }}</li>
              <li>
                دسته بندی:
                <span>{{ item.category }}</span>
              </li>
              <li>
                مقدار:
                <span>{{ item.mount }}</span>
              </li>
            </ul>
          </div>
        </div>
      </td>

      <td class="each-row-element-parent">
        <h4 class="title">قیمت</h4>
        <div class="price-info-parent">
          <div class="price-discount-parent">
            <span class="price">{{ item.discountPrice }}</span>
            <span class="discount">{{ item.price }}</span>
          </div>
        </div>
      </td>

      <td class="each-row-element-parent">
        <h4 class="title">تعداد</h4>
        <div class="qty-parent">
          <div class="qty-right-minus">
            <span class="mdi mdi-minus"></span>
          </div>

          <input
            type="text"
            name="quantity"
            class="form-control input-number"
            v-model="count"
          />

          <div class="qty-left-plus">
            <span class="mdi mdi-plus"></span>
          </div>
        </div>
      </td>

      <td class="each-row-element-parent">
        <h4 class="title">جمع کل</h4>
        <div class="price-info-parent">
          <span class="total-price">{{ item.totalPrice }}</span>
        </div>
      </td>

      <td class="each-row-element-parent">
        <h4 class="title">عملیات</h4>
        <div class="delete-icon-parent">
          <svg-icon
            type="mdi"
            width="25"
            height="25"
            :path="deleteIcon"
            color="#bf2020"
            class="icon-style"
          ></svg-icon>
        </div>
      </td>
    </tr>
    <slot name="buttons"></slot>
  </tbody>
</template>

<style src="./CartProducts.scss" lang="scss"></style>
<script src="./CartProducts.js"></script>
