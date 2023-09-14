import { ref } from "vue";

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

    console.log("propsss: ", props.product);
    return {
      rating,
      count,
    };
  },
};
