import {useMutation} from "@tanstack/react-query";
import apiClient from "@/api/apiClient.ts";
import {queryClient} from "@/main.tsx";
import {AxiosError} from "axios";

export interface User {
    username: string;
    // email: string;
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
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['user']}),
        onError: (error: AxiosError) => {
            return error.response?.data;
        }
    })
};

export default GetUser;