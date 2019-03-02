---
title: 更新日志
toc: hidden
---

<<<<<<< HEAD
### 1.6.7
`2018-12-28`
- Fix
  - 修复`Toast`连续调用导致无法隐藏问题

- Fix
### 1.6.6
`2018-12-16`
- Fix
  - 修复`InputItem`双向绑定触发的重复格式化
  - 修复`Radio`更新数据源后未重置`selectedIndex`导致的错误选中 [#251](https://github.com/didi/mand-mobile/issues/251)
  - 修复`TabPicker`中`TabBar`更新时无法清除的问题[#252](https://github.com/didi/mand-mobile/issues/252)

### 1.6.5
`2018-12-01`
- Fix
  - `Popup` 异步隐藏 [#242](https://github.com/didi/mand-mobile/issues/242)
  - `Button` 蒙层点击击穿 [#244](https://github.com/didi/mand-mobile/issues/244)
  - `Toast` 异步隐藏 [#238](https://github.com/didi/mand-mobile/issues/242)
  - `Picker` 双向查找有效值 [#238](https://github.com/didi/mand-mobile/issues/238)
  - `DatePicker` BUG 修复 [#241](https://github.com/didi/mand-mobile/issues/241)

### 1.6.4
`2018-11-20`
- Fix
  - `Swiper`抖动触发`afterChange` [#232](https://github.com/didi/mand-mobile/issues/232)

### 1.6.3
`2018-10-29`
- Feature
  - `TabPicker`文案可配置[#216](https://github.com/didi/mand-mobile/issues/216)
- Fix
  - 静态方法未定义 BUG [#223](https://github.com/didi/mand-mobile/issues/223)

### 1.6.2
`2018-10-19`
-Fix
  - 移除`Cashier`最大高度限制 [#208](https://github.com/didi/mand-mobile/issues/208)
  - 修复`Button`在某些旧浏览器下无法响应点击事件

### 1.6.1
`2018-09-29`
- Fix
  - 内容产出最大宽度 [#200](https://github.com/didi/mand-mobile/issues/200)

### 1.6.0
`2018-09-03`
- Feature
  - `ScrollView` 新增header/footer插槽 [#188](https://github.com/didi/mand-mobile/issues/188)
- Fix
  - `InputItem` 清空按钮只在聚焦的时候显示 [#196](https://github.com/didi/mand-mobile/issues/196)
  - `DatePicker` 设置default-date出现复数列 [#192](https://github.com/didi/mand-mobile/issues/192)

### 1.5.6
`2018-08-20`
- Fix
  - `ScrollView` 修正键盘弹起时无法滚动问题 [#184](https://github.com/didi/mand-mobile/issues/184)

### 1.5.5
`2018-08-13`
- Fix
  - `ScrollView` 修正无标签名时的方法调用错误 [#183](https://github.com/didi/mand-mobile/issues/183)
  - `Cashier` 修正属性缺失问题 [#181](https://github.com/didi/mand-mobile/issues/181)

### 1.5.4
`2018-08-01`
- Feature
  - `Stepper`新增`v-model`绑定 [#171](https://github.com/didi/mand-mobile/issues/171)
  - `Stepper`新增`is-integer`限制输入为整数 [#171](https://github.com/didi/mand-mobile/issues/171)
  - `ScrollView`新增 `auto-reflow`自动重置滚动区域尺寸
- Fix
  - 修正`Selector`参数缺失 [#173](https://github.com/didi/mand-mobile/issues/173)
  - Typescript声明文件修正 [#169](https://github.com/didi/mand-mobile/issues/169)/[#167](https://github.com/didi/mand-mobile/issues/167)/[#166](https://github.com/didi/mand-mobile/issues/166)
  - 修正`InputItem`值自动裁剪前后空格问题 [#164](https://github.com/didi/mand-mobile/issues/164)

### 1.5.2
`2018-07-24`
- Fix
  - 修正`ScrollView`内容无法触发点击事件 [#158](https://github.com/didi/mand-mobile/issues/158)
  - 修正`Selector`组件滚动穿透 [#157](https://github.com/didi/mand-mobile/issues/157)

### 1.5.1
`2018-07-23`
- Fix
  - 完善 Typescript 类型声明 [#153](https://github.com/didi/mand-mobile/issues/153)

### 1.5.0
`2018-07-20`
- Feature
  - 新增`ScrollView`组件
  - 新增`CheckGroup`, `CheckList`, `CheckBox`组件
  - `Radio`新增`is-across-border`支持边框通栏样式
  - `Steps`新增`slot-scoped`中透传`index`
  - `TabBar`支持横向滚动
- Fix
  - 修正`Swiper`异步加载数据问题 [#150](https://github.com/didi/mand-mobile/issues/150)
  - 修正全局引用组件库的自动安装问题 [#141](https://github.com/didi/mand-mobile/issues/141)
  - 修正`Radio`样式问题

### 1.4.4
`2018-07-12`
- Fix
  - 修正`Swiper`文档错误 [#138](https://github.com/didi/mand-mobile/issues/138)
  - 修复`Cashier`成功图标样式问题
  - 修复`InputItem`数值支持 [#132](https://github.com/didi/mand-mobile/issues/132)
  - 修复`Picker`未设置`defaultIndex`时`getColumnValue`取值`undefined`的问题 [#131](https://github.com/didi/mand-mobile/issues/131)

### 1.4.3
`2018-07-04`
- Fix
  - 修复`Radio`样式问题

### 1.4.1
`2018-07-01`
- Feature
  - 新增金融数字`Amount`
  - 新增活动指示器`ActivityIndicator`
  - 新增`Dialog`关闭所有模态窗方法`closeAll`
  - 新增`ActionSheet`单例调用模式及静态方法 [#79](https://github.com/didi/mand-mobile/issues/79)
  - 新增`FieldItem`左右插槽并取消`arrow`限制 [#124](https://github.com/didi/mand-mobile/issues/124)
- Fix
  - 修复`Agree`布局问题

### 1.3.3
`2018-06-15`
- Feature
  - 新增`Toast`自定义位置参数 [#89](https://github.com/didi/mand-mobile/issues/89)
=======
### 2.1.2

`2019-02-25`

>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
- Fix
  - 修复`ScrollView`在内容不满一屏是无法触发到底的问题[#335](https://github.com/didi/mand-mobile/issues/335)
  - 修复`InputItem`标题浮动时换行的问题

### 2.1.1

`2019-02-23`

- Fix
  - 修复构建时`postcss`未生效的问题，导致`mand-mobile.css`中图片等资源未被做url inline处理。
  
### 2.1.0

`2019-02-22`

- Feature
  - `Seletor`属性`defaultValue`去除类型限制[#305](https://github.com/didi/mand-mobile/issues/305)
  - `ScrollView`增加属性`immediateCheckEndReaching`，用于控制初始化时就立即触发是否到达底部检查，并在内容不超过容器是也会触发`endReached`，并对事件触发防抖处理[#312](https://github.com/didi/mand-mobile/issues/312)
  - `Picker`和`DatePicker`增加属性`lineHeight`，用于自定义选项高度[#323](https://github.com/didi/mand-mobile/issues/323)
  - `ScrollView`增加属性`touchAngle`，用于限制仅一个方向滚动是的滚动触发角度范围[#326](https://github.com/didi/mand-mobile/issues/326)
  - `Amount`默认使用系统内置字体

- Fix
  - 补充类型声明，修复无默认导出报错
  - 修复`WaterMark`内容区域无法点击的问题[#304](https://github.com/didi/mand-mobile/issues/304)
  - 修复`Swiper`当`isLoop`为`false`且`transition`为`slideY`时无法滑动问题[#311](https://github.com/didi/mand-mobile/issues/311)
  - 修复`TabPicker`滚动或点击穿透的问题[#319](https://github.com/didi/mand-mobile/issues/319)
  - 修复`InputItem`输入过快时偶尔导致光标位置异常的问题[#322](https://github.com/didi/mand-mobile/issues/322)
  - 修复`InputItem`在`Vue 2.6+`中金融键盘闪现问题[#324](https://github.com/didi/mand-mobile/issues/324)
  - 修复部分文档问题

### 2.0.0

`2019-01-30`

- Feature
  - `DetailItem`属性`content`增加支持类型[#285](https://github.com/didi/mand-mobile/issues/285)
  - `Dialog`属性`preventScroll`默认值改为`true`[#286](https://github.com/didi/mand-mobile/issues/286)
  - `Radio`属性`value`增加支持类型[#289](https://github.com/didi/mand-mobile/issues/289)
  - `Icon`的字体图标类型增加无前缀类名[#295](https://github.com/didi/mand-mobile/issues/295)
  - `Check`，`CheckBox`属性`name`，`value`增加支持类型[#297](https://github.com/didi/mand-mobile/issues/297)
  - `InputItem`增加属性`virtual-keyboard-vm`，用于支持外部自定义金融键盘
  - `Cashier`增加插槽`footer`，`channels`增加属性`img`

- Fix
  - 去除`InputItem`内对原生输入框光标位置设置 [#268](https://github.com/didi/mand-mobile/issues/268)
  - 补充`index.d.ts`
  - 修复部分组件样式问题

### 2.0.0-rc.5

`2019-01-04`

- Feature
  - 全量引入时的注册全局组件名增加`PascalCase`[#261](https://github.com/didi/mand-mobile/issues/261)
  - `ScrollView`增加属性`manual-init`和方法`init`
  - `TabBar`, `Tabs`增加属性`immediate`
  - `Swiper`增加属性`transition-duration`

- Fix
  - 修复部分组件样式问题

### 2.0.0-rc.4

`2018-12-21`

- Feature
  - 优化`NumberKeyboard`输入体验
  - `Cashier`增加插槽`scene`
  - `Picker`增加`default-value`[#255](https://github.com/didi/mand-mobile/issues/255)

- Fix
  - 修复`Popup`连续展示隐藏时失效问题
  - 修复`Steps`样式兼容问题
  - 修复`InputItem`样式问题，增大关闭按钮点击区域
  - `Captcha`的`setError`中不再清除已输入内容

### 2.0.0-rc.3

`2018-12-14`

🎉🎉🎉 👏👏👏 更多内容查看 <a href="#/zh-CN/docs/migration">从1.x迁移</a>。

<<<<<<< HEAD
### 1.0.0
`2018-04-11`
- 正式公开发布
=======
### 1.x

去[GitHub](https://github.com/didi/mand-mobile/blob/1.x/CHANGELOG.md)查看`1.x`的 Change Log。
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
