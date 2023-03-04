<template>
  <v-app>
    <navbar v-if="$route.meta && $route.meta.auth"></navbar>
    <v-main class="py-5 primary">
      <router-view />
    </v-main>
    <footerr></footerr>
    <div class="foot-bootom darkPrimary white--text d-flex align-center justify-center py-3">
      <span>all rights reserved to studyblood</span>
    </div>
  </v-app>
</template>

<script lang="ts">

import Vue from "vue";
import navbar from "@/components/Nav.vue";
import footerr from "@/components/Footerr.vue";

export default Vue.extend({
  name: "App",
  components: {
    navbar,
    footerr
  },
  data: () => ({
    // items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
});

</script>

<style lang="scss">


</style>
