<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = ref<string>(null);
    // 使用异步的 import()，将异步的返回值 resul（用 default来获取）赋值给 content.value
    import(props.path).then((result) => {
      content.value = result.default;
    });
    return {
      content,
    };
  },
};
</script>