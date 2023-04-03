<template>
  <el-button size="large" circle :icon="icon" class="sidebar-toggle-button" @click="toggle"></el-button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useStore from '@/store';

const { app } = useStore();
const sidebar = computed(() => app.sidebar);

const icon = computed(() => {
  return sidebar.value.opened ? "Fold" : "Expand"
});

function toggle() {
  app.toggleSidebar();
}

</script>

<style lang="scss" scoped>
.sidebar-toggle-button.el-button {
  font-size: 18px;
}
</style>
