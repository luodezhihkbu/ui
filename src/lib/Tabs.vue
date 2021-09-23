<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item" v-for="(t, index) in titles" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="gulu-tabs-content">
      <!-- 用 component 来渲染 Tab 组件，相当于 <slot> -->
      <component v-for="(c, index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    // 获取 TabDemo.vue 中 Tabs 组件里的子组件 Tab（相当于 Tabs 组件里 <slot> 的内容），返回值是数组类型
    const defaults = context.slots.default();
    // 判断 Tabs 组件里的子组件 Tab 是否是 <Tab> 标签，用 type 属性来获取标签的类型
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 的子标签必须是 Tab");
      }
    });
    // 获取 Tabs 组件里的子组件 Tab 中的 title 属性的值
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults,
      titles,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>