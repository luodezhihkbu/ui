<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="Tabs1Demo" :tip="`使用<code>v-model</code>来绑定当前激活标签对应的标签名，默认为第一个标签。通过<code>title</code>属性设置标签名。`"/>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Tabs1Demo };
  },
};
</script>