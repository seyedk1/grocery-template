import { reactive, ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiShapeOutline } from "@mdi/js";

export default {
  setup() {
    const menuItems = reactive([
      {
        name: "صفحه اصلی",
        to: { name: "home" },
      },
      {
        name: "فروشگاه",
        to: { name: "shop" },
      },
    ]);

    const categories = reactive([
      {
        id: "1",
        name: "وعده های غذایی آماده",
        to: "shop",
      },
      {
        id: "2",
        name: "میوه و سبزیجات",
        to: "shop",
      },
      {
        id: "3",
        name: "نوشیدنی ها",
        to: "shop",
      },
      {
        id: "4",
        name: "دال و پالس",
        to: "shop",
      },
      {
        id: "5",
        name: "کمد غذا",
        to: "shop",
      },
      {
        id: "6",
        name: "برنج و غلات",
        to: "shop",
      },
      {
        id: "7",
        name: "روغن ها",
        to: "shop",
      },
      {
        id: "8",
        name: "وعده های غذایی آماده",
        to: "shop",
      },
    ]);

    const path = ref(mdiShapeOutline);
    return {
      menuItems,
      path,
      categories,
    };
  },

  components: {
    SvgIcon,
  },
};
