import HomeView from "@/views/home/home.vue";
export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  //Shop page
  {
    path: "/shop",
    name: "shop",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "shop" */ "../views/shop/shop.vue"),
  },

  //Cart page
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart/ViewsCart.vue"),
  },

  //Prduct Details page
  {
    path: "/payment",
    name: "payment",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "payment" */ "../views/Payment/PaymentViews.vue"
      ),
  },

  //Prduct Details page
  {
    path: "/product-details/:id",
    name: "product-details",
    meta: {
      productName: "",
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "product-details" */ "../views/ProductDetails/ProductDetails.vue"
      ),
  },

  //Prduct Details page
  {
    path: "/profile",
    name: "profile",
    redirect: {
      name: "profile-dashboard",
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "profile" */ "../views/Profile/ProfileView.vue"
      ),

    children: [
      {
        path: "dashboard",
        name: "profile-dashboard",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "profile-dashboard" */ "../resources/components/Profile/ProfileDashboard/ProfileDashboard.vue"
          ),
      },

      {
        path: "orderList",
        name: "profile-order-list",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "profile-order-list" */ "../resources/components/Profile/ProfileOrderList/ProfileOrderList.vue"
          ),
      },

      {
        path: "address",
        name: "profile-address",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "profile-address" */ "../resources/components/Profile/ProfileAddress/ProfileAddress.vue"
          ),
      },
    ],
  },

  //Not Found
  {
    path: "/404",
    name: "notFound",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ "../views/notFound/notFound.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: {
      name: "notFound",
    },
  },
];
