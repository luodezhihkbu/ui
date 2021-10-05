<demo>按钮类型</demo>

<template>
  <div>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="link">链接</Button>
    <Button type="text">文本</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>