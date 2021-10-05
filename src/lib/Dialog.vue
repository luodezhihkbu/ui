<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="gulu-dialog-overlay" @click="OnClickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header>
            <slot name="title" />
            <span class="gulu-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button :class="type" @click="close">取消</Button>
            <Button type="primary" @click="ok">确定</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    type: {
      type: String,
      default: "confirm",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    // 由父组件来控制点击遮罩层后是否隐藏对话框
    const OnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    /* 点击 ok 按钮后，判断父组件的 ok 属性是否存在 f1 函数，因为可能需要通过 f1 来执行某些事件，比如判断对话框是否输入了内容；
    如果存在 f1 并且执行完毕后 f1 的返回值不是 false，那么就调用 close() 来隐藏对话框 */
    const ok = () => {
      // props.ok?.() !== false 等价于 props.ok && props.ok() !==false
      // @ts-ignore
      if (props.ok?.() !== false) {
        close();
      }
    };
    return { close, OnClickOverlay, ok };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 16px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
    > .alert {
      display: none;
    }
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>