<template>
  <div class="content-container">
    <div class="content-container__header" v-if="slots.header || header">
      <slot name="header">
        <back-button :path="backPath" :name="backName" :to="backTo" v-if="showBack"></back-button>
        {{ header }}
      </slot>
    </div>
    <div class="content-container__toolbar" v-if="slots.toolbar">
      <slot name="toolbar"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
defineOptions({ name: "LayoutContent" });   // 组件名
const slots = useSlots()
const prop = defineProps({
  header: String,
  backPath: String,
  backName: String,
  backTo: Object
});

const showBack = computed(() => {
  const { backPath, backName, backTo } = prop
  return backPath || backName || backTo
});
</script>

<style lang="scss">
@use "@/styles/mixins.scss" as *;

.content-container {
  transition: 0.3s;
  color: var(--el-text-color-primary);
  background-color: #FFFFFF;
  overflow: auto;
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 14%);
  box-sizing: border-box;

  .content-container__header {
    font-weight: 700;
    padding: 5px 0 25px;
    font-size: 18px;
  }

  .content-container__toolbar {
    @include flex-row(space-between, center);
    margin-bottom: 10px;
  }
}
</style>
