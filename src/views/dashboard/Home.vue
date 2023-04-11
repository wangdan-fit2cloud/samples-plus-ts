<template>
  <div>
    <el-button @click="show = true">
      打开弹窗
    </el-button>
    <add-dialog v-model:dialogVisible="show" v-if="show" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
const AddDialog = defineAsyncComponent(() => import('@/components/AddDialog.vue'))
const show = ref(false)
</script>

<style scoped></style>
