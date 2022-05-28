import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  // Test written for sum method, but not mult.
  // Should report uncovered lines in coverage report.
  it('test sum method', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.sum(5, 5)).toBe(10)
  })
})
