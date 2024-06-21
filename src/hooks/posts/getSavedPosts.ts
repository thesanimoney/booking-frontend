import {useQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";
import apiClient from "@/api/apiClient.ts";
import {Post} from "@/hooks/posts/getPosts.ts";

export const GetSavedPosts = () => {
    return useQuery<Post[], AxiosError>({
        queryKey: ['savedPosts'],
        queryFn: () => apiClient.get<Post[]>(`/posts/saved`, {
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            }
        }).then(res => res.data).catch(err => err)
    });
};