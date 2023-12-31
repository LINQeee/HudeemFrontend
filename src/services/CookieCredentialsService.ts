import Cookies from "universal-cookie";
import {plusDays} from "./DateService.ts";

export const saveCredentials = (codeHash: string, email: string) => {
    const cookies = new Cookies(null, {path: "/", expires: plusDays(new Date(), 30)})
    cookies.set("auth", codeHash);
    cookies.set("email", email);
}