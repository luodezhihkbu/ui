<demo>确定弹出框</demo>

<template>
  <div>
    <Button type="primary" @click="toggle">打开弹出框</Button>
    <Dialog type="confirm" v-model:visible="bool" :closeOnClickOverlay="false" :ok="fn">
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <div>这是一段内容</div>
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
    const fn = () => {};
    return { bool, toggle, fn };
  },
};
</script>