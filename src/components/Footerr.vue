<template>
  <footer>
    <div class="footer secondary py-5">
      <div class="image d-flex align-center justify-center my-8">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="230"
          height="200"
        />
      </div>
      <div class="listt my-8">
        <ul class="d-flex align-center justify-center px-0">
          <li class="cursor-pointer text-subtitle-1 mx-md-4 mx-2">
            <router-link
              :to="{ name: 'Home' }"
              exact-active-class="white--text"
              exact
              >
              <span>home</span>
            </router-link>
          </li>
          <li class="cursor-pointer text-subtitle-1  mx-md-4 mx-2">
            <router-link
              to=""
              exact-active-class="white--text"
              exact
              >
              <span>About us</span>
            </router-link>
          </li>
          <li class="cursor-pointer text-subtitle-1 mx-md-4 mx-2">
            <router-link
              :to="{ name: 'jobs' }"
              exact-active-class="white--text"
              exact
            >
              Work with us
            </router-link>
          </li>
          <li class="cursor-pointer text-subtitle-1 mx-md-4 mx-2">
            <router-link
              to="/"
              exact-active-class="white--text"
              exact
            >
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>



<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "myFooter",
  components: {
    
  },
});


</script>