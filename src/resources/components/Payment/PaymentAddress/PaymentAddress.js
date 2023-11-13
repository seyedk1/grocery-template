import { ref } from "vue";

export default {
  setup() {
    const address = ref("");
    return { address };
  },
};
