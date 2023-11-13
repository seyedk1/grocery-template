import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHeartOutline,
  mdiCartOutline,
  mdiAccountOutline,
  mdiMagnify,
} from "@mdi/js";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const path = reactive([
      {
        icon: mdiHeartOutline,
        to: "home",
      },
      {
        icon: mdiCartOutline,
        to: "cart",
      },
      {
        icon: mdiAccountOutline,
        to: "profile",
      },
    ]);
    const search = ref(mdiMagnify);

    let navigateTo = (icon) => {
      router.push({ name: icon.to });
    };

    return {
      path,
      search,
      navigateTo,
    };
  },

  components: {
    SvgIcon,
  },
};
