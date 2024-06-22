import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiClient from "@/api/apiClient";
import { useToken } from "@/state/tokenStore";
import {AxiosError, AxiosResponse} from "axios";
import {toast} from "@/components/ui/use-toast.ts";

export interface Login {
    username: string;
    password: string;
}

const useLogin = () => {
    const navigate = useNavigate();
    const { setToken } = useToken();

    return useMutation({
        mutationFn: async (data: Login) => {
            return  await apiClient.post('/login', data);
        },
        onSuccess: (response: AxiosResponse) => {
            const token = response.headers['x-auth-token'];
            if (!token) {
                throw new Error('Login failed.');
            }
            setToken(token);
            localStorage.setItem('token', token);
            navigate('/');
            toast({
                title: 'Login success',
                description: 'You successfully logged in',
            })
        },
        onError: (error: AxiosError) => {
            console.error('Registration failed:', error);
        }
    });
};

export default useLogin;
