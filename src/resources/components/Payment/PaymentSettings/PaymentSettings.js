import { ref } from "vue";

export default {
  setup() {
    const whichPost = ref("");

    return { whichPost };
  },
};
