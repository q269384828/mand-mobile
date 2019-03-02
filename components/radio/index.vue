<template>
  <label
    class="md-radio"
    :class="{
      'is-disabled': disabled,
      'is-checked': isChecked,
      'is-inline': inline
    }"
    @click="$_onClick"
  >
    <div class="md-radio-icon">
      <md-icon :name="currentIcon" :size="size" :svg="iconSvg"/>
    </div>
    <div class="md-radio-label" v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script>import Icon from '../icon'
import radioMixin from './mixins'

export default {
  name: 'md-radio',

  mixins: [radioMixin],

  components: {
    [Icon.name]: Icon,
  },

  props: {
    name: {
      required: true,
    },
    value: {
      default: '',
    },
    size: {
      type: String,
      default: 'md',
    },
    label: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // Mixins Props
    // icon: {
    //   type: String,
    //   default: 'checked',
    // },
    // iconInverse: {
    //   type: String,
    //   default: 'check',
    // },
    // iconDisabled: {
    //   type: String,
    //   default: 'check-disabled',
    // },
    // iconSvg: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  computed: {
    isChecked() {
      return this.value === this.name
    },
    currentIcon() {
      return this.disabled ? this.iconDisabled : this.value === this.name ? this.icon : this.iconInverse
    },
  },

  methods: {
<<<<<<< HEAD
    // MARK: private methods
    $_initSelected() {
      const defaultIndex = this.defaultIndex
      const invalidIndex = this.invalidIndex
      const item = this.options[defaultIndex]

      this.selectedIndex = defaultIndex

      /* istanbul ignore next */
      if (defaultIndex === -1) {
        return
      } else if (this.value !== '') {
        return
      }

      /* istanbul ignore else */
      if (item && !item.disabled && !inArray(invalidIndex, defaultIndex)) {
        this.selectedIndex = this.defaultIndex
      } else {
        warn('radio option represented by the default-index is invalid')
      }
    },
    $_isInvalidIndex(item, index) {
      return inArray(this.invalidIndex, index) || item.disabled
    },
    $_isSelectedIndex(index) {
      return index === this.selectedIndex
    },
    $_isSelectedValue(value, index) {
      const invalidIndex = this.invalidIndex
      if (value === this.value) {
        if (!inArray(invalidIndex, index)) {
          this.selectedIndex = index
          return true
        } else {
          this.$emit('input', '')
          warn('radio option represented by the initial value is invalid')
          return false
        }
      } else {
        return false
      }
    },
    $_getItemText(item) {
      return this.optionRender(item) || item.text || item.label
    },

    // MARK: events handler
    $_onItemClick(item, index) {
      this.selectedIndex = index
      this.$emit('input', item.value || item.text || item.label)
      this.$emit('change', item, index)
    },
    $_onItemFocus(index) {
      this.selectedIndex = index
      this.$emit('input', this.inputOptionValue)
      this.$emit(
        'change',
        {
          text: this.inputOptionValue,
        },
        index,
      )
    },

    // MARK: public methods
    getSelectedValue() {
      let item
      if (this.hasInputOption && this.selectedIndex === this.options.length) {
        item = this.inputOptionValue
      } else {
        item = this.options[this.selectedIndex]
      }
      return item
    },
    getSelectedIndex() {
      return this.selectedIndex
    },
    selectByIndex(index) {
      if (index > this.options.length || inArray(this.invalidIndex, index)) {
        return
      }

      if (index === this.options.length && this.hasInputOption) {
        this.selectedIndex = index
        this.$refs['inputItem'].focus()
      } else {
        this.$_onItemClick(this.options[index], index)
=======
    $_onClick() {
      if (!this.disabled) {
        this.$emit('input', this.name)
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
      }
    },
  },
}
</script>

<style lang="stylus">
.md-radio
  display flex
  align-items center
  line-height 1.5
  margin-top v-gap-sm
  margin-bottom v-gap-sm
  .md-radio-icon
    color color-text-placeholder
    .md-icon
      display flex
  &.is-checked
    .md-radio-icon
      color radio-color
  &.is-disabled
    .md-radio-icon
    .md-radio-label
      color color-text-disabled
  &.is-inline
    display inline-flex
    &:not(:last-child)
      margin-right 40px

.md-radio-icon
  position relative
  flex-shrink 0

.md-radio-label
  margin-left h-gap-sm
  font-size inherit
  font-weight font-weight-normal
</style>

