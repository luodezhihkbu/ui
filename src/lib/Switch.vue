<template>
  <button class="gulu-switch" @click="toggle" :class="{ 'gulu-checked': value }">
    <span></span>
  </button>
</template>

<script lang='ts'>
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$green: #02bcb0;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 250ms; // 表示如果 span 任意一个属性的值的发生变化了，变化的时间为 250ms
  }
  &.gulu-checked {
    background: $green;
    > span {
      // 可以理解为，先把 left 设为 button 的宽度，再减去 $h2 和 2px；
      // $h2 是变量，所以要使用 #{}
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  // 表示鼠标按下 button 到松开鼠标之间的时间段更改的样式
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.gulu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>