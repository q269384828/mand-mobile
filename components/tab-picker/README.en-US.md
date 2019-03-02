---
title: TabPicker
preview: https://didi.github.io/mand-mobile/examples/#/tab-picker
---

Support cascaded selections in the footer

### Import

```javascript
import { TabPicker } from 'mand-mobile'

Vue.component(TabPicker.name, TabPicker)
```

### Code Examples
<!-- DEMO -->

### API

#### TabPicker Props
|Props | Description | Type | Default | Note|
|----|-----|------|------|------|
|v-model|whether to show tabpicker or not|Boolean|`false`|-|
|default-value|default values|Array|`[]`|-|
|data|data source|Array|`[]`|refer to `Appendix` for data format|
|title|the title of tabpicker|String|-|-|
<<<<<<< HEAD
|ok-text|text of confirmation button|String|`confirm`|-|
|cancel-text|text of cancellation button|String|`cancel`|-|
|placeholder<sup class="version-after">1.6.3+</sup>|select placeholder|String|`Select`|-|
|errorLabel<sup class="version-after">1.6.3+</sup>|text for invalid data source|String|`Data Error`|-|
|loadingLabel<sup class="version-after">1.6.3+</sup>|text for loading state|String|`Loading`|-|
|mask-closable<sup class="version-after">1.3.0+</sup>|if the popup will be closed when clicking on the mask|Boolean|`true`|-|
=======
|describe|the describe of tabpicker|String|-|-|
|placeholder|default label for each tab pane|String|`请选择`|-|
|mask-closable|if the popup will be closed when clicking on the mask|Boolean|`true`|-|
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462

#### TabPicker Methods

##### getSelectedValues()
Get all values of selected items

```
['value1', 'value2', 'value3']
```

#### getSelectedOptions()
Get all options of selected items

```
[
  { value: 'value1', label: 'Item1' },
  { value: 'value2', label: 'Item2' },
  // ...
]
```

#### TabPicker Events

##### @change(data)
Change selection in the tabpicker

```
// data object
{
  values: ['value1', 'value2', 'value3'],
  options: [
    { value: 'value1', label: 'Item1' },
    { value: 'value2', label: 'Item2' },
    // ...
  ]
}
```

##### @show()
Show tabPicker

##### @hide()
Hide tabPicker

<<<<<<< HEAD
### Appendix

* Data format of non-cascaded data source
=======
#### TabPicker Slots
Custom option item slot
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462

```
<<<<<<< HEAD

* Data format of cascaded data source

```javascript
[
  {
    // option label
    "label": "",
    // option value
    "value": "",
    // the children of option
    "children": [
      {
        "label": "",
        "value": "",
        "children": [
          //...
        ]
      }
    ]
  },
  //...
]
=======
<md-tab-picker>
  <div slot="item" scoped-slot="{ option }">
    Hello, {{option.label}}
  </div>
</md-tab-picker>
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
```

### Appendix

* Data format of cascaded data source

```javascript
{
  // unique key
  name: '',
  // pane title
  label: '',
  // pane options
  options: [
    {
      // option value
      value: "",
      // option label
      label: "",
      // cascade pane
      children: {
        name: '',
        label: '',
        options: [
          // ...
        ]
      }
    }
  ]
}
```
