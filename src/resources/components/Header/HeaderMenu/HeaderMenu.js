import { reactive, ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiShapeOutline } from "@mdi/js";

export default {
  setup() {
    const menuItems = reactive(["صفحه اصلی", "فروشگاه"]);
    const path = ref(mdiShapeOutline);
    return {
      menuItems,
      path,
    };
  },

  components: {
    SvgIcon,
  },
};
