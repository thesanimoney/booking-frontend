import {useQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";
import apiClient from "@/api/apiClient.ts";
import {Post} from "@/hooks/posts/getPosts.ts";

export const GetMyPosts = () => {
    return useQuery<Post[], AxiosError>({
        queryKey: ['myPosts'],
        queryFn: () => apiClient.get<Post[]>(`/posts/my`, {
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            }
        }).then(res => res.data).catch(err => err)
    });
};