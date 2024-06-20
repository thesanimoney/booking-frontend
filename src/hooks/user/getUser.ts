import {useQuery} from "@tanstack/react-query";
import apiClient from "@/api/apiClient.ts";

export interface User {
    username: string;
    email: string;
}

const GetUser = () => {
    return useQuery<User>({
        queryKey: ['user'],
        queryFn: () => apiClient.get<User>('/user', {
            headers: {
                "x-auth-token": localStorage.getItem('token'),
            },
        }).then(res => res.data).catch(err => err)
    })
};

export default GetUser;