<template>
    <nav class="navbar"
         :class="[
            {'navbar-expand-md': expand},
            {'navbar-transparent': transparent},
            {[`bg-${type}`]: type}
         ]">
        <div :class="containerClasses">
            <router-link class="navbar-brand pt-0 pb-0" to="/">
                <h2 class="mb-0">
                  <i class="fa fa-play text-red pr-2"></i>
                  <span>uTube</span>
                </h2>
            </router-link>
            
            <slot name="brand">
                <!--<router-link :to="$route.path"
                             class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
                    {{$route.name}}
                </router-link>-->
            </slot>
            <navbar-toggle-button v-if="showToggleButton"
                                  :toggled="toggled"
                                  :target="contentId"
                                  @click.native.stop="toggled = !toggled">
                <span class="navbar-toggler-icon"></span>
            </navbar-toggle-button>

            <div class="collapse navbar-collapse"
                 :class="{show: toggled}"
                 :id="contentId"
                 v-click-outside="closeMenu">

                <slot :close-menu="closeMenu"></slot>
            </div>
        </div>
    </nav>
</template>
<script>
  import NavbarToggleButton from "./NavbarToggleButton";

  export default {
    name: "base-nav",
    components: {
      NavbarToggleButton
    },
    props: {
      type: {
        type: String,
        default: "",
        description: "Navbar type (e.g default, primary etc)"
      },
      title: {
        type: String,
        default: "",
        description: "Title of navbar"
      },
      contentId: {
        type: [String, Number],
        default: Math.random().toString(),
        description:
          "Explicit id for the menu. By default it's a generated random number"
      },
      containerClasses: {
        type: [String, Object, Array],
        default: 'container-fluid'
      },
      transparent: {
        type: Boolean,
        default: false,
        description: "Whether navbar is transparent"
      },
      expand: {
        type: Boolean,
        default: false,
        description: "Whether navbar should contain `navbar-expand-lg` class"
      },
      showToggleButton: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        toggled: false
      };
    },
    methods: {
      closeMenu() {
        this.toggled = false;
      }
    }
  };
</script>
<style>
</style>
