<template>
  <div>
    <h1>Switch 组件示例</h1>
    <!-- Switch1Demo 和 Switch2Demo 是变量，需要在 setup() 中 return -->
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script lang='ts'>
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from './Demo.vue'
export default {
  components: { Demo },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>