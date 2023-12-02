import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
    tagTypes: ["Records"],
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://shape-minder.tech'}),
    endpoints: () => ({}),
});