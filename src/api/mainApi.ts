import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
    tagTypes: ["Records"],
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9090'}),
    endpoints: () => ({}),
});