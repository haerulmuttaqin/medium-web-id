import {localApi} from "@/api";
import {BaseResponse} from "../interfaces";


export const getPost = async (url: string): Promise<BaseResponse> => {
    return await localApi({
        method: 'GET',
        url: `post?url=${url}`,
    });
};