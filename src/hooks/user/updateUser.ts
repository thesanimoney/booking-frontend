import {useMutation} from "@tanstack/react-query";
import apiClient from "@/api/apiClient.ts";
import {queryClient} from "@/main.tsx";
import {AxiosError} from "axios";
import {toast} from "@/components/ui/use-toast.ts";

export interface User {
    username: string;
}

const GetUser = () => {
    return useMutation({
        mutationKey: ['user'],
        mutationFn: async (data: User) => {
            return await apiClient.put('/user', data, {
                headers: {
                    "x-auth-token": localStorage.getItem('token'),
                }
            })
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['user']});
            return toast({
                description: 'Successfully updated user',
            })
        },
        onError: (error: AxiosError) => {
            return toast({
                description: error.message,
                title: 'Error',
                variant: "destructive"
            })
        }
    })
};

export default GetUser;