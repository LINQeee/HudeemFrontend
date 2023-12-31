import {mainApi} from "./mainApi.ts";
import {ISummary} from "../models/ISummary.ts";
import {LazyQueryTrigger, MutationTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    MutationDefinition, QueryDefinition
} from "@reduxjs/toolkit/query";
import {ICredentials} from "../models/ICredentials.ts";
import {IPersonalInfo} from "../models/IPersonalInfo.ts";


export const userApi = mainApi.injectEndpoints({
    endpoints: build => ({
        fetchUser: build.query<ISummary, number>({
            query: (id: number) => ({
                url: `/auth/summary/${id}`,
                method: "GET",
                responseHandler: "content-type",
            }),
            providesTags: [{type: "Records"}]
        }),
        loginUserWithPsw: build.query<string, Omit<ICredentials, "code" | "rememberMe" | "authToken">>({
            query: (params) => {
                return {
                    url: "/user-login-psw",
                    method: "GET",
                    responseHandler: "content-type",
                    params: params
                }
            }
        }),
        createUser: build.mutation<string, Omit<ICredentials, "rememberMe" | "code" | "authToken">>({
            query: (body: Omit<ICredentials, "rememberMe" | "code">) => {
                return {
                    url: "/user",
                    method: "POST",
                    responseHandler: "content-type",
                    body
                }
            }
        }),
        updateUserBio: build.mutation<string, IPersonalInfo>({
            query: (body) => {
                return {
                    url: "/auth/user-bio",
                    method: "POST",
                    responseHandler: "content-type",
                    body
                }
            }
        })
    })
});

export const {useFetchUserQuery, useUpdateUserBioMutation, useLazyLoginUserWithPswQuery, useCreateUserMutation} = userApi;
export type CreateUserTrigger = MutationTrigger<MutationDefinition<Omit<ICredentials, "code" | "rememberMe" | "authToken">, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>, "Records", string, "mainApi">>;
export type LoginUserWithPswTrigger = LazyQueryTrigger<QueryDefinition<Omit<ICredentials, "authToken" | "code" | "rememberMe">, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>, "Records", string, "mainApi">>;