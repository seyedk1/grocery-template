import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronLeft } from "@mdi/js";
import { reactive, ref } from "vue";

export default {
  setup() {
    const path = ref(mdiChevronLeft);

    const footerItems = reactive([
      {
        id: 1,
        title: "دسترسی سریع",
        items: [
          { id: 1, name: "درباره ما", to: "/" },
          { id: 2, name: "تماس با ما", to: "/" },
          { id: 3, name: "سیاست حریم خصوصی", to: "/" },
          { id: 4, name: "قوانین", to: "/" },
          { id: 5, name: "وبلاگ", to: "/" },
        ],
      },
      {
        id: 2,
        title: "پر کاربردترین",
        items: [
          { id: 1, name: "سفارش شما", to: "/" },
          { id: 2, name: "حساب کاربری", to: "/" },
          { id: 3, name: "پیگیری سفارشات", to: "/" },
          { id: 4, name: "لیست علاقه مندی", to: "/" },
          { id: 5, name: "سوالات متداول", to: "/" },
        ],
      },
      {
        id: 3,
        title: "دسته ها",
        items: [
          { id: 1, name: "سیزیجات تازه", to: "/" },
          { id: 2, name: "ادویه تند", to: "/" },
          { id: 3, name: "کیف های نو", to: "/" },
          { id: 4, name: "نانوایی جدید", to: "/" },
          { id: 5, name: "حواربار فروشی جدید", to: "/" },
        ],
      },
      {
        id: 4,
        title: "اطلاعات فروشگاه",
        items: [
          { id: 1, name: "قالب فست فود", to: "/" },
          { id: 2, name: "تماس تلفن", to: "/" },
          { id: 3, name: "ایمیل", to: "/" },
          { id: 4, name: "فکس", to: "/" },
        ],
      },
    ]);

    return {
      path,
      footerItems,
    };
  },

  components: {
    SvgIcon,
  },
};
