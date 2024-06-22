import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import apiClient from "@/api/apiClient.ts";
import { queryClient } from "@/main.tsx";

export interface SavedPost {
    postId: string;
}

export const ToggleSavedPosts = () => {
    return useMutation<string, AxiosError, SavedPost>({
        mutationKey: ['savedPosts'],
        mutationFn: ({ postId }) =>
            apiClient.post(`/posts/saved`, { postId }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token"),
                }
            }).then(res => res.data).catch(err => err),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] })
    });
};
