<template>
  <h1>Dialog 弹出框</h1>
  <Demo
    :component="Dialog1Demo"
    :tip="`通过<code>type</code>属性设置弹出框的类型，<code>alert</code>表示提示弹出框，只包含一个确定按钮。<code>visible</code>属性接受一个布尔值，值为<code>ture</code>表示打开弹出框，值为<code>flase</code>表示关闭弹出框。<code>closeOnClickOverlay</code>属性用来设置点击弹出框外部的阴影层后，是否能关闭弹出框。`"
  />
  <Demo
    :component="Dialog2Demo"
    :tip="`通过<code>type</code>属性设置弹出框的类型，<code>confirm</code>表示确定弹出框，包含取消和确定按钮。<code>visible</code>属性接受一个布尔值，值为<code>ture</code>表示打开弹出框，值为<code>flase</code>表示关闭弹出框。<code>closeOnClickOverlay</code>属性用来设置点击弹出框外部的阴影层后，是否能关闭弹出框。<code>ok</code>属性接受一个回调函数，用来设置点击确定按钮后需要执行的操作，函数返回值为<code>false</code>时不会关闭弹出框。`"
  />
  <Demo
    :component="Dialog3Demo"
    :tip="`导入<code>openDialog</code>函数，该函数接受三个参数，分别表示标题，内容和确认按钮的回调函数。通过使用<code>openDialog</code>函数的方式来打开弹出框。`"
  />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
import Dialog3Demo from "./Dialog3.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Dialog1Demo, Dialog2Demo, Dialog3Demo };
  },
};
</script>