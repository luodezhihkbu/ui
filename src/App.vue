<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue";

export default {
  name: "App",
  setup() {
    const asideVisible = ref(false);
    // 用 provide 提供变量 asideVisible 的值，各组件可以用 inject 来获取
    provide("asideVisible", asideVisible); 
  },
};
</script>
