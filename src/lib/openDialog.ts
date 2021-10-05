import Dialog from "./Dialog.vue";
// @ts-ignore
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { type, title, content, ok } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          type,
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok
        },
        {
          title, content
        }
      );
    },
  });
  app.mount(div);
};