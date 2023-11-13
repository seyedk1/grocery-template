<template>
  <div class="totally-info-parent">
    <div class="title-parent gap">
      <h3 class="title">اطلاعات کلی</h3>
    </div>

    <div class="name--edit-button-parent gap">
      <span class="name">سید کیوان نوبخت</span>
      <v-btn class="edit-text-btn" variant="tonal" color="#0da487" size="small">
        ویرایش
      </v-btn>
    </div>

    <div class="location-parent gap">
      <div
        class="icon-text-parent"
        v-for="(item, index) in txtIcon"
        :key="index"
      >
        <svg-icon type="mdi" :path="item.icon" class="space"> </svg-icon>
        <span class="icon-text space">{{ item.text }}</span>
      </div>
    </div>
  </div>

  <div class="totally-info-parent">
    <div class="title-parent">
      <h3 class="title">اطلاعات کامل</h3>
    </div>
    <div class="show-table--illustrator-parent">
      <div class="table-parent">
        <table class="table">
          <tbody class="table-body">
            <tr class="each-row" v-for="info in userInformation" :key="info.id">
              <td class="each-cel title-cel">{{ info.title }}</td>
              <td class="each-cel">{{ info.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="illustrator-parent">
        <v-img
          width="350"
          height="350"
          src="/src/assets/images/profile/dashboard-profile.png"
          class="img-fluid illstration-image"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<style src="./ProfileDashboard.scss" lang="scss"></style>
<script src="./ProfileDashboard.js"></script>
