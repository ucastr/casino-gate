<template>
  <div class="header">
    <ul class="breadcrumbs">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.link">{{ crumb.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #f0f0f0;
}

.breadcrumbs {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.breadcrumbs li {
  display: inline;
}

.breadcrumbs li:not(:last-child)::after {
  content: ">";
  margin: 0 5px;
}
</style>
