import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCubeOutline } from "@mdi/js";
import { ref } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const path = ref(mdiCubeOutline);
    const rating = ref(3);

    return {
      path,
      rating,
    };
  },
};
