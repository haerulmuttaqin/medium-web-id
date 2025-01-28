import {localApi, plainApi} from "@/api";
import {BaseResponse} from "../interfaces";


export const getPost = async (url: string): Promise<BaseResponse> => {
    return await plainApi({
        method: 'GET',
        url: `post?url=${url}`,
    });
};