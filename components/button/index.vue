<template>
  <button
<<<<<<< HEAD
    type="button"
    class="md-button"
    :class="[type, size, icon ? 'with-icon' : '']"
    :disabled="disabled"
    v-on="$listeners"
  >
    <div class="md-button-inner">
      <md-icon v-if="icon" :name="icon"></md-icon>
      <slot></slot>
=======
    :type="nativeType"
    class="md-button"
    :class="[
      type,
      inactive ? 'inactive' : 'active',
      inline ? 'inline' : 'block',
      round ? 'round' : '',
      plain ? 'plain' : '',
      size === 'small' ? 'small' : ''
    ]"
    :disabled="inactive || type === 'disabled'"
    v-on="$listeners"
  >
    <div class="md-button-inner">
      <template v-if="icon">
        <md-icon :name="icon" :svg="iconSvg"></md-icon>
      </template>
      <p class="md-button-content">
        <slot></slot>
      </p>
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
    </div>
  </button>
</template>

<script>import Icon from '../icon'
export default {
  name: 'md-button',

  components: {
    [Icon.name]: Icon,
  },

  props: {
    type: {
      type: String,
      default: 'default', // default, primary, warning, disabled, link
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: '',
    },
    iconSvg: {
      type: Boolean,
      default: false,
    },
<<<<<<< HEAD
=======
    size: {
      type: String,
      default: 'large', // large, small
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    inactive: {
      type: Boolean,
      default: false,
    },
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
  },
}
</script>

<style lang="stylus">
.md-button
<<<<<<< HEAD
  display block
  -webkit-user-select none
  -webkit-tap-highlight-color transparent
=======
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
  position relative
  display block
  height button-height
  line-height button-height
  font-size button-font-size
  font-weight button-font-weight
  font-family font-family-normal
  text-align center
<<<<<<< HEAD
  border-radius button-primary-radius
  background none
  border none
  box-shadow none
  outline none
  appearance none
=======
  border none
  border-radius button-radius
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
  box-sizing border-box
  outline none
  transition all .3s
  -webkit-appearance none
  -webkit-user-select none
  -webkit-tap-highlight-color transparent
  overflow visible
<<<<<<< HEAD
  &:disabled
    &:active::before
      display none
  &::before
    absolute-pos()
    display none
    content ''
    position absolute
    box-sizing border-box
    pointer-events none
  &:active::before
    display block
  .md-button-inner
=======

.md-button-inner
  display flex
  align-items center
  justify-content center
  width 100%
  height 100%
  overflow hidden
  text-overflow ellipsis
  word-break break-word
  white-space nowrap

.md-button-content
  display flex
  align-items center
  padding 0 6px
  .md-icon
    padding 0

.md-button
  position relative
  .md-icon
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
    display flex
    align-items center
    justify-content center
    padding 0 6px
  // type
  &.default
    background-color button-default-fill
    color button-default-color
    hairline(all, color-border-element, button-radius, 3px)
    &.active:active
      background-color button-default-active-fill
  &.primary
    background-color button-primary-fill
<<<<<<< HEAD
    color color-text-base-inverse
    &:active::before
      background-color button-primary-fill-tap
    &:disabled
      background-color button-primary-fill-disabled
    &.large, &.small
      width button-primary-width
      height button-primary-height
      line-height button-primary-height
      font-size button-primary-font-size
      font-weight button-primary-font-weight

  &.ghost
    color button-ghost-color
    hairline(all, button-ghost-color, button-ghost-radius)
    &:active::before
      background-color button-ghost-fill-tap
  &.ghost-primary
    color button-ghost-primary-color
    hairline(all, button-ghost-primary-color, button-ghost-radius)
    &:active::before
      background-color button-ghost-primary-fill-tap
  &.ghost, &.ghost-primary
    &:disabled
      opacity button-disabled-opacity
    &.large
      width button-ghost-width
      height button-ghost-height
      line-height button-ghost-height
      font-size button-ghost-font-size
    &.small
      width button-ghost-width-sm
      height button-ghost-height-sm
      line-height button-ghost-height-sm
      font-size button-ghost-font-size

  &.link
    background-color button-link-fill
    color button-link-color
    .md-button-inner
      hairline(top, button-link-border)
      hairline(bottom, button-link-border)
    &:active::before
      background-color button-link-fill-tap
    &:disabled
      opacity button-disabled-opacity
    &.large, &.small
      width button-link-width
      height button-link-height
      font-size font-heading-normal
  &.with-icon
    .md-icon
      display flex
      align-items center
      justify-content center
      margin-right button-icon-gap
=======
    color button-primary-color
    hairline(all, button-primary-fill, button-radius, 3px)
    &.active:active
      background-color button-primary-active-fill
  &.warning
    background-color button-warning-fill
    color button-warning-color
    hairline(all, button-warning-fill, button-radius, 3px)
    &.active:active
      background-color button-warning-active-fill
  &.disabled
    background-color button-disabled-fill
    color button-disabled-color
    hairline(all, button-disabled-fill, button-radius, 3px)

  &.plain
    background transparent

    &.default
      color button-default-plain-color
      hairline(all, color-border-element, button-radius, 3px)
      &.active:active
        background-color button-default-plain-active-fill
    &.primary
      color button-primary-plain-color
      hairline(all, button-primary-fill, button-radius, 3px)
      &.active:active
        background-color button-primary-plain-active-fill
    &.warning
      color button-warning-plain-color
      hairline(all, button-warning-fill, button-radius, 3px)
      &.active:active
        background-color button-warning-plain-active-fill
    &.disabled
      color button-disabled-plain-color
      hairline(all, color-border-element, button-radius, 3px)

  &.round
    border-radius button-height
    &:after
      border-radius button-height !important

  &.inline
    display inline-block
    padding 0 h-gap-md
  &.block
    width 100%

  &.small
    height button-small-height
    line-height button-small-height
    font-size button-small-font-size
    &.round
      border-radius button-small-height
      &:after
        border-radius button-small-height

  &.link
    display inline
    width auto
    height auto
    line-height 1
    font-size button-small-font-size
    font-weight font-weight-normal
    color button-primary-fill
    background transparent
    &.inactive
      color color-text-disabled
      opacity 1
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462

  &.inactive
    opacity opacity-disabled
    &.disabled
      opacity 1
</style>
