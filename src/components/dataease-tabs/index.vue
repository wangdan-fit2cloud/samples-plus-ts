<template>
  <el-tabs :class="['de-tabs', ...tabClassName]" :style="tabStyle" v-bind="$attrs">
    <slot></slot>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
defineOptions({ name: 'DataeaseTabs' });
const props = defineProps({
  /* 颜色可以单词，如red；也可以是颜色值 */
  // 字体颜色
  fontColor: String,
  // 激活字体颜色
  activeColor: String,
  // 边框颜色 如果是none就无边框 如果是none Card类型激活的下滑线也消失
  borderColor: String,
  // 激活边框颜色 目前只针对card类型
  borderActiveColor: String,
  // 样式类型  radioGroup只在Card类型有效, 同时必须给borderColor borderActiveColor
  styleType: {
    type: String,
    default: '',
    validator: (val: string) => ['', 'radioGroup'].includes(val),
  },
});

const tabStyle = computed(() => [
  { '--de-font-color': props.fontColor },
  { '--de-active-color': props.activeColor },
  { '--de-border-color': props.borderColor },
  { '--de-border-active-color': props.borderActiveColor },
]);
const tabClassName = computed(() =>
  props.styleType
    ? [props.styleType, props.fontColor && 'fontColor', props.activeColor && 'activeColor']
    : [
        props.fontColor && 'fontColor',
        props.activeColor && 'activeColor',
        noBorder.value ? 'noBorder' : props.borderColor && 'borderColor',
        props.borderActiveColor && 'borderActiveColor',
      ]
);

const noBorder = computed(() => props.borderColor === 'none');
</script>

<style lang="scss">
.de-tabs {
  &.el-tabs--card {
    > .el-tabs__header {
      height: auto !important;
    }
  }
  &.fontColor {
    .el-tabs__item {
      color: var(--de-font-color);

      &.is-active {
        color: var(--el-color-primary);
      }

      &:hover {
        color: var(--el-color-primary);
      }
    }
  }

  &.activeColor {
    .el-tabs__item {
      &.is-active {
        color: var(--de-active-color);
      }

      &:hover {
        color: var(--de-active-color);
      }
    }

    .el-tabs__active-bar {
      background-color: var(--de-active-color);
    }
  }

  // card样式的边框
  &.noBorder.el-tabs--card {
    > .el-tabs__header {
      border-bottom: none;

      .el-tabs__nav {
        border: none;
      }

      .el-tabs__item {
        border-left: none;
      }

      .el-tabs__item.is-active {
        border-bottom: none;
      }
    }
  }

  &.borderActiveColor.el-tabs--card {
    > .el-tabs__header .el-tabs__item.is-active {
      border-bottom-color: var(--de-border-active-color);
    }
  }

  &.borderColor.el-tabs--card {
    > .el-tabs__header {
      border-bottom-color: var(--de-border-color);

      .el-tabs__nav {
        border-color: var(--de-border-color);
      }

      .el-tabs__item {
        border-left-color: var(--de-border-color);
      }
    }

    .el-tabs__item {
      &.is-active {
        color: var(--de-active-color);
      }

      &:hover {
        color: var(--de-active-color);
      }
    }

    .el-tabs__active-bar {
      background-color: var(--de-active-color);
    }
  }

  // 简洁样式的边框
  &.noBorder {
    .el-tabs__nav-wrap::after {
      background: none;
    }
  }

  &.borderColor {
    .el-tabs__nav-wrap::after {
      background: var(--de-border-color);
    }
  }

  // radioGroup 类型
  &.radioGroup.el-tabs--card {
    > .el-tabs__header {
      border-bottom: none;

      .el-tabs__nav {
        border: none;
      }

      .el-tabs__item {
        border: 1px solid var(--de-border-color);
        border-right: 0;

        &:first-child {
          border-left: 1px solid var(--de-border-color);
          border-radius: 4px 0 0 4px;
        }

        &:last-child {
          border-right: 1px solid var(--de-border-color);
          border-radius: 0 4px 4px 0;
        }

        &.is-active {
          border: 1px solid var(--de-border-active-color);

          & + .el-tabs__item {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
