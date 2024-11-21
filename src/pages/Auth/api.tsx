import { API } from "@services/api";
import { AxiosError } from "axios";


interface apiSuccessResponse {
    status: number;
    data: apiSuccessResponseBody;
}

interface apiSuccessResponseBody {
    status: string;
    message: string;
    statusCode: number;
    data: apiSuccessResponseBodyData;
}

interface apiSuccessResponseBodyData {
    token: string;
}

interface apiErrorResponse {
    status: number;
    data: apiErrorResponseBody;
}

interface apiErrorResponseBody {
    status: string;
    message: string;
    errorCode: number;
}

export const register = (email: string, pwd: string, username?: string) => {
    return new Promise<apiSuccessResponse>(async (res, rej) => {
        try {
            const response = await API.post('/api/v1/user/register', { username, email, pwd });
            res(response as apiSuccessResponse);
        } catch (e) {
            if ((e as AxiosError).response) rej((e as AxiosError).response as apiErrorResponse);
            else rej({ data: { message: "Something went wrong, please try later" } });
        }
    })
}

export const login = (email: string, pwd: string) => {
    return new Promise<apiSuccessResponse>(async (res, rej) => {
        try {
            const response = await API.post('/api/v1/user/login', { email, pwd });
            res(response as apiSuccessResponse);
        } catch (e) {
            if ((e as AxiosError).response) rej((e as AxiosError).response as apiErrorResponse);
            else rej({ data: { message: "Something went wrong, please try later" } });
        }
    })
}