<template>
  <h1>Button 按钮</h1>
  <Demo
    :component="Button1Demo"
    :tip="`按钮支持<code>button</code>、<code>primary</code>、<code>danger</code>、<code>link</code>、<code>text</code>五种类型，默认类型为<code>button</code>。`"
  />
  <Demo
    :component="Button2Demo"
    :tip="`按钮支持<code>big</code>、<code>normal</code>、<code>small</code>三种大小，默认大小为<code>normal</code>。`"
  />
  <Demo
    :component="Button3Demo"
    :tip="`通过<code>disabled</code>属性来禁用按钮。`"
  />
  <Demo
    :component="Button4Demo"
    :tip="`通过<code>loading</code>属性设置按钮为加载状态。`"
  />
</template>

<script>
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Button1Demo, Button2Demo, Button3Demo, Button4Demo };
  },
};
</script>