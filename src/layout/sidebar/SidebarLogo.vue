<script setup lang="ts">
import logo from '@/assets/RackShift-white.png'
import collapseLogo from '@/assets/RackShift-assist-white.png'
defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
})

// const title = "FIT2CLOUD"
</script>
<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebar-logo-fade" mode="out-in">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="collapseLogo" :src="collapseLogo" class="sidebar-logo" alt="Sidebar Logo" />
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" alt="Sidebar Logo" />
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss">
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 60px;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  .sidebar-logo {
    height: 40px;
    vertical-align: middle;
  }
  .sidebar-logo-text {
    height: 100%;
    vertical-align: middle;
  }
}

.collapse {
  .sidebar-logo {
    width: 32px;
    vertical-align: middle;
    display: inline-block;
  }
  .sidebar-logo-text {
    display: none;
  }
}
</style>
