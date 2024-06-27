import {useQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";
import apiClient from "@/api/apiClient.ts";
import {Post} from "@/hooks/posts/getPosts.ts";


export const GetPost = (id: string) => {
    return useQuery<Post, AxiosError>({
        queryKey: ['posts', id],
        queryFn: () => apiClient.get<Post>(`/posts/${id}`, {}).then(res => res.data).catch(err => err)
    });
};