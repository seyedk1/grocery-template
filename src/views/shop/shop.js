import { ref } from "vue";

export default {
  setup() {
    const select = ref("همه");
    const items = ref(["همه", "بیشترین قیمت", "کمترین قیمت"]);
    const direction = ref("rtl");

    return {
      select,
      items,
      direction,
    };
  },
};
