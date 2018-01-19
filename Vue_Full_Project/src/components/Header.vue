<template>
</template>
<script>
  export default {
    name: 'header',
    methods: {
      switchDir () {
        if (document.getElementById('html').dir === 'rtl') {
          document.getElementById('html').dir = 'ltr'
        } else {
          document.getElementById('html').dir = 'rtl'
        }
      },
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      },
      asideToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('aside-menu-hidden')
      }
    }
  }
</script>
