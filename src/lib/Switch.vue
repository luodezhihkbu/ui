<template>
  <button @click="toggle" :class="{ checked: value }">
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
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
}
button.checked {
  background: blue;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2/2;
  transition: left 250ms; // 表示如果 left 变化了，变化的时间为 250ms
}
button.checked > span {
  // 可以理解为，先把 left 设为 button 的宽度，再减去 $h2 和 2px；
  // $h2 是变量，所以要使用 #{}
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>