<template>
  <div class="md-example-child md-example-child-picker md-example-child-picker-0">
    <md-picker
      ref="picker"
      :data="pickerData"
      :invalid-index="[[2, 3, 4]]"
      @initialed="onPickerInitialed"
      @change="onPickerConfirm"
      is-view
    ></md-picker>
  </div>
</template>

<script>import {Picker, Dialog} from 'mand-mobile'
import simple from 'mand-mobile/components/picker/demo/data/simple'

export default {
  name: 'picker-demo',
  /* DELETE */
  title:
    '单列数据 <a href="javascript:window.PickerTrigger0()">getColumnValues</a><a href="javascript:window.PickerTrigger1()">getColumnIndexs</a><a href="javascript:window.PickerTrigger2()">setColumnValues</a>',
  titleEnUS:
    'Single column <a href="javascript:window.PickerTrigger0()">getColumnValues</a><a href="javascript:window.PickerTrigger1()">getColumnIndexs</a><a href="javascript:window.PickerTrigger2()">setColumnValues</a>',
  describe: '禁用2-4项',
  describeEnUS: 'Disable 2-4 items',
  /* DELETE */
  components: {
    [Picker.name]: Picker,
  },
  data() {
    return {
      pickerData: simple,
      pickerDataNew: [
        {
          text: 'Hello World',
          value: 9999,
        },
      ],
      pickerValue: '',
    }
  },
  mounted() {
    window.PickerTrigger0 = () => {
      this.getColumnValues('picker')
    }
    window.PickerTrigger1 = () => {
      this.getColumnIndexs('picker')
    }
    window.PickerTrigger2 = () => {
      this.setColumnValues('picker')
    }
  },
  methods: {
    onPickerInitialed() {
      const value = this.$refs.picker.getColumnValues()
      console.log(`[Mand Mobile] Picker Initialed: ${JSON.stringify(value)}`)
    },
    onPickerConfirm(columnIndex, itemIndex, value) {
      if (value) {
        this.pickerValue = value.text
      }
    },
    getColumnValues(picker) {
      const value = this.$refs[picker].getColumnValues()
      Dialog.alert({
        content: `<pre>${JSON.stringify(value)}</pre>`,
      })
    },
    getColumnIndexs(picker) {
      const value = this.$refs[picker].getColumnIndexs()
      Dialog.alert({
        content: `<pre>${JSON.stringify(value)}</pre>`,
      })
    },
    setColumnValues(picker) {
      this.$refs[picker].setColumnValues(0, this.pickerDataNew, vm => {
        vm.refresh(null, 0)
      })
    },
  },
}
</script>