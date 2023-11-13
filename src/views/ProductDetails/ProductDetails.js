import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { Navigation, Thumbs } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const router = useRouter();
    let count = ref(0);
    let selectedImage = ref({ id: 1, image: "1" });
    const productImages = reactive([
      { id: 1, image: "1" },
      { id: 2, image: "2" },
      { id: 3, image: "3" },
      { id: 4, image: "4" },
      { id: 5, image: "5" },
      { id: 6, image: "6" },
      { id: 7, image: "7" },
      { id: 8, image: "8" },
    ]);
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const updateImage = (image) => {
      console.log("log: ", { image, selectedImage: selectedImage.value.id });
      selectedImage.value.id = image.id;
      selectedImage.value.image = image.image;
    };

    const navigationToCart = () => {
      router.push({ name: "cart" });
    };

    return {
      count,
      productImages,
      selectedImage,
      onSwiper,
      onSlideChange,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Navigation, Thumbs],
      updateImage,
      navigationToCart,
    };
  },
};
