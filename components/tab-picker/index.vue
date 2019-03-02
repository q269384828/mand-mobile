<template>
  <div class="md-tab-picker">
    <md-popup
      :value="value"
      position="bottom"
      :mask-closable="maskClosable"
      @input="$_onPopupInput"
      @show="$_onPopupShow"
      @hide="$_onPopupHide"
      @maskClick="$_onCancel"
    >
      <md-popup-title-bar
        :title="title"
        :describe="describe"
        @cancel="$_onCancel"
      >
        <md-icon name="close" size="lg" slot="cancel" />
      </md-popup-title-bar>
      <div class="md-tab-picker-content">
<<<<<<< HEAD
        <md-tabs
          ref="tabs"
          :titles="subTitles"
          :default-index="defaultTabIndex"
          :force-use-array="hasTitleSlotScope"
          @indexChanged="$_onIndexChange"
          :key="refreshTabPicker"
        >
          <template
            slot="title"
            slot-scope="props">
            <slot :label="props" name="titles"></slot>
          </template>
          <div v-for="(title, index) of subTitles" :key="index">
            <md-radio
              ref="radio1"
              :options="renderData[index].data"
              :default-index="~renderData[index].clickedKey ? renderData[index].clickedKey : -1"
              :key="renderData[index].clickedKey"
              :is-slot-scope="hasOptionSlotScope"
              is-across-border
              @change="$_onRadioChange"
            >
              <template
                slot-scope="props">
                <slot :option="props.option" :index="index" name="option"></slot>
              </template>
            </md-radio>
          </div>
        </md-tabs>
        <div class="slot-wrapper" v-if="isLoading || isDataError">
          <div class="slot-inner">
            <slot name="error" v-if="isDataError">{{errorLabel}}</slot>
            <slot name="loading" v-if="isLoading">{{loadingLabel}}</slot>
          </div>
        </div>
=======
          <md-tabs
            v-model="currentTab"
            ref="tabs"
          >
            <md-scroll-view :scrolling-x="false" auto-reflow>
              <md-tab-pane
                v-for="(pane, index) in panes"
                :key="pane.name"
                :name="pane.name"
                :label="pane.label"
              >
                <md-radio-list
                  :value="pane.value"
                  :options="pane.options"
                  :is-slot-scope="hasSlot"
                  :key="tabsTmpKey"
                  @input="$_onSelectPaneItem($event, index)"
                  icon=""
                  icon-inverse=""
                  icon-position="right"
                >
                  <template slot-scope="{ option }">
                    <slot :option="option"></slot>
                  </template>
                </md-radio-list>
              </md-tab-pane>
            </md-scroll-view>
          </md-tabs>
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
      </div>
    </md-popup>
  </div>
</template>

<script>import Popup from '../popup'
import PopupTitlebar from '../popup/title-bar'
import popupMixin from '../popup/mixins'
import popupTitleBarMixin from '../popup/mixins/title-bar'
import Icon from '../icon'
import Tabs from '../tabs'
import TabPane from '../tab-pane'
import RadioList from '../radio-list'
import ScrollView from '../scroll-view'
import {extend} from '../_util'

