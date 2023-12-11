import {mainApi} from "./mainApi.ts";
import {ISummary} from "../models/ISummary.ts";


export const userApi = mainApi.injectEndpoints({
    endpoints: build => ({
        fetchUser: build.query<ISummary, number>({
            query: (id: number) => ({
                url: "/summary",
                params: {
                    id: id
                },
                responseHandler: "content-type"
            }),
            providesTags: [{type: "Records"}]
        })
    })
});

export const { useFetchUserQuery} = userApi;