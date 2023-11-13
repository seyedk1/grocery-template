import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMapMarkerOutline, mdiPhoneOutline } from "@mdi/js";
import { reactive } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const txtIcon = reactive([
      {
        icon: mdiMapMarkerOutline,
        text: "سید رضی، مشهد",
      },

      {
        icon: mdiPhoneOutline,
        text: "۰۹۳۰۵۱۰۷۷۲۴",
      },
    ]);

    const userInformation = reactive([
      {
        id: 1,
        title: "جنسیت: ",
        value: "مرد",
      },
      {
        id: 2,
        title: "تاریخ تولد: ",
        value: "۱۳۷۷/۰۴/۱۱",
      },
      {
        id: 3,
        title: "شماره تماس: ",
        value: "۰۹۳۰۵۱۰۷۷۲۴",
      },
      {
        id: 4,
        title: "آدرس: ",
        value: "مشهد، سید رضی ۵۳",
      },
    ]);

    return {
      txtIcon,
      userInformation,
    };
  },
};
