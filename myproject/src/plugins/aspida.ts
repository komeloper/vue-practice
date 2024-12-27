import aspida from '@aspida/fetch';
import api from '~/api/$api';

export default defineNuxtPlugins((NuxtApp) => {
    const fetchClient = aspida(fetch);
    NuxtApp.provide('api', api(fetchClient));
});
