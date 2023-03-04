<template>
  <v-app-bar app color="primary" light height="94" class="d-flex align-center">
    <v-container fluid>
      <v-row>
        <v-col cols="3"  class="d-flex align-center">
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
            <span class="support--text text-h4">StudyBlood</span>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="6" class="d-flex align-center justify-center">
          <div class="listt">
            <ul class="d-md-flex align-center justify-center d-none px-0">
              <li class="cursor-pointer text-lg-h6 text-subtitle-2 mx-md-4 mx-2">
                <router-link
                  :to="{ name: 'Home' }"
                  exact-active-class="black--text"
                  exact
                  >
                  <v-icon color="support" size="25">mdi-home-outline</v-icon>
                </router-link>
              </li>
              <li class="cursor-pointer text-lg-h6 text-subtitle-2  mx-md-4 mx-2">
                <router-link
                  to=""
                  exact-active-class="black--text"
                  exact
                  >
                  <span>About us</span>
                </router-link>
              </li>
              <li class="cursor-pointer  text-lg-h6 text-subtitle-2 mx-md-4 mx-2">
                <router-link
                  :to="{ name: 'jobs' }"
                  exact-active-class="black--text"
                  exact
                >
                  Work with us
                </router-link>
              </li>
              <li class="cursor-pointer text-subtitle-2 text-lg-h6 mx-md-4 mx-2">
                <router-link
                  to="/"
                  exact-active-class="black--text"
                  exact
                >
                  Contact Us
                </router-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          class="d-flex align-center justify-end"
          cols="3"
        >
          <div class="btns d-md-block d-none text-end">
            <router-link to="/logIn">
              <v-btn
                :width="btnWidth"
                :height="btnHeight"
                elevation="0"
                outlined
                class="linear white--text rounded-lg text-capitalize mx-1 mx-lg-3"
              >
                <span class="text-caption text-lg-body-2"> my profile </span>
              </v-btn>
            </router-link>
            <router-link to="/contact">
              <v-btn
                :width="btnWidth"
                :height="btnHeight"
                elevation="0"
                class="log transparent txtOnPrimary--text text-capitalize rounded-lg mx-1 mx-lg-3"
              >
                <span class="text-caption text-lg-body-2"> log out</span>
              </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "myNav",
  components: {
    
  },
  computed: {
    btnWidth() {
      const that = this as any;
      return that.$vuetify.breakpoint.name == "xl" ||
        that.$vuetify.breakpoint.name == "lg"
        ? "110px"
        : "90px";
    },
    btnHeight() {
      const that = this as any;
      return that.$vuetify.breakpoint.name == "xl" ||
        that.$vuetify.breakpoint.name == "lg"
        ? "55px"
        : "34px";
    },
  },
});


</script>


<style lang="scss">

.v-app-bar {
  position: relative !important;
  box-shadow: 0px 0px 24px #FF4D001A !important;
  .v-toolbar__content {
    width: 100%;
  }
  .btns {
    .linear {
      background: transparent linear-gradient(249deg, #FF7400 0%, #FF4D00 100%) 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 16px #FF4D0040 !important;
    }
    .log {
      border: 1px solid #343434 !important;
    }
  }
}

</style>