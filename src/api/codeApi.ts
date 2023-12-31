import {mainApi} from "./mainApi.ts";
import {ICredentials} from "../models/ICredentials.ts";

export const codeApi = mainApi.injectEndpoints({
   endpoints: build => ({
       sendCode: build.mutation<string, string>({
           query: (body: string) => {
               return {
                   url: "/send-code",
                   method: "POST",
                   responseHandler: "content-type",
                   body
               }
           }
       }),
       checkCode: build.mutation<Omit<ICredentials, "password" | "rememberMe">, Omit<ICredentials, "password" | "authToken">>({
            query: (body) => {
                return {
                    url: "/check-code",
                    method: "POST",
                    responseHandler: "content-type",
                    body
                }
            }
       })
   })
});

export const {useSendCodeMutation, useCheckCodeMutation} = codeApi;