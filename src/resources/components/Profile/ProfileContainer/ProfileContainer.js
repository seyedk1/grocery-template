import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHomeOutline,
  mdiShoppingOutline,
  mdiHeartOutline,
  mdiCreditCardOutline,
  mdiMapMarkerOutline,
  mdiPlus,
} from "@mdi/js";
import { reactive, ref } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const items = reactive([
      {
        id: 1,
        name: "داشبورد",
        icon: mdiHomeOutline,
        to: "/profile/dashboard",
        componentName: "ProfileDashboard",
        flag: false,
      },
      {
        id: 2,
        name: "سفارشات",
        icon: mdiShoppingOutline,
        to: "/profile/orderList",
        componentName: "ProfileOrderList",
        flag: false,
      },
      {
        id: 3,
        name: "علاقه مندی ها",
        icon: mdiHeartOutline,
        to: "/profile/favourites",
        componentName: "",
        flag: false,
      },
      {
        id: 4,
        name: "آدرس",
        icon: mdiMapMarkerOutline,
        to: "/profile/address",
        componentName: "ProfileAddress",
        flag: true,
      },
    ]);

    let dashboard = ref("ProfileDashboard");
    let dashboardHeader = ref("داشبورد");
    let hasBtn = ref(false);
    const path = ref(mdiPlus);

    const updateDashboard = (item) => {
      if (item.flag) {
        hasBtn = true;
        console.log("chi shod t?", hasBtn);
      } else {
        hasBtn = false;
        console.log("chi shod f?", hasBtn);
      }
      dashboard.value = item.componentName;
      dashboardHeader.value = item.name;
    };
    return {
      items,
      path,
      dashboard,
      dashboardHeader,
      hasBtn,
      updateDashboard,
    };
  },
};
