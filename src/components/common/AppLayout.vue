<script lang="ts" setup></script>
<template>
  <div class="app-layout">
    <el-container class="app-layout-container">
      <el-header>Header</el-header>
      <el-main>
        <slot>Content</slot>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
.app-layout {
  height: 100%;
  .app-layout-container {
    height: 100%;
  }
}
</style>
