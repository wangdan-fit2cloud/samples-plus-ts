<template>
  <el-dialog v-model="dialogShow" title="Tips" width="30%">
    <span>This is a message</span>

    <template #footer>
      <div style="text-align: center">
        <el-button @click="emit('update:dialogVisible', false)">取消</el-button>
        <el-button type="primary" @click="emit('update:dialogVisible', false)">确认</el-button>
      </div>
    </template>

  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps({
  dialogVisible: {
    type: Boolean,
  },
});
const emit = defineEmits(['update:dialogVisible'])

const dialogShow = computed({
  get() {
    return props.dialogVisible
  },
  set(val) {
    return val
  }
})

</script>

<style scoped></style>
