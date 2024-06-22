import {useQuery} from "@tanstack/react-query";
import apiClient from "@/api/apiClient.ts";
import {AxiosError} from "axios";

export interface Post {
    _id: string
    title: string;
    price: number;
    images: string[];
    address: string;
    city: string;
    bedroom: number;
    bathroom: number;
    latitude: string;
    longitude: string;
    type: string;
    property: string;
    createdAt: string;
    desc: string;
    pet: boolean;
    income: number;
    school: number;
    bus: number;
    restoraunt: number;
    username: string;
    email: string;
    password: string;
    size: number
    saved: boolean
}

const GetPosts = () => {
    return useQuery<Post[], AxiosError>({
        queryKey: ['posts'],
        queryFn: () => apiClient.get<Post[]>('/posts', {
            headers: {'authorization': localStorage.getItem("token")}
        })
            .then(res => res.data).catch(err => err)
    });
};

export default GetPosts;