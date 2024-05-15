<template>
  <NavView :permissions="permissions" />
  <div id="MainView">
    <HeaderComponent :breadcrumbs="breadcrumbs" />
    <div class="content-block">
      <div class="inner-content">
        <h3>{{ $t("common.comming-soon") }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavView from "./NavView.vue";
import HeaderComponent from "./HeaderComponent.vue";

export default {
  components: {
    NavView,
    HeaderComponent,
  },
  data() {
    return {
      permissions: [],
      breadcrumbs: [
        { title: "CONFIGURATION", link: "/configuration" },
        { title: "All", link: "" },
      ],
    };
  },
  methods: {},
};
</script>
