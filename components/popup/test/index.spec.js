import {Popup} from 'mand-mobile'
import sinon from 'sinon'
import {shallowMount} from '@vue/test-utils'
import triggerTouch from './touch-trigger'

describe('Popup - Operation', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('popup show/hide', done => {
    wrapper = shallowMount(Popup, {
      propsData: {
        value: false,
      },
    })
    const eventSpy = sinon.spy(wrapper.vm, '$emit')
    wrapper.setProps({value: true})
    setTimeout(() => {
      expect(eventSpy.calledWith('beforeShow')).toBe(true)

<<<<<<< HEAD
    wrapper.vm.value = true
    setTimeout(() => {
      const popupMask = wrapper.find('.md-popup-mask')[0]
      popupMask.trigger('click')
      setTimeout(() => {
        expect(wrapper.vm.isPopupBoxShow).to.be.false
        done()
      }, 50)
    }, 300)
=======
      const mask = wrapper.find('.md-popup-mask')
      mask.trigger('click')
      expect(eventSpy.calledWith('maskClick')).toBe(true)
      expect(eventSpy.calledWith('input')).toBe(true)
      expect(eventSpy.calledWith('beforeHide')).toBe(true)
      done()
    }, 50)
    // expect(eventSpy.calledWith('before-show')).toBe(true)
>>>>>>> 18544c76be38dcf6854e44bbdbdef665e1379462
  })

  it('popup prevent scroll', done => {
    wrapper = shallowMount(Popup, {
      propsData: {
        preventScroll: true,
        value: true,
      },
    })

    const popupBox = wrapper.find('.md-popup-box')
    setTimeout(() => {
      document.body.style.height = '10000px'
      triggerTouch(popupBox.element, 'touchstart', 0, 0)
      triggerTouch(popupBox.element, 'touchmove', 0, 100)
      triggerTouch(document, 'touchstart', 0, 0)
      triggerTouch(document, 'touchmove', 0, 100)
      document.body.style.height = ''
      done()
    }, 300)
  })
})
