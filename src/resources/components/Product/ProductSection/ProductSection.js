import { ref } from "vue";

export default {
  setup() {
    const products = ref([
      {id: 1, image: "1", name: "توت فرنگی", price: "۶۰۰۰۰" },
      {id: 2, image: "2", name: "بادمجون", price: "۷۰۰۰۰" },
      {id: 3, image: "3", name: "پیاز", price: "۸۰۰۰۰" },
      {id: 4, image: "4", name: "سیب زمینی", price: "۹۰۰۰۰" },
      {id: 5, image: "5", name: "فلفل", price: "۴۰۰۰۰" },
      {id: 6, image: "6", name: "کلم بروکلی", price: "۵۰۰۰۰" },
      {id: 7, image: "7", name: "گلابی", price: "۵۵۰۰۰" },
      {id: 8, image: "8", name: "سیب", price: "۶۶۰۰۰" },
      {id: 9, image: "9", name: "آووکادو", price: "۶۶۰۰۰" },
      {id: 10, image: "10", name: "لوبیا", price: "۶۶۰۰۰" },
      {id: 11, image: "11", name: "خیار", price: "۶۶۰۰۰" },
      {id: 12, image: "12", name: "شلغم", price: "۶۶۰۰۰" },
    ]);

    return {
      products,
    };
  },
};
