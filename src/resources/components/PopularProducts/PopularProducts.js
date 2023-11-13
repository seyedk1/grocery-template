import { reactive } from "vue";

export default {
  setup() {
    let popularProducts = reactive([
      { id: 1, image: "1", name: "توت فرنگی", price: 20000 },
      { id: 2, image: "2", name: "بادمجان", price: 30000 },
      { id: 3, image: "3", name: "پیاز", price: 40000 },
      { id: 4, image: "4", name: "سیب زمینی", price: 50000 },
    ]);
    return {
      popularProducts,
    };
  },
};
