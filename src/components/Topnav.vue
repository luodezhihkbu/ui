<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-design"></use>
      </svg>
      <span>Leautify-UI</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <router-link to="/doc/switch">组件</router-link>
      </li>
      <li>
        <a href="https://github.com">
          <svg>
            <use xlink:href="#icon-github2"></use>
          </svg>
          <span>GitHub</span>
        </a>
      </li>
    </ul>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleAside"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
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
$green: #02bcb0;
$color: #007974;
.topnav {
  background: white;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 12em;
    margin-right: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    > svg {
      width: 32px;
      height: 32px;
      margin-right: 6px;
    }
    > span {
      color: $green;
      font-size: 22px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-bottom: 2px solid white;
        &:hover {
          border-bottom: 2px solid #5aafbd;
        }
        > svg {
          width: 16px;
          height: 16px;
          margin-right: 2px;
        }
      }
    }
  }
  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
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