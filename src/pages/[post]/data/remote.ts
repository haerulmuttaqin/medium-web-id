import useSWR from "swr";
import {getPost} from "@api/data/services/post";
import {getBookmarkByUrl} from "@api/data/services/bookmark";

export const useFetchPost = (url: string) => useSWR(
    ["post", url],
    () => getPost(url).then((res: any) => res.data.data),
    {
        revalidateIfStale: false,
        revalidateOnFocus: false
    }
)

export const useFetchBookmark = (bid: string, url: string) => useSWR(
    ["bookmark_by_url", bid, url],
    () => getBookmarkByUrl(bid, url.slice(1)).then((res: any) => res.data.data),
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        onErrorRetry: (error, key, config, revalidate, {retryCount}) => {
            if (retryCount >= 3) return
            setTimeout(() => revalidate({retryCount}), 5000)
        }
    }
)