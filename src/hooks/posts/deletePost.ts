import { useMutation } from "@tanstack/react-query";
import apiClient from "@/api/apiClient.ts";
import {queryClient} from "@/main.tsx";
import {AxiosError} from "axios";
import {toast} from "@/components/ui/use-toast.ts";

const useRemovePost = () => {
    return useMutation<string, AxiosError, string>({
        mutationKey: ['post'],
        mutationFn: async (id: string) => {
            try {
                const res = await apiClient.delete(`/posts/${id}`, {
                    headers: {
                        "x-auth-token": localStorage.getItem("token")
                    }
                });
                return res.data;
            } catch (err) {
                if (err instanceof AxiosError) {
                   toast({
                       title: "Error",
                       description: err.response?.data,
                       variant: "destructive",
                   })
                }
            }
        },
        onSuccess: () => {
            toast({
                title: "Success",
                description: "Successfully removed post!",
            })
           return queryClient.invalidateQueries({queryKey: ['myPosts']})
        }
    });
};

export default useRemovePost;
