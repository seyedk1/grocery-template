<template>
  <div id="profile-main">
    <div class="profile-dashboard-parent">
      <div class="background-image-dashboard"></div>

      <div class="user-info-parent">
        <div class="user-image-parent">
          <v-img
            height="100"
            width="100"
            src="/src/assets/images/profile/user.jpg"
            class="user-image"
          ></v-img>
        </div>
        <div class="user-family-parent">
          <h3 class="user-name">سید کیوان نوبخت</h3>
          <h4 class="user-email">seyed.keyvan.nobakht@hotmail.com</h4>
        </div>
      </div>

      <div class="profile-dashboard-items-parent">
        <ul class="items-parent">
          <router-link
            :to="item.to"
            class="each-item"
            :active-class="'active'"
            :exact-active-class="'exact-active'"
            @click="updateDashboard(item)"
            v-for="item in items"
            :key="item.id"
            e
          >
            <svg-icon
              type="mdi"
              width="25"
              height="25"
              :path="item.icon"
              color="#4a5568"
              class="icon-style"
            ></svg-icon>
            {{ item.name }}
          </router-link>
        </ul>
      </div>
    </div>

    <div class="profile-show-content-parent">
      <ProfileHeader>
        <template v-slot:headerTitle> {{ dashboardHeader }} </template>
        <template v-slot:needBtn>
          <div class="btn-parent" v-if="hasBtn">
            <v-btn class="btn-style" prepend-icon="mdi mdiPlus" variant="tonal">
              <template v-slot:prepend>
                <svg-icon type="mdi" :path="path" color="white"></svg-icon>
              </template>
              افزودن آدرس جدید
            </v-btn>
          </div>
        </template>
      </ProfileHeader>

      <component :is="dashboard"></component>
    </div>
  </div>
</template>

<style src="./ProfileContainer.scss" lang="scss"></style>
<script src="./ProfileContainer.js"></script>
