import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import { h } from 'vue';
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
/* h() 会创建一个 <Markdown :path="`../markdown/${filename}.md`" /> 组件；
并将 path 的值传入到 Markdown.vue 的 Props 里；
必须要绑定 key 值，否则切换路由时组件不会更新 */
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename });
export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      // 嵌套路由
      children: [
        { path: "", component: DocDemo },
        { path: "intro", component: md('intro') },
        { path: "install", component: md('install') },
        { path: "get-started", component: md('get-started') },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});