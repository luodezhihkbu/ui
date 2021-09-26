<demo>
常规使用
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="bool"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const bool = ref(false);
    const toggle = () => {
      bool.value = !bool.value;
    };
    const f1 = () => {
      if ("某条件成立") {
        return true; // 或者不返回值
      } else {
        return false;
      }
    };
    const f2 = () => {};
    return { bool, toggle, f1, f2 };
  },
};
</script>