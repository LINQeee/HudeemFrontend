import {mainApi} from "./mainApi.ts";
import {IRecord} from "../models/IRecord.ts";
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    MutationDefinition
} from "@reduxjs/toolkit/query";
import {MutationTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";

export const recordApi = mainApi.injectEndpoints({
    endpoints: build => ({
        editRecord: build.mutation<string, IRecord>({
            query: (body: IRecord) => {
                return {
                    url: '/record',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: [{type: "Records"}]
        }),
        createRecord: build.mutation<string, Omit<IRecord, "id">>({
            query: (body: IRecord) => {
                return {
                    url: "/record",
                    method: "POST",
                    responseHandler: "text",
                    body
                }
            },
            invalidatesTags: [{type: "Records"}]
        }),
        deleteRecord: build.mutation<string, number>({
            query: (id: number) => {
                return {
                    url: "/record",
                    method: "DELETE",
                    responseHandler: "text",
                    params: {id: id}
                }
            },
            invalidatesTags: [{type: "Records"}]
        })
    })
});

export const {useEditRecordMutation, useCreateRecordMutation, useDeleteRecordMutation} = recordApi;
export type EditRecordTrigger = MutationTrigger<MutationDefinition<IRecord, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>, "Records", string, "mainApi">>;
export type CreateRecordTrigger = MutationTrigger<MutationDefinition<Omit<IRecord, "id">, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>, "Records", string, "mainApi">>;