import { mount, type VueWrapper } from '@vue/test-utils';
import TestSample from '~/components/TestSample.vue';

describe('Vitestのサンプル', () => {
    let wrapper: VueWrapper;
    afterEach(()=> {
        wrapper?.unmount();
    });

    test('"Hello, World!" メッセージの表示確認', () => {
        const wrapper = mount(TestSample, {
            props: {
                name: 'World',
            },
        });
        expect(wrapper.text()).toContain('Hello, World!');
    });

    test('1回クリックするごとに値が増えていくこと', async () => {
        const wrapper = mount(TestSample);
        await wrapper.get('button').trigger('click');
        expect(wrapper.get('[data-testid="counter"]').text()).toBe('1');

        await wrapper.get('button').trigger('click');
        expect(wrapper.get('[data-testid="counter"]').text()).toBe('2');
    });

    test('Nuxtバージョンが正しく表示されていること', async () => {
        const wrapper = mount(TestSample);
        expect(wrapper.get('[data-testid="nuxt-version"]').text()).toBe('3.14.1592');
    });
});