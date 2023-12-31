import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

export const mainApi = createApi({
    tagTypes: ["Records"],
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9090',
          prepareHeaders(headers) {
              const cookies = new Cookies();
              headers.set("Authorization", cookies.get("auth"))
              headers.set("email", cookies.get("email"))
          }
      }),
      endpoints: () => ({}),
});