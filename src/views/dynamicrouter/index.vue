<template>
  <el-container>
    <el-header>
      <RouterNavigator></RouterNavigator>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import RouterNavigator from '../../components/DynamicRouterNavigator.vue'
</script>