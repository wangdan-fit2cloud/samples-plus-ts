<template>
  <div class="tabs-demo">
    <h3>无配置状态</h3>
    <dataease-tabs v-model="activeName" type="card">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>
    <h3 style="margin-top: 50px">无边框</h3>
    <dataease-tabs
      v-model="activeName"
      :font-color="fontColor"
      :active-color="activeColor"
      :border-color="noBorderColor"
      :border-active-color="borderActiveColor"
      type="card">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>
    <h3 style="margin-top: 50px">选项卡样式</h3>
    <dataease-tabs
      v-model="activeName"
      :font-color="fontColor"
      :active-color="activeColor"
      :border-color="borderColor"
      :border-active-color="borderActiveColor"
      type="card">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>
    <h3 style="margin-top: 50px">简洁的标签页</h3>
    <dataease-tabs v-model="activeName" :font-color="fontColor2" :active-color="activeColor2" :border-color="borderColor2">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>

    <h3 style="margin-top: 50px">radioGroup类型标签页</h3>
    <dataease-tabs
      v-model="activeName"
      type="card"
      style-type="radioGroup"
      :font-color="fontColor"
      :active-color="activeColor3"
      :border-color="borderColor3"
      :border-active-color="borderActiveColor3">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import DataeaseTabs from '@/components/dataease-tabs/index.vue';

const activeName = ref('first');
const fontColor = ref('#999999');
const activeColor = ref('#f18406');
const borderColor = ref('#999999'); // 可以设 none 全部边框消失
const borderActiveColor = ref('#f18406');
// 简洁的标签页
const fontColor2 = ref('#333333');
const activeColor2 = ref('blue');
const borderColor2 = ref('#999999');

// 特殊的标签页 radioGroup类型
const borderColor3 = ref('#999999');
const activeColor3 = ref('#f18406');
const borderActiveColor3 = ref('#f18406');

// 无边框
const noBorderColor = ref('none');
</script>
