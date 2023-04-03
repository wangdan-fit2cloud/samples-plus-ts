<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function back() {
  router.push({ name: 'RouterMenu' })
}
</script>

<template>
  <layout-content>
    <template #header> 详情页 </template>
    <template #toolbar>
      <el-button @click="back">返回</el-button>
    </template>
  </layout-content>
</template>
