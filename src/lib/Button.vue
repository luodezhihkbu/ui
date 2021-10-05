<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { type, size, loading } = props;
    const classes = computed(() => {
      return {
        [`gulu-type-${type}`]: type,
        [`gulu-size-${size}`]: size,
        [`gulu-loading-${loading}`]: loading,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$dark-green: #5aafbd;
$green: #02bcb0;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $green;
    border-color: $dark-green;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gulu-type-primary {
    background: $green;
    color: white;
    border-color: $green;
    &:hover,
    &:focus {
      background: darken($green, 10%);
      border-color: darken($green, 10%);
    }
  }
  &.gulu-type-danger {
    background: $red;
    border-color: $red;
    color: white;
    &:hover,
    &:focus {
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
  }
  &.gulu-type-link {
    border-color: transparent;
    box-shadow: none;
    color: $green;
    &:hover,
    &:focus {
      color: lighten($green, 10%);
    }
  }
  &.gulu-type-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gulu-type-button {
    &[disabled] {
      cursor: not-allowed;
      border-color: lighten($border-color, 10%);
      color: lighten($color, 30%);
    }
  }
  &.gulu-type-primary {
    &[disabled] {
      cursor: not-allowed;
      border-color: lighten($green, 30%);
      background: lighten($green, 30%);
    }
  }
  &.gulu-type-danger {
    &[disabled] {
      cursor: not-allowed;
      border-color: lighten($red, 30%);
      background: lighten($red, 30%);
    }
  }
  &.gulu-loading-true {
    cursor: default;
    &:hover,
    &:focus {
      color: $color;
      border-color: $border-color;
    }
  }
  > .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $green $green $green transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
    &:hover,
    &:focus {
      color: $color;
      border-color: $border-color;
    }
  }
  &.gulu-type-primary {
    &.gulu-loading-true {
      cursor: default;
      &:hover,
      &:focus {
        color: white;
        border-color: $green;
        background: $green;
      }
    }
    > .gulu-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: white white white transparent;
      border-style: solid;
      border-width: 2px;
      animation: gulu-spin 1s infinite linear;
    }
  }
}
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>