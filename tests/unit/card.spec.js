import { shallowMount } from '@vue/test-utils';
import Card from '../../src/components/Card.vue';

const redirectMethod = jest.fn();

const repository = {
  name: 'Repository',
  fork: false,
  language: 'JavaScript',
  description: 'Test Repo description',
  adress: 'https://github.com',
};
const wrapper = shallowMount(Card, {
  propsData: { repository },
  methods: { redirect: redirectMethod },
});

describe('Card', () => {
  it('has a created hook', () => {
    expect(typeof Card.render).toBe('function');
  });

  it('properly renders given parameters', () => {
    expect(wrapper.find('#name').text()).toBe(repository.name);
    expect(wrapper.find('#language').text()).toBe(repository.language);
    expect(wrapper.find('#description').text()).toBe(repository.description);
  });

  it('redirects when button clicked', () => {
    wrapper.find('#itemContainer').trigger('click');
    expect(redirectMethod).toBeCalled();
  });
});
