<demo>用函数打开弹出框</demo>

<template>
  <div>
    <Button type="primary" @click="showDialog">打开弹出框</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "这是一段内容",
        ok() {},
      });
    };
    return { showDialog };
  },
};
</script>