import aspida from '@aspida/axios';
import api from '~/api/$api';

export default defineNuxtPlugin((NuxtApp) => {
    const client = api(aspida());
    NuxtApp.provide('api', client);
});
