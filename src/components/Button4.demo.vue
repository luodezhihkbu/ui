<demo>
支持 disabled
</demo>

<template>
  <!-- disabled 是 <button> 自身的属性，默认值为 true ，下面的 disabled 也可以写成 :disabled="true" -->
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>