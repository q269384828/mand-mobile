---
title: Change Log
toc: hidden
---

<<<<<<< HEAD
### 1.6.7
`2018-12-28`
- Fix
  - `Toast` execute timing

### 1.6.6
`2018-12-16`
- Fix
  - Fix `InputItem` repeated formatting triggered by two-way binding
  - Fix `Radio` errors caused by `selectedIndex` not reset after updating the data source [#251](https://github.com/didi/mand-mobile/issues/251)
  - Fix `TabPicker` problem that `TabBar` option cannot be cleared when updating [#252](https://github.com/didi/mand-mobile/issues/252)

### 1.6.4
`2018-11-20`
- Fix
  - `Swiper` slight movement trigger `afterChange` [#232](https://github.com/didi/mand-mobile/issues/232)

### 1.6.3
`2018-10-29`
- Feature
  - `TabPicker` custom text [#216](https://github.com/didi/mand-mobile/issues/216)
- Fix
  - undefined static methods [#223](https://github.com/didi/mand-mobile/issues/223)

### 1.6.2
`2018-10-19`
-Fix
  - Remove `Cashier` max height limit [#208](https://github.com/didi/mand-mobile/issues/208)
  - `Button` click event not working on some old browsers

### 1.6.1
`2018-09-29`
- Fix
  - max content overflow [#200](https://github.com/didi/mand-mobile/issues/200)

### 1.6.0
`2018-09-03`
- Feature
  - `ScrollView` Add header/footer slots [#188](https://github.com/didi/mand-mobile/issues/188)
- Fix
  - `InputItem` clear-btn visbible only input focused [#196](https://github.com/didi/mand-mobile/issues/196)
  - `DatePicker` reset column before update [#192](https://github.com/didi/mand-mobile/issues/192)

### 1.5.6
`2018-08-20`
- Fix
  - `ScrollView` not scrollable when there is a keyboard [#184](https://github.com/didi/mand-mobile/issues/184)

### 1.5.5
`2018-08-13`
- Fix
  - `ScrollView` fix fault tolerance without tagName [#183](https://github.com/didi/mand-mobile/issues/183)
  - `Cashier` fix passed index of default selected item to click hand [#181](https://github.com/didi/mand-mobile/issues/181)

### 1.5.4
`2018-08-01`
- Feature
  - `Stepper` add `v-model` support [#171](https://github.com/didi/mand-mobile/issues/171)
  - `Stepper` add `is-integer` prop to allow integer input only [#171](https://github.com/didi/mand-mobile/issues/171)
  - `ScrollView` add `auto-reflow` prop to auto reflow scroll area size
- Fix
  - `Selector` missing prop [#173](https://github.com/didi/mand-mobile/issues/173)
  - Typescript declaration file [#169](https://github.com/didi/mand-mobile/issues/169)/[#167](https://github.com/didi/mand-mobile/issues/167)/[#166](https://github.com/didi/mand-mobile/issues/166)
  - Remove `InputItem` auto trim value [#164](https://github.com/didi/mand-mobile/issues/164)

### 1.5.2
`2018-07-24`
- Fix
  - `ScrollView` content not response to click event [#158](https://github.com/didi/mand-mobile/issues/158)
  - `Selector` scroll bug  [157](https://github.com/didi/mand-mobile/issues/157)

### 1.5.1
`2018-07-23`
- Fix
  - Improve Typescript definitions [#153](https://github.com/didi/mand-mobile/issues/153)

### 1.5.0
`2018-07-20`
- Feature
  - Add `ScrollView` component
  - Add `CheckGroup`, `CheckList`, `CheckBox` components
  - `Radio` supports `is-across-border` prop
  - `Steps` supports `slot-scoped` with `index`
  - `TabBar` supports horizontal scrolling
- Fix
  - Fix asynchronous data-loading bug  of `Swiper`[#150](https://github.com/didi/mand-mobile/issues/150)
  - Fix automatic-installing bug while importing components library in global environment [#141](https://github.com/didi/mand-mobile/issues/141)
  - Fix style bug of `Radio`

### 1.4.4
`2018-07-12`
- Fix
  - `Swiper` document bug [#138](https://github.com/didi/mand-mobile/issues/138)
  - `Cashier` success icon style bug
  - `InputItem` numeric value support [#132](https://github.com/didi/mand-mobile/issues/132)
  - `Picker` return `undefined` of `getColumnValue` method when not set `defeaultIndex` [#131](https://github.com/didi/mand-mobile/issues/131)

### 1.4.3
`2018-07-04`
- Fix
  - `Radio` style bug

### 1.4.1
`2018-07-01`
- Feature
  - Add `Amount` component
  - Add `ActivityIndicator` component
  - `Dialog` add `Dialog.closeAll` static method
  - `ActionSheet` add static method to create action-sheet [#79](https://github.com/didi/mand-mobile/issues/79)
  - `FieldItem` remove restrictions on `arrow` [#124](https://github.com/didi/mand-mobile/issues/124)
- Fix
  - `Agree` flexbox layout bug

### 1.3.3
`2018-06-15`
- Feature
  - `Toast` add support of custom position [#89](https://github.com/didi/mand-mobile/issues/89)
=======
### 2.1.2

`2019-02-25`

>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
- Fix
  - Fix `ScrollView` is not able to trigger the problem when the content is not full.[#335](https://github.com/didi/mand-mobile/issues/335)
  - Fixed a problem with the line break when the `InputItem` title floated

### 2.1.1

`2019-02-23`

- Fix
  - Fix the problem that `postcss` is not in effect at build time, causing assets such as images in `mand-mobile.css` not to be processed by url inline。
  
### 2.1.0

`2019-02-22`

- Feature
  - `Seletor`: `defaultValue` prop remove type limits[#305](https://github.com/didi/mand-mobile/issues/305)
  - `ScrollView`: add `immediateCheckEndReaching` prop，in order to check reach bottom immediately and emit `endReached` event[#312](https://github.com/didi/mand-mobile/issues/312)
  - `Picker` and `DatePicker`: add `lineHeight` prop, which is used to customize option line height[#323](https://github.com/didi/mand-mobile/issues/323)
  - `ScrollView`: add `touchAngle` prop, in order to control scroll angle[#326](https://github.com/didi/mand-mobile/issues/326)
  - `Amount`: use system default font

- Fix
  - Update type declaration
  - `WaterMark`: fix can not click content area[#304](https://github.com/didi/mand-mobile/issues/304)
  - `Swiper`: fix when set `isLoop` as `false` and `transition` as `slideY`, can not scroll problem[#311](https://github.com/didi/mand-mobile/issues/311)
  - `TabPicker`: fix scroll and click bug[#319](https://github.com/didi/mand-mobile/issues/319)
  - `InputItem`: fix wrong cursor position[#322](https://github.com/didi/mand-mobile/issues/322)
  - `InputItem`: fix bug at `Vue 2.6+`[#324](https://github.com/didi/mand-mobile/issues/324)
  - Update docs

### 2.0.0

`2019-01-30`

- Feature
  - `DetailItem` increase supported types of `content`[#285](https://github.com/didi/mand-mobile/issues/285)
  - `Dialog` add default value `true` of `preventScroll`[#286](https://github.com/didi/mand-mobile/issues/286)
  - `Radio` increase supported types of `value`[#289](https://github.com/didi/mand-mobile/issues/289)
  - `Icon` font type increases without prefix class name[#295](https://github.com/didi/mand-mobile/issues/295)
  - `Check`，`CheckBox`increase supported types of `name` and `value`[#297](https://github.com/didi/mand-mobile/issues/297)
  - `InputItem` add prop `virtual-keyboard-vm`, used to support external custom financial keyboards
  - `Cashier` add scoped slot `footer` and `channels` add property `img`

- Fix
  - `InputItem` remove setting cursor for native type [#268](https://github.com/didi/mand-mobile/issues/268)
  - supplement `index.d.ts`
  - fix part of components style issues

### 2.0.0-rc.5

`2019-01-04`

- Feature
  - Add `PascalCase` name to global components[#261](https://github.com/didi/mand-mobile/issues/261)
  - `ScrollView` add prop `manual-init` and method `init`
  - `TabBar`, `Tabs` add prop `immediate`
  - `Swiper` add prop `transition-duration`

- Fix
  - fix part of components style issues

### 2.0.0-rc.4

`2018-12-21`

- Feature
  - Optimize `NumberKeyboard` input experience
  - `Cashier` adds slot `scene`
  - `Picker` adds prop `default-value`[#255](https://github.com/didi/mand-mobile/issues/255)

- Fix
  - Fix `Popup` continuous "show & hide" invalidation problem
  - Fix `Steps` style compatibility issues
  - Fix `InputItem` style problem, increase close button click area
  - `setError` of `Captcha` no longer clears codes

### 2.0.0-rc.3

`2018-12-14`

🎉🎉🎉 👏👏👏 Learn more in the<a href="#/en-US/docs/migration">Migration from 1.x</a>.

### 1.x

<<<<<<< HEAD
=======
Visit [GitHub](https://github.com/didi/mand-mobile/blob/1.x/CHANGELOG.en-US.md) to read `1.x` change logs.

>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
