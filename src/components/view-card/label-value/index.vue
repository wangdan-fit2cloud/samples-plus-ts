<template>
  <div :class="['label-value', 'label-value--' + size]">
    <label :style="{ width: width }" v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
const prop = defineProps({
  label: String,
  labelWidth: String,
  size: {
    type: String,
    default: "default",
    validator: (value: string) => {
      return ['default', 'small', 'large'].includes(value)
    }
  }
});

const itemLabelWidth = inject('itemLabelWidth')
const width = computed(() => {
  return prop.labelWidth|| itemLabelWidth as string
})

</script>

<style lang="scss">
.label-value {
  display: flex;
  justify-content: flex-start;
  line-height: 2;

  &.label-value--large {
    font-size: 14px;
  }

  &.label-value--default {
    font-size: 13px;
  }

  &.label-value--small {
    font-size: 12px;
  }

  label {
    flex: 0 0 auto;
    text-align: left;
    font-weight: 700;
    margin-right: 20px;
  }
}
</style>
