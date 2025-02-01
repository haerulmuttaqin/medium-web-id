import {api} from "@/api";
import {BaseResponse} from "../interfaces";
import {BookmarkPayloadProps} from "../interfaces/bookmark";


export const getBookmarks = async (projectId: string): Promise<BaseResponse> => {
    return await api({
        method: 'GET',
        url: `bookmarks/${projectId}`,
    });
};

export const getProject = async (project_id: string, sheet_id: string): Promise<BaseResponse> => {
    return await api({
        method: 'GET',
        url: `bookmarks/${project_id}/${sheet_id}`,
    });
};

export const addBookmark = async (payload: BookmarkPayloadProps): Promise<BaseResponse> => {
    try {
        const {data} = await api({
            method: "POST",
            url: "bookmark",
            data: payload
        })
        if (data) {
            return data
        } else {
            return {success: false, message: "An error occurred"}
        }
    } catch (err: any) {
        if (err.response?.data != undefined) {
            return err.response?.data
        } else if (err.response?.errors != undefined) {
            return err.response?.errors
        }
        return {success: false, message: err.message}
    }
};

export const updateProject = async (id: string, sid: string, idx: number, payload: BookmarkPayloadProps): Promise<BaseResponse> => {
    try {
        const {data} = await api({
            method: "POST",
            url: `bookmarks/${sid}/${idx}/${id}`,
            data: payload
        })
        if (data) {
            return data
        } else {
            return {success: false, message: "An error occurred"}
        }
    } catch (err: any) {
        if (err.response?.data != undefined) {
            return err.response?.data
        } else if (err.response?.errors != undefined) {
            return err.response?.errors
        }
        return {success: false, message: err.message}
    }
};

export const deleteProject = async (dns: string, sid: string, idx: number): Promise<BaseResponse> => {
    try {
        const {data} = await api({
            method: "DELETE",
            url: `bookmarks/${sid}/${idx}/${dns}`,
        })
        if (data) {
            return data
        } else {
            return {success: false, message: "An error occurred"}
        }
    } catch (err: any) {
        if (err.response?.data != undefined) {
            return err.response?.data
        } else if (err.response?.errors != undefined) {
            return err.response?.errors
        }
        return {success: false, message: err.message}
    }
};