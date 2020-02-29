import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '../../src/App.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

const wrapper = shallowMount(App, { localVue, router });

describe('App', () => {
  it('renders properly', () => {
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.isVueInstance()).toBe(true);

    expect(typeof App.render).toBe('function');
  });
});
