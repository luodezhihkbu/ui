<demo>基础用法</demo>

<template>
  <Tabs v-model:selected="selectedTitle">
    <Tab title="标签1">内容1</Tab>
    <Tab title="标签2">内容2</Tab>
    <Tab title="标签3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selectedTitle = ref("标签1");
    return { selectedTitle };
  },
};
</script>