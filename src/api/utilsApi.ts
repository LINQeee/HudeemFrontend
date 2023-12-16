import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const utilsApi = createApi({
    baseQuery: fetchBaseQuery({}),
    endpoints: build => ({
        getIp: build.query<string, void>({
            query: () => {
                return {
                    url: "https://api.ipify.org",
                    method: "GET",
                    responseHandler: "text"
                }
            }
        }),
    }),
});


export const {useLazyGetIpQuery} = utilsApi;