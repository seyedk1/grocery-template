import {  ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        src: "https://kalleh.com/book/wp-content/uploads/sites/2/2017/06/shopping-hero-1-2.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ]);

    return {
      items,
    };
  },
};
