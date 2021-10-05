<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <!-- 在 v-for 中，由于 ref 中使用了函数，所以需要动态绑定 -->
      <div
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :class="{ selected: t === selected }"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <!-- 用 <component> 来渲染 Tab 组件，相当于 <slot>；
          注意如果只渲染了一个 <component> 也需要绑定 key -->
      <component :is="currentTab" :key="currentTab.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // 获取模板中 <div> 元素的引用；变量名和 <div> 中 ref 属性的值对应
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
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
    // currentTab 的值会变化，所以需要用 computed()
    const currentTab = computed(() => {
      return defaults.filter((tag) => tag.props.title === props.selected)[0];
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    // watchEffect() 相当于 onMounted() 加 onUpdated()
    watchEffect(
      () => {
        // 让名为 indicator 的 <div> 的宽度和 selectedItem 的 <div> 的宽度相等
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        // 指定名为 indicator 的 <div> 的 left （left 是相对视口的位置）
        // { left: left1 } 表示析构赋值的重命名
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      },
      {
        flush: "post", // 让 watchEffect() 在 DOM 挂载或更新后执行
      }
    );
    return {
      defaults,
      titles,
      currentTab,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$green: #02bcb0;
$dark-green: #5aafbd;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $green;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $dark-green;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>