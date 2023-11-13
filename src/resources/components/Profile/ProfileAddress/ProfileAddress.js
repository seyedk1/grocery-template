import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";
import { reactive } from "vue";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const path = reactive([mdiPencilOutline, mdiTrashCanOutline]);
    return {
      path,
    };
  },
};
