import {mainApi} from "./mainApi.ts";
import {FetchUserResponse} from "./apiTypes.ts";



export const userApi = mainApi.injectEndpoints({
    endpoints: build => ({
        fetchUser: build.query<FetchUserResponse, number>({
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