export default {
  name: 'md-tab-picker',

  mixins: [popupMixin, popupTitleBarMixin],

  components: {
    [Popup.name]: Popup,
    [PopupTitlebar.name]: PopupTitlebar,
    [Icon.name]: Icon,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    [RadioList.name]: RadioList,
    [ScrollView.name]: ScrollView,
  },

  props: {
<<<<<<< HEAD
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    okText: {
      type: String,
      default: '确认',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    loadingLabel: {
      type: String,
      default: '载入中',
    },
    errorLabel: {
      type: String,
      default: '数据异常',
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
=======
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
    data: {
      type: Object,
      default: () => ({}),
    },
    defaultValue: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '请选择',
    },

    // Mixin Props
    // value: {
    //   type: Boolean,
    //   default: false,
    // },
    // title: {
    //   type: String,
    //   default: '',
    // },
    // describe: {
    //   type: String,
    //   default: '',
    // },
    // maskClosable: {
    //   type: Boolean,
    //   default: true,
    // },
  },

  data() {
    return {
      selected: [],
      oldSelected: [],
      currentTab: '',
      oldCurrentTab: '',
      tabsTmpKey: Date.now(),
    }
  },

  computed: {
    panes() {
      const panes = []
      let target = this.data
      let cursor = 0
      while (target && target.name) {
        const pane = {
          name: target.name,
          label: target.label || this.placeholder,
          value: this.selected[cursor],
          selected: null,
          options: target.options,
        }
        let find = false
        for (let i = 0, len = target.options.length; i < len; i++) {
          if (target.options[i].value === this.selected[cursor]) {
            pane.label = target.options[i].label
            pane.selected = target.options[i]
            target = target.options[i].children
            find = true
            cursor++
            break
          }
        }
        if (!find) {
          target = null
        }
        panes.push(pane)
      }

      return panes
    },
    hasSlot() {
      return !!this.$scopedSlots.default
    },
  },

  created() {
    /* istanbul ignore else */
    if (this.defaultValue) {
      this.selected = this.defaultValue
    }

    /* istanbul ignore else */
    if (this.data) {
      this.currentTab = this.data.name
    }
  },

  methods: {
<<<<<<< HEAD
    // MARK: private methods
    $_initTabPicker() {
      switch (this.dataStruct) {
        case 'normal':
          this.$_initNoCascadeData()
          break
        case 'cascade':
          this.$_initCascadeData()
          break
        case 'async':
          this.$_initAsyncCascadeData()
          break
        default:
          break
      }
    },
    $_initNoCascadeData() {
      if (this.data.length === 0) {
        return
      }
      this.isLoading = false

      const initialIndex = this.lastSelectIndex || this.defaultIndex
      this.$_initTabContent()

      this.data.forEach((item, index) => {
        const temp = {
          index: index,
          clickedKey: initialIndex.length > 0 && ~initialIndex[index] ? initialIndex[index] : -1,
          data: item.children,
        }
        this.renderData.push(temp)
        const currentColumn = this.renderData[index]
        if (initialIndex && initialIndex.length > 0) {
          this.subTitles.push(currentColumn.data[currentColumn.clickedKey].label)
        } else {
          this.subTitles.push(item.label)
        }
      })
    },
    $_initCascadeData() {
      if (this.data.length === 0) {
        return
      }
      const initialIndex = this.lastSelectIndex || this.defaultIndex
      this.$_walk(initialIndex, this.data)
    },
    $_initAsyncCascadeData() {
      this.asyncFunc(null, this.$_renderInitalAsync)
    },
    $_renderInitalAsync(err, data) {
      if (err) {
        this.isDataError = err
        return
      }
      const initialIndex = this.lastSelectIndex || this.defaultIndex
      this.$_walk(initialIndex, data, true)
    },
    $_walk(initialIndex, data, isAsync) {
      // recursion cascade or async data with initialIndex
      const func = () => {
        if (initialIndex && initialIndex.length > 0) {
          const walk = (err, data) => {
            if (err) {
              this.isLoading = false
              this.isDataError = err
              return
            }
            if (this.walkTimes < initialIndex.length) {
              const temp = initialIndex[this.walkTimes]
              let rawData = isAsync ? data.options : data
              rawData.forEach((item, eq, array) => {
                if (eq === temp) {
                  this.currentIndex = this.walkTimes
                  this.subTitles.splice(this.currentIndex, this.subTitles.length - 1, item.label)
                  let renderContent = {
                    index: this.walkTimes,
                    clickedKey: temp,
                    data: array,
                  }
                  if (isAsync) {
                    renderContent = {
                      ...renderContent,
                      asyncFunc: data.asyncFunc,
                    }
                  }
                  this.renderData.splice(this.currentIndex, this.renderData.length - 1, renderContent)
                  this.$refs.tabs && this.$refs.tabs.selectTab(this.currentIndex)
                  this.walkTimes++
                  if (item && item.children && Array.isArray(item.children)) {
                    walk(null, item.children)
                  } else if (isAsync && data && data.asyncFunc && typeof data.asyncFunc === 'function') {
                    data.asyncFunc(
                      {
                        index: this.walkTimes,
                        item,
                        eq,
                      },
                      walk,
                    )
                  } else {
                    walk()
                  }
                }
              })
            } else {
              this.isLoading = false
              this.defaultTabIndex = this.walkTimes - 1
              this.walkTimes = 0
              return false
            }
          }
          walk(null, data)
        } else {
          this.$_initTabContent()
          this.subTitles.push(this.placeholder)
          if (isAsync) {
            this.renderData.push({
              index: 0,
              clickedKey: -1,
              data: data.options,
              asyncFunc: data.asyncFunc,
            })
          } else {
            this.renderData.push({
              index: 0,
              clickedKey: -1,
              data: data,
            })
          }
          this.isLoading = false
        }
      }
      func()
    },
    $_initTabContent() {
      this.subTitles = []
      this.renderData = []
      this.currentIndex = 0
    },
    $_renderNextTabContent(orignData) {
      return (err, asyncData) => {
        this.isLoading = false
        if (err) {
          this.isDataError = err
          return
        }
        try {
          let data,
            asyncFunc = null
          if (orignData) {
            data = orignData
          } else if (asyncData && asyncData.options) {
            data = asyncData.options
            if (asyncData.asyncFunc) {
              asyncFunc = asyncData.asyncFunc
            }
          } else {
            data = []
          }

          if (!data || data.length === 0) {
            this.subTitles.splice(this.currentIndex + 1, this.subTitles.length - 1)
            this.renderData.splice(this.currentIndex + 1, this.renderData.length - 1)
            this.currentColumnLock = false
            return
          }

          this.subTitles.splice(this.currentIndex + 1, this.subTitles.length - 1, this.placeholder)
          this.renderData.splice(this.currentIndex + 1, this.renderData.length - 1, {
            index: this.currentIndex,
            clickedKey: -1,
            data,
            asyncFunc,
          })

          if (this.renderData.length > 1) {
            this.$nextTick(() => {
              this.$refs.tabs.selectTab(++this.currentIndex)
              setTimeout(() => {
                this.currentColumnLock = false
              }, 500)
            })
          }
        } catch (error) {
          this.isDataError = true
        }
      }
    },
    $_refreshTabPicker() {
      // revoke this opration
      this.isTabPickerShow = false
      this.isLoading = true
      this.isDataError = false
      this.currentColumnLock = false
      this.refreshTabPicker = Math.random()
      this.$nextTick(() => {
        this.$_initTabPicker()
      })
    },

    // MARK: events handler, 如 $_onButtonClick
    $_onShow() {
=======
    // MARK: private events
    $_onPopupInput(val) {
      this.$emit('input', val)
    },
    $_onPopupShow() {
      this.$refs.tabs.reflowTabBar()
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
      this.$emit('show')
      setTimeout(() => {
        this.oldSelected = extend([], this.selected)
        this.oldCurrentTab = this.currentTab
      }, 100)
    },
    $_onPopupHide() {
      this.$emit('hide')
    },
    $_onCancel() {
      this.hideTabPicker()
      setTimeout(() => {
        this.selected = extend([], this.oldSelected)
        this.currentTab = this.oldCurrentTab
        this.tabsTmpKey = Date.now()
      }, 100)
    },
    $_onSelectPaneItem(value, index) {
      this.selected.splice(index, this.selected.length - index, value)
      this.$nextTick(() => {
        const nextPane = this.panes[index + 1]

        /* istanbul ignore else */
        if (nextPane) {
          this.currentTab = nextPane.name
        } else if (value !== '') {
          setTimeout(() => {
            this.$emit('change', {
              values: this.getSelectedValues(),
              options: this.getSelectedOptions(),
            })
            this.hideTabPicker()
          }, 300)
        }
      })
    },
    // MARK: public methods
    getSelectedValues() {
      return this.selected
    },
<<<<<<< HEAD
    $_onRadioChange(value, index) {
      if (this.dataStruct === 'cascade' && this.currentColumnLock) {
        return
      }
      this.currentColumnLock = true
      this.subTitles[this.currentIndex] = value.label
      const currentColumn = this.renderData[this.currentIndex]
      currentColumn.clickedKey = index

      this.$emit('change', {
        selectTab: this.currentIndex,
        selectIndex: index,
        selectItem: value,
      })

      if (this.dataStruct === 'cascade') {
        if (value && value.children && Array.isArray(value.children)) {
          this.$_renderNextTabContent(value.children)()
          return
        }
        this.currentColumnLock = false
      }
      if (this.dataStruct === 'async' && currentColumn.asyncFunc) {
        value = {
          index: index,
          ...value,
        }
        // Object.assign(value, {index})
        this.isLoading = true
        typeof currentColumn.asyncFunc === 'function' && currentColumn.asyncFunc(value, this.$_renderNextTabContent())
=======
    getSelectedOptions() {
      if (this.panes && this.panes.length) {
        return this.panes.filter(pane => pane.value).map(pane => pane.selected)
      } else {
        return []
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
      }
    },
    hideTabPicker() {
      this.$emit('input', false)
    },
  },
}
</script>

<style lang="stylus">
.md-tab-picker
  .md-popup
    z-index tab-picker-zindex
  .md-tab-bar
    position relative
<<<<<<< HEAD
  .md-tabs
    .md-tab-content-wrapper
      height 400px
      .md-tab-content
        height 400px
        overflow scroll
  .slot-wrapper
    background rgba(255, 255, 255, 0.7)
    position absolute
    top 80px
    left 0
    width 100%
    bottom 0
    .slot-inner
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      font-size font-body-normal
      color color-text-minor
  .md-popup-box
    background-color color-bg-base
=======
    margin-left tab-picker-h-gap
    margin-right tab-picker-h-gap
    padding-left 0
    padding-right 0
    background-color tab-picker-bg
    hairline(bottom, color-border-base)
  .md-tabs-content
    height tab-picker-height
    overflow auto
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar
      display none
  .md-tab-bar-list
    justify-content flex-start
    .md-tab-bar-item
      margin 0 60px 0 0
      padding 0
      font-size font-caption-normal
  .md-tab-pane
    padding-left tab-picker-h-gap
    padding-right tab-picker-h-gap
    box-sizing border-box
  .md-popup-cancel
    width 90px !important
.md-tab-picker-content
  background-color tab-picker-bg
  .md-radio-item.is-selected
    .md-cell-item-body .md-cell-item-title
      color radio-color
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
</style>
