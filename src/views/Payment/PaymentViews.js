import { reactive, ref, computed } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCartOutline, mdiMapMarkerOutline, mdiTruckOutline } from "@mdi/js";

export default {
  components: {
    SvgIcon,
  },

  setup() {
    const boxes = reactive([
      {
        id: 1,
        title: "سبد خرید",
        icon: mdiCartOutline,
        componentName: "CartProducts",
        hasBtn: false,
        isActive: true,
      },
      {
        id: 2,
        title: "نشانی تحویل",
        icon: mdiMapMarkerOutline,
        componentName: "PaymentAddress",
        hasBtn: true,
        isActive: false,
      },
      {
        id: 3,
        title: "تنظیمات ارسال",
        icon: mdiTruckOutline,
        componentName: "PaymentSettings",
        hasBtn: false,
        isActive: false,
      },
    ]);

    // Define reactive references using ref
    let box = ref({
      title: "سبد خرید",
      componentName: "CartProducts",
      hasBtn: false,
      isActive: true,
    });

    // Define the computed property for paymentHeaderContainer
    let paymentHeaderContainer = computed(() => box.value.title);

    // Define the computed property for paymentComponentContainer
    let paymentComponentContainer = computed(() => box.value.componentName);

    // Define the computed property for paymentBtnContainer
    let paymentBtnContainer = computed(() => box.value.hasBtn);

    // Define the updatePaymentContainer function
    const updatePaymentContainer = (newBox) => {
      console.log("miad inja");
      box.value = newBox;
    };

    return {
      boxes,
      paymentHeaderContainer,
      updatePaymentContainer,
      paymentComponentContainer,
      paymentBtnContainer,
      box,
    };
  },
};
