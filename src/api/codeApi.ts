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
       checkCode: build.mutation<Omit<ICredentials, "password" | "rememberMe" | "ip">, Omit<ICredentials, "password">>({
            query: (body: Omit<ICredentials, "password" | "rememberMe">) => {
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