import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHeartOutline,
  mdiCartOutline,
  mdiAccountOutline,
  mdiMagnify,
} from "@mdi/js";
import { ref } from "vue";

export default {
  setup() {
    const path = ref([mdiHeartOutline, mdiCartOutline, mdiAccountOutline]);
    const search = ref(mdiMagnify);

    return {
      path,
      search
    };
  },

  components: {
    SvgIcon,
  },
};
