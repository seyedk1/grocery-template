import { ref } from "vue";

export default {
  setup() {
    const products = ref([
      { image: "1", name: "توت فرنگی", price: "۶۰۰۰۰" },
      { image: "2", name: "بادمجون", price: "۷۰۰۰۰" },
      { image: "3", name: "پیاز", price: "۸۰۰۰۰" },
      { image: "4", name: "سیب زمینی", price: "۹۰۰۰۰" },
      { image: "5", name: "فلفل", price: "۴۰۰۰۰" },
      { image: "6", name: "کلم بروکلی", price: "۵۰۰۰۰" },
      { image: "7", name: "گلابی", price: "۵۵۰۰۰" },
      { image: "8", name: "سیب", price: "۶۶۰۰۰" },
      { image: "9", name: "آووکادو", price: "۶۶۰۰۰" },
      { image: "10", name: "لوبیا", price: "۶۶۰۰۰" },
      { image: "11", name: "خیار", price: "۶۶۰۰۰" },
      { image: "12", name: "شلغم", price: "۶۶۰۰۰" },
    ]);

    return {
      products,
    };
  },
};
