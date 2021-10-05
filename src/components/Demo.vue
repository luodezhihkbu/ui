<template>
  <h2>{{ component.__sourceCodeTitle }}</h2>
  <div class="demo">
    <span class="tip" v-html="tip"></span>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
export default {
  components: { Button },
  props: {
    component: Object,
    tip: String,
  },
  setup(props) {
    const codeVisible = ref(true);
    const showCode = () => (codeVisible.value = true);
    const hideCode = () => (codeVisible.value = false);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    return { Prism, codeVisible, showCode, hideCode, html };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
h2 {
  padding-top: 32px;
}
.demo {
  border: 1px solid $border-color;
  margin-top: 16px;
  > .tip {
    display: block;
    padding: 8px 16px;
  }
  &-component {
    padding: 16px;
    border-top: 1px solid $border-color;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>