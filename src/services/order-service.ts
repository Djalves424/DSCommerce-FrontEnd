import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findByRequest(id: number) {

    const config: AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}