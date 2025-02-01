import useSWR from "swr";
import {getProject, getBookmarks} from "@api/data/services/bookmark";

export const useFetchBookmarks = (projectId: string) => useSWR(
    [projectId, 'bookmark'],
    () => getBookmarks(projectId).then((res) => res.data.data),
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        onErrorRetry: (error, key, config, revalidate, {retryCount}) => {
            if (retryCount >= 3) return
            setTimeout(() => revalidate({retryCount}), 5000)
        }
    }
)

export const useFetchProject = (pid: string, sid: string) => useSWR(
    ['project', pid, sid],
    () => getProject(pid, sid).then((res) => res.data.data),
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
    }
)