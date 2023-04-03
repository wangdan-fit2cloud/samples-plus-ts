<template>
  <aside :class="['sidebar-container', {'is-collapse': isCollapse}]">
    <slot>
      <Sidebar />
    </slot>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Sidebar from "./sidebar/index.vue";

import useStore from "@/store";

const { app } = useStore();
const sidebarStore = computed(() => app.sidebar);

const isCollapse = computed(() => {
  return !sidebarStore.value.opened;
});
</script>
