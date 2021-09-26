import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import { h } from "vue";
import Markdown from "./components/Markdown.vue";
import intro from "./markdown/intro.md"; // 导入的变量为字符串类型
import install from "./markdown/install.md";
import getStarted from "./markdown/get-started.md";

const history = createWebHashHistory();
/* h() 会创建一个 <Markdown :content=string /> 组件；
并将 content 的值传入到 Markdown.vue 的 Props 里；
必须要绑定 key 值，否则切换路由时组件不会更新 */
const md = (string) => h(Markdown, { content: string, key: string });
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
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: md(intro) },
        { path: "install", component: md(install) },
        { path: "get-started", component: md(getStarted) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});