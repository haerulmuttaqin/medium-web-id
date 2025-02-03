import useSWR from "swr";
import {getPost} from "@api/data/services/post";

export const useFetchPost = (url: string) => useSWR(
    ["post", url],
    () => getPost(url).then((res: any) => res.data.data),
    {
        revalidateIfStale: false,
        revalidateOnFocus: false
    }
)