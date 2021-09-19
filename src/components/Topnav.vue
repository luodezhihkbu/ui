<template>
  <div class="topnav">
    <div class="logo" @click="toggle">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    // 用 inject 来获取 App.vue 提供的 asideVisible 的值；
    // <Ref<boolean>> 表示值的类型为包含 boolean 的 Ref
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggle = () => {
      asideVisible.value = !asideVisible.value; // 要用 asideVisible 的 value 属性来拿到它的值
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>