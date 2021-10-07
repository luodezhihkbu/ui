# 开始使用

使用前请确保已[安装](#/doc/install)本组件库。

## 完整引入

```javascript
import { Button, Dialog, Switch, Tabs } from "leautify-ui"
import 'leautify-ui/dist/lib/leautify.css'
```

在 `Vue` 文件中写入上面的代码便完成了组件库的引入，需要注意的是样式文件也需要一同引入。

## 按需引入

当然，你也可以根据需要，按需引入某一个或多个组件。

```javascript
import { Button } from "leautify-ui" // 只引入 Button 组件
import 'leautify-ui/dist/lib/leautify.css'
```

## Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
import { Button, Dialog, Switch, Tabs } from "leautify-ui"
export default {
  components: { Button }
}
</script>
```