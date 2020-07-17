import { shallowMount } from '@vue/test-utils';
import Card from '../../src/components/Card.vue';

const repository = {
  name: 'Repository',
  fork: false,
  language: 'JavaScript',
  description: 'Test Repo description',
  html_url: 'https://github.com',
};

const wrapper = shallowMount(Card, {
  propsData: { repository },
});

describe('Card', () => {
  const { location } = window.location;

  beforeAll(() => {
    delete window.location;
    window.location = { assign: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  it('has a created hook', () => {
    expect(typeof Card.render).toBe('function');
  });

  it('properly renders given parameters', () => {
    expect(wrapper.find('#name').text()).toBe(repository.name);
    expect(wrapper.find('#language').text()).toBe(repository.language);
    expect(wrapper.find('#description').text()).toBe(repository.description);
  });

  it('redirects when button clicked', () => {
    Object.defineProperties(window.location, {
      assign: jest.fn(),
    });

    wrapper.find('.card').trigger('click');

    expect(window.location.assign).toHaveBeenCalledWith(repository.html_url);
  });
});
