<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Home',
            icon: 'ni ni-world-2',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Whats Hot!', icon: 'ni ni-sound-wave', path: '/dashboard'}"/>
        <!--<sidebar-item :link="{name: 'Subscribe', icon: 'ni ni-pin-3', path: '/dashboard'}"/>-->
        <!--<sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02', path: '/profile'}"/>-->
        <!--<sidebar-item :link="{name: 'Library', icon: 'ni ni-bullet-list-67', path: '/dashboard'}"/>-->
        <sidebar-item :link="{name: 'Watch History', icon: 'ni ni-watch-time', path: '/dashboard'}"/>
        <!--<sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08', path: '/dashboard'}"/>-->

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
