import { reactive,ref } from "vue";

export default {
  setup() {
    const direction = ref("ltr");
    const categoryImages = reactive([
      {
        image: "1",
        name: "وعده های غذایی آماده",
      },
      {
        image: "2",
        name: "میوه و سبزیجات",
      },
      {
        image: "3",
        name: "نوشیدنی ها",
      },
      {
        image: "4",
        name: "دال و پالس",
      },
      {
        image: "5",
        name: "کمد غذا",
      },
      {
        image: "6",
        name: "برنج و غلات",
      },
      {
        image: "7",
        name: "روغن ها",
      },
      {
        image: "8",
        name: "وعده های غذایی آماده",
      },
    ]);
    return {
      direction,
      categoryImages,
    };
  },
};
