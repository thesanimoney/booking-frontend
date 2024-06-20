import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiClient from "@/api/apiClient";
import { useToken } from "@/state/tokenStore";
import {AxiosError, AxiosResponse} from "axios";

export interface Register {
    username: string;
    email: string;
    password: string;
    avatar?: string;
}

const useRegister = () => {
    const navigate = useNavigate();
    const { setToken } = useToken();

    return useMutation({
        mutationFn: async (data: Register) => {
            return  await apiClient.post('/register', data);
        },
        onSuccess: (response: AxiosResponse) => {
            const token = response.headers['x-auth-token'];
            if (!token) {
                throw new Error('Registration failed.');
            }
            setToken(token);
            localStorage.setItem('token', token);
            navigate('/profile');
            console.log(response);
        },
        onError: (error: AxiosError) => {
            console.error('Registration failed:', error);
        }
    });
};

export default useRegister;
