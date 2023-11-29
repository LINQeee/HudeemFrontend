import {mainApi} from "./mainApi.ts";
import {IRecord} from "../models/IRecord.ts";

export const recordApi = mainApi.injectEndpoints({
    endpoints: build => ({
        editRecord: build.mutation<string, IRecord>({
            query: (body: IRecord) => {
                return {
                    url: '/record',
                    method: 'POST',
                    responseHandler: "text",
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