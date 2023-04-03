<template>
  <el-container class="layout-container">
    <slot>
      <layout-sidebar />
      <el-container class="main-container" direction="vertical">
        <layout-header class="header-container">
          <slot name="header"></slot>
        </layout-header>
        <layout-main />
      </el-container>
    </slot>
  </el-container>
</template>

<script setup lang="ts">
import LayoutSidebar from './LayoutSidebar.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutMain from './LayoutMain.vue'
</script>

<style lang="scss">
.layout-container {
  min-width: 1024px;
  height: 100%;
  // background-color: $layout-bg-color;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: var(--f2c-sidebar-width);
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: var(--f2c-sidebar-width) !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: var(--f2c-sidebar-bg-color);
  border-right: 1px solid var(--f2c-border-color);

  &.is-collapse {
    width: var(--f2c-sidebar-hide-width) !important;
  }
}

.header-container {
  padding: 0 0 0 20px;
  margin: 8px 0;
}

.view-container {
  display: block;
  flex: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: 0 20px 20px;
}
</style>
