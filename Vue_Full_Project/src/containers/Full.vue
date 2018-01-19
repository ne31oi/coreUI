<template>
  <div class="app-viewport" id="file-list">
    <!--SIDEBAR-->
    <md-sidenav class="md-left md-fixed" ref="sidebar" :class="{'md-sidenav-rtl':rtl}">
      <md-sidenav-content>
        <md-toolbar class="md-account-header">
          <md-list class="md-transparent">
            <md-list-item class="md-avatar-list">
              <md-avatar class="md-large">
                <img src="https://placeimg.com/64/64/people/8" alt="People">
              </md-avatar>

              <span style="flex: 1"></span>

              <md-avatar>
                <img src="https://placeimg.com/40/40/people/3" alt="People">
              </md-avatar>

              <md-avatar>
                <img src="https://placeimg.com/40/40/people/4" alt="People">
              </md-avatar>
            </md-list-item>

            <md-list-item>
              <div class="md-list-text-container">
                <span>John Doe</span>
                <span>johndoe@email.com</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>arrow_drop_down</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-toolbar>

        <md-list>
          <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
            <md-icon>insert_drive_file</md-icon>
            <span>My files</span>
          </md-list-item>

          <md-list-item @click="$refs.sidebar.toggle()">
            <md-icon>people</md-icon>
            <span>Shared with me</span>
          </md-list-item>

          <md-list-item @click="$refs.sidebar.toggle()">
            <md-icon>access_time</md-icon>
            <span>Recent</span>
          </md-list-item>

          <md-list-item @click="$refs.sidebar.toggle()">
            <md-icon>start</md-icon>
            <span>Starred</span>
          </md-list-item>

          <md-list-item @click="$refs.sidebar.toggle()">
            <md-icon>delete</md-icon>
            <span>Trash</span>
          </md-list-item>
        </md-list>
      </md-sidenav-content>
    </md-sidenav>

    <!--HEADER-->
    <md-whiteframe md-elevation="3" class="main-toolbar header">
      <md-toolbar class="md-primary md-fixed">
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">O.K. psychometry</span>
        <span style="flex: 1"></span>
        <b-button variant="primary" @click="switchDir()">Primary</b-button>
        <md-menu md-direction="bottom-start">
          <md-button md-menu-trigger>Bottom Start</md-button>
          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-toolbar>
    </md-whiteframe>

    <!--MAIN-->
    <main class="main-content">

      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>

  </div>

</template>

<script>
  import nav from '../_nav'

  export default {
    name: 'full',
    data () {
      return {
        nav: nav.items,
        rtl: false
      }
    },
    mounted () {
    },
    methods: {
      switchDir () {
        if (document.getElementById('html').dir === 'rtl') {
          document.getElementById('html').dir = 'ltr'
          this.rtl = false
        } else {
          document.getElementById('html').dir = 'rtl'
          this.rtl = true
        }
      }
    },
    computed: {
      name () {
        return this.$route.name
      },
      list () {
        return this.$route.matched
      }
    }
  }
</script>
<style>
  .md-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100% !important;
  }

  .header {
    min-height: 48px;
    height: auto !important;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
  }

  .main-content {
    margin-top: 28px;
  }

  /*RTL*/
  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  .md-sidenav-rtl.md-left .md-sidenav-content {
    right: 0 !important;
    transform: translate3D(100%, 0, 0) !important;
  }

  .md-sidenav-rtl.md-right .md-sidenav-content {
    left: 0 !important;
    transform: translate3D(-100%, 0, 0) !important;
  }

  .md-sidenav-rtl.md-fixed .md-sidenav-content,
  .md-sidenav-rtl.md-fixed .md-sidenav-backdrop {
    position: fixed !important;
  }

  .md-sidenav-rtl .md-sidenav-content {
    width: 304px !important;
    position: absolute !important;
    top: 0 !important;
    bottom: 0 !important;
    z-index: 100 !important;
    pointer-events: none !important;
    overflow: auto !important;
    -webkit-overflow-scrolling: touch !important;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    transition-property: transform !important;
    will-change: transform !important;
  }

  .md-sidenav-rtl .md-backdrop {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    z-index: 99 !important;
    pointer-events: none !important;
    background-color: rgba(0, 0, 0, 0.54) !important;
    opacity: 0 !important;
    transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1) !important;
    transition-property: opacity !important;
    will-change: opacity !important;
  }

  .md-sidenav-rtl.md-active .md-sidenav-content {
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12) !important;
    pointer-events: auto !important;
    transform: translate3D(0, 0, 0) !important;
  }

  .md-sidenav-rtl.md-active .md-sidenav-backdrop {
    opacity: 1 !important;
    pointer-events: auto !important;
  }
</style>
