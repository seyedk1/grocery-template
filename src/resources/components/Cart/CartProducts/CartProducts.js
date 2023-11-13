import { reactive, ref } from "vue";
import { mdiTrashCanOutline } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

export default {
  setup() {
    let count = ref(0);
    let cartItems = reactive([
      {
        id: 1,
        productName: "سیب زمینی",
        productImage: "4",
        category: "سیزیجات",
        mount: "۲۵۰ گرم",
        price: '۴۵۰۰۰',
        discountPrice: '۳۵۰۰۰',
        totalPrice: '۳۵۰۰۰',
      },
      {
        id: 2,
        productName: "فلفل",
        productImage: "5",
        category: "سیزیجات",
        mount: "۳۵۰ گرم",
        price: '۴۵۰۰۰',
        discountPrice: '۳۵۰۰۰',
        totalPrice: '۳۵۰۰۰',
      },
      {
        id: 3,
        productName: "کلم بروکلی",
        productImage: "6",
        category: "سیزیجات",
        mount: "۴۵۰ گرم",
        price: '۴۵۰۰۰',
        discountPrice: '۳۵۰۰۰',
        totalPrice: '۳۵۰۰۰',
      },
    ]);

    const deleteIcon = ref(mdiTrashCanOutline);

    return { cartItems, count, deleteIcon };
  },

  components: {
    SvgIcon,
  },
};
