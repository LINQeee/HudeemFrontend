import {mainApi} from "./mainApi.ts";
import {ISummary} from "../models/ISummary.ts";
import {MutationTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    MutationDefinition
} from "@reduxjs/toolkit/query";
import {ICredentials} from "../models/ICredentials.ts";


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
        }),
        loginUserWithPsw: build.mutation<string, Omit<ICredentials, "code" | "ip" | "rememberMe">>({
            query: (body: Omit<ICredentials, "code" | "ip" | "rememberMe">) => {
                return {
                    url: "/user-login-psw",
                    method: "POST",
                    responseHandler: "content-type",
                    body
                }
            }
        })
    })
});

export const {useFetchUserQuery, useLoginUserWithPswMutation} = userApi;
export type LoginUserWithPswTrigger = MutationTrigger<MutationDefinition<Omit<ICredentials, "code" | "ip" | "rememberMe">, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>, "Records", string, "mainApi">>;