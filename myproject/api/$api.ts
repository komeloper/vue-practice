import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1wcis28 } from './v2/pokemon/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
    const PATH0 = '/v2/pokemon';
    const GET = 'GET';

    return {
        v2: {
            pokemon: {
                _id: (val2: number) => {
                    const prefix2 = `${PATH0}/${val2}`;

                    return {
                        get: (option?: { query?: Methods_1wcis28['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                        fetch<Methods_1wcis28['get']['resBody']>(prefix, prefix2, GET, option).json(),
                        $get: (option?: { query?: Methods_1wcis28['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                        fetch<Methods_1wcis28['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
                        $path: (option?: { method?: 'get' | undefined; query: Methods_1wcis28['get']['query'] } | undefined) =>
                        `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                    };
                },
            },
        },
    };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
