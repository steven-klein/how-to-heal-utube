<template>
    <base-nav class="fixed-top navbar-light bg-white"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <form class="navbar-search navbar-search-light form-inline mr-3 d-none d-md-flex ml-lg-6">
            <div class="form-group mb-0">
                <base-input placeholder="Search"
                            class="input-group-alternative"
                            alternative=""
                            addon-right-icon="fas fa-search">
                </base-input>
            </div>
        </form>
        <div class="d-md-flex ml-lg-auto mr-lg-0">
          <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item ml-3 mr-3">
              <i class="fa fa-th-large"></i>
            </li>
            <li class="nav-item mr-3">
              <i class="fa fa-plus-square"></i>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center d-none d-md-flex">
              <li class="nav-item dropdown">
                  <base-dropdown class="pr-0" position="right">
                      <div class="media align-items-center" slot="title">
                        <i class="fa fa-user-circle"></i>
                          <!--<span class="avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src="img/theme/profile-icon.png">
                          </span>-->
                          <div class="media-body ml-1 d-none d-lg-block">
                              <span class="mb-0 text-sm  font-weight-bold">Celexa Rae</span>
                          </div>
                      </div>

                      <template>
                          <div class="dropdown-setters dropdown-header noti-title">
                              <p>                                
                                <small>Use the tab button to get into these fields!  Clicking the fields will close the menu.</small>
                              </p>
                              <p>                                
                                <small>Type the value exactly as you want it to appear.  Ex: 1,000 or 1.4M</small>
                              </p>
                              <div class="dropdown-divider"></div>
                              <p>
                                <label>Subscriber Count</label>
                                <input :value="subscriber_count" @input="setSubscriberCount">
                              </p>
                              <div class="dropdown-divider"></div>
                              <p>
                                <label>Ciews Count</label>
                                <input :value="views_count" @input="setViewsCount">
                              </p>
                          </div>
                          <!--
                          <router-link to="/profile" class="dropdown-item">
                              <i class="ni ni-single-02"></i>
                              <span>My profile</span>
                          </router-link>
                          <router-link to="/profile" class="dropdown-item">
                              <i class="ni ni-settings-gear-65"></i>
                              <span>Settings</span>
                          </router-link>
                          <router-link to="/profile" class="dropdown-item">
                              <i class="ni ni-calendar-grid-58"></i>
                              <span>Activity</span>
                          </router-link>
                          <router-link to="/profile" class="dropdown-item">
                              <i class="ni ni-support-16"></i>
                              <span>Support</span>
                          </router-link>
                          <router-link to="/profile" class="dropdown-item">
                              <i class="ni ni-user-run"></i>
                              <span>Logout</span>
                          </router-link>
                          -->
                      </template>
                  </base-dropdown>
              </li>
          </ul>
        </div>
    </base-nav>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: ''
      };
    },
    computed: {
      ...mapState({
        subscriber_count: state => state.subscriber_count,
        views_count: state => state.views_count
      })
    },
    methods: {
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      setSubscriberCount(e) {
        this.$store.commit('set_subscriber_count', e.target.value)
      },
      setViewsCount(e) {
        this.$store.commit('set_views_count', e.target.value)
      },
    }
  };
</script>
