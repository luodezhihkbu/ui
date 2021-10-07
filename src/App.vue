<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth; // 获取屏幕宽度
    const asideVisible = ref(width < 500 ? false : true); // ref 表示数据是响应式的
    // 用 provide 提供变量 asideVisible 的值，各子组件可以用 inject 来获取
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      // 当路由切换时，在手机端隐藏 <aside>
      if (width < 500) {
        asideVisible.value = false;
      }
      window.scrollTo(0, 0);
    });
  },
};
</script>
