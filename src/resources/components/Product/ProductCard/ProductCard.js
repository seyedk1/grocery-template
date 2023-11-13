import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const rating = ref(3);
    const count = ref(0);
    const router = useRouter();

    function navigateProductDetail(obj) {
      router.push({
        name: "product-details",
        params: { id: obj.id },
        query: { productName: obj.name },
      });
    }

    return {
      rating,
      count,
      navigateProductDetail,
    };
  },

  methods: {},
};
