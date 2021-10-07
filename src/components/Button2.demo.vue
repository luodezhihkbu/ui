<demo>按钮大小</demo>

<template>
  <div>
    <div>
      <Button size="big">大按钮</Button>
      <Button>中按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
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