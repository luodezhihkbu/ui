<template>
  <div>
    <h1>Switch 开关</h1>
    <!-- Switch1Demo 和 Switch2Demo 是变量，需要在 setup() 中 return -->
    <Demo :component="Switch1Demo" :tip="`使用<code>v-model</code>接受一个布尔值，值为<code>true</code>表示开，值为<code>flase</code>表示关。`"/>
    <Demo :component="Switch2Demo" :tip="`通过<code>disabled</code>属性来禁用开关。`"/>
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