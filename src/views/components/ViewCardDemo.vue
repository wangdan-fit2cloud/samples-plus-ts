<script setup lang="ts">
import { useRouter } from 'vue-router'
import LabelValue from '@/components/view-card/label-value/index.vue'
const router = useRouter()

</script>
<template>
  <layout-content header="查看Card">
    <el-row type="flex" :gutter="20">
      <el-col :span="12">
        <view-card icon="UserFilled" header="用户信息">
          <label-value label="ID">admin</label-value>
          <label-value label="用户名">管理员</label-value>
          <label-value label="Email">admin@fit2cloud.com</label-value>
          <label-value label="启用/禁用">
            <el-tag>启用</el-tag>
          </label-value>
        </view-card>
      </el-col>

      <el-col :span="12">
        <view-card icon="UserFilled" header="用户信息2" type="success">
          <label-value label="ID">admin</label-value>
          <label-value label="用户名">管理员</label-value>
          <label-value label="Email">admin@fit2cloud.com</label-value>
          <label-value label="启用/禁用">
            <el-tag>启用</el-tag>
          </label-value>
        </view-card>
      </el-col>
    </el-row>

    <el-row type="flex" style="margin-top: 20px">
      <el-col :span="24">
        <view-card icon="UserFilled" header="用户信息3" type="warning">
          <label-value label="ID">admin</label-value>
          <label-value label="用户名">管理员</label-value>
          <label-value label="Email">admin@fit2cloud.com</label-value>
          <label-value label="启用/禁用">
            <el-tag>启用</el-tag>
          </label-value>
        </view-card>
      </el-col>
    </el-row>
  </layout-content>
</template>
