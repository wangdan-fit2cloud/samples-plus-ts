<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { constantRoutes } from '@/router'
import SidebarItem from './SidebarItem.vue'
import logo from './SidebarLogo.vue'
import useStore from '@/store'

const { app } = useStore()

const route = useRoute()
const sidebar = computed(() => app.sidebar)

const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

const isCollapse = computed(() => {
  return !sidebar.value.opened
})
</script>
<template>
  <div class="sidebar">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in constantRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
@mixin sidebar-base-item {
  padding-left: 20px !important;
  border-radius: 2px;
  color: #b6c0cd;
}

@mixin menu-item {
  @include sidebar-base-item;
  line-height: 50px;
  height: 50px;
}

@mixin submenu-item {
  @include sidebar-base-item;
  line-height: 40px;
  height: 40px;
}

@mixin popper-submenu-item {
  @include sidebar-base-item;
  line-height: 40px;
  height: 40px;
}

@mixin menu-item-active {
  font-weight: 600;
  color: #fff;
  background-color: transparent;

  // &:hover {
  //   background-color: $menu-bg-color-hover;
  // }
}

@mixin submenu-item-active {
  font-weight: 600;
  color: #fff;
  background-color: transparent;

  &:hover {
    // background-color: $submenu-bg-color-hover;
  }
}

.sidebar {
  height: 100%;

  .el-scrollbar {
    box-sizing: border-box;
    padding: 10px 0;
    height: calc(100% - 60px);

    .el-scrollbar__bar {
      &.is-vertical {
        right: 0;
      }

      &.is-horizontal {
        display: none;
      }
    }

    .scrollbar-wrapper {
      height: 100%;
      overflow-x: hidden;
    }
  }

  a {
    width: 100%;
    overflow: hidden;
  }

  .is-opened {
    .el-menu {
      background-color: #252b2f;
    }
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100%;
    background-color: transparent;

    .submenu-title-no-dropdown {
      @include menu-item;

      &:hover {
        // background-color: $menu-bg-color-hover;
      }

      &.is-active {
        @include menu-item-active;
      }
    }

    .el-sub-menu {
      .el-sub-menu__title {
        @include menu-item;

        &:hover {
          // background-color: $menu-bg-color-hover;
        }
      }

      &.is-active {
        .el-sub-menu__title {
          @include menu-item-active;

          .sub-el-icon,
          span {
            color: #fff;
          }
        }
      }

      .el-menu-item {
        @include submenu-item;

        &:hover {
          // background-color: $submenu-bg-color-hover;
        }

        &:focus {
          background: none;
        }

        &.is-active {
          @include submenu-item-active;
        }
      }
    }

    .nest-menu,
    .el-sub-menu__title,
    .submenu-title-no-dropdown {
      span {
        padding-left: 30px;
      }

      .sub-el-icon {
        margin-right: 10px;

        + span {
          padding-left: 0;
        }
      }
    }

    &.el-menu--collapse {
      .el-tooltip {
        padding: 0 !important;
        text-align: center;
        line-height: 50px;
      }

      .el-sub-menu__title {
        padding-left: 20px !important;
      }

      .submenu-title-no-dropdown,
      .el-sub-menu__title {
        max-width: 60px;
        text-align: center;

        span {
          display: none;
        }

        .sub-el-icon {
          margin: 0;
        }

        .el-sub-menu__icon-arrow {
          display: none;
        }
      }
    }
  }
}
</style>
