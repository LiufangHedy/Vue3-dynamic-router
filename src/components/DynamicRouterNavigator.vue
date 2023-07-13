<template>
  hello
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    router
    mode="horizontal"
  >
    <template v-for="menu in menuList" :key="menu.id">
      <!-- 不存在子路由 -->
      <el-menu-item v-if="!menu.children" :index="'/main' + menu.path">
        <span>{{ menu.name }}</span>
      </el-menu-item>
      <!-- 存在子路由 -->
      <el-sub-menu v-else :index="'/main' + menu.path">
        <template #title>{{ menu.name }}</template>
        <el-menu-item
          v-for="submenu in menu.children"
          :key="submenu.id"
          :index="'/main' + submenu.path"
          ><span>{{ submenu.name }}</span></el-menu-item
        >
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../store/index'
console.log('useUserStore: ', useUserStore())

const menuList = computed(() => useUserStore().menuList)
console.log('menuListttt: ', menuList)
const activeIndex = computed(() => useRoute().path)
</script>

