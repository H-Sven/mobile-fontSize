# 移动端750设计稿自动设置根元素font-size, 支持横竖屏。 同时提供全屏切换函数

### 使用步骤
```
//安装
npm install mobile-fontSize -S

//引入&使用
import 'mobile-fontSize'

```

### 说明
直接引入即可，可在审查元素中查看自动设置的根元素font-size

如果要使用内置的全屏切换函数，请按如下方法引入
```
import { requestFullScreen, exitFullscreen, fullscreenEnable, fullscreenElement } from 'mobile-fontSize'

// requestFullScreen 进入全屏
// exitFullscreen 退出全屏
// isFullScreen 判断是否全屏
// fullscreenElement 获取全屏元素

```

