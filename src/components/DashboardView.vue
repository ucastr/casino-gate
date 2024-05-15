<template>
  <NavView />
  <div id="MainView">
    <HeaderComponent :breadcrumbs="breadcrumbs" />
    <div class="content-block">
      <iframe
        src="https://metabase.casinogate.pt/public/dashboard/2f9d0c29-9b65-4dcf-b249-126f210ccb5c"
        frameborder="0"
        width="100%"
        height="800"
        allowtransparency
        class="inner-content"
      ></iframe>
    </div>
  </div>
</template>
<script>
import NavView from "./NavView.vue";
import HeaderComponent from "./HeaderComponent.vue";

export default {
  name: "DashboardView",
  data() {
    return {
      permissions: [],
      breadcrumbs: [
        { title: "Dashboard", link: "/dashboard" },
        { title: "Overview", link: "" },
      ],
    };
  },
  components: {
    NavView,
    HeaderComponent,
  },
  methods: {},
};
</script>
