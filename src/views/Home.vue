<template>
  <div class="topnavAndBanner">
    <div class="logo">
      <svg>
        <use xlink:href="#icon-design"></use>
      </svg>
      <span>Leautify-UI</span>
    </div>
    <div class="banner">
      <p class="name">Leautify-UI</p>
      <h2>一个简洁好用的 UI 组件库</h2>
      <div class="actions">
        <router-link to="/doc">开始使用</router-link>
        <a href="https://github.com/luodezhihkbu/ui">
          <svg>
            <use xlink:href="#icon-github"></use>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$color: #007974;
$border-radius: 18px;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  .logo {
    display: flex;
    align-items: center;
    padding: 16px;
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
  clip-path: ellipse(80% 60% at 50% 40%);
  .banner {
    color: $green;
    padding: 80px 0 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .name {
      font-size: 38px;
    }
    > .actions {
      padding: 16px 0;
      display: flex;
      align-items: center;
      a {
        background: $green;
        color: white;
        margin: 0 8px;
        padding: 6px 28px;
        border-radius: $border-radius;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        > svg {
          width: 16px;
          height: 16px;
          margin-right: 2px;
        }
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>