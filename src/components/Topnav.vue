<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    // 用 inject 来获取 App.vue 提供的 asideVisible 的值；
    // <Ref<boolean>> 表示值的类型为包含 boolean 的 Ref
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value; // 如果要改变 asideVisible 的值，要使用 value 属性
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
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
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>