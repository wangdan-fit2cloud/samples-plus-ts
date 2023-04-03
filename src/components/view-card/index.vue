<template>
  <el-card :class="['view-card', 'view-card--' + type]" :shadow="shadow" v-bind="$attrs">
    <template #header v-if="$slots.header || header">
      <slot name="header">
        <el-icon v-if="icon" class="icon">
          <component :is="icon" />
        </el-icon>
        <span>{{ header }}</span>
      </slot>
    </template>
    <slot></slot>
  </el-card>
</template>

<script setup lang="ts">
import { provide } from 'vue'
defineOptions({ name: "ViewCard" });   // 组件名
const prop = defineProps({
  icon: String,
  header: String,
  type: {
    type: String,
    default: "default"
  },
  shadow: {
    type: String,
    default: "hover"
  },
  labelWidth: {
    type: String,
    default: "120px"
  }
});
provide('itemLabelWidth', prop.labelWidth)

</script>

<style lang="scss">
@use "@/styles/mixins.scss" as *;

.view-card {
  border-radius: var(--el-card-border-radius);
  border: none;

  .el-card__header {
    padding: 12px 20px;
    font-weight: 600;
    border: 1px solid var(--el-border-color);
    border-top-left-radius: var(--el-card-border-radius);
    border-top-right-radius: var(--el-card-border-radius);

    .icon {
      margin-right: 5px;
      vertical-align: middle;
      display: inline;
    }
  }

  .el-card__body {
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-card-border-radius);
  }

  .el-card__header+.el-card__body {
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

.view-card--primary {
  .el-card__header {
    @include variant(var(--el-color-white), var(--el-color-primary), var(--el-color-primary));
  }
}

.view-card--success {
  .el-card__header {
    @include variant(var(--el-color-white), var(--el-color-success), var(--el-color-success));
  }
}

.view-card--danger {
  .el-card__header {
    @include variant(var(--el-color-white), var(--el-color-danger), var(--el-color-danger));
  }
}

.view-card--warning {
  .el-card__header {
    @include variant(var(--el-color-white), var(--el-color-warning), var(--el-color-warning));
  }
}

.view-card--info {
  .el-card__header {
    @include variant(var(--el-color-white), var(--el-color-info), var(--el-color-info));
  }
}
</style>
