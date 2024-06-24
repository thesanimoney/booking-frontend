import { useMutation } from "@tanstack/react-query";
import { CombinedPostData } from "@/schema/createPost.ts";
import apiClient from "@/api/apiClient.ts";
import {queryClient} from "@/main.tsx";
import {AxiosError} from "axios";
import {toast} from "@/components/ui/use-toast.ts";

const useAddPost = () => {
    return useMutation<CombinedPostData, AxiosError, CombinedPostData>({
        mutationKey: ['post'],
        mutationFn: async (data: CombinedPostData) => {
            try {
                const res = await apiClient.post('/posts', {
                    formData: {
                        title: data.title,
                        price: data.price,
                        address: data.address,
                        city: data.city,
                        bedroom: data.bedroom,
                        bathroom: data.bathroom,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        type: data.type,
                        property: data.property,
                    },
                    formDetails: {
                        desc: data.desc,
                        pet: data.pet,
                        income: data.income,
                        school: data.school,
                        bus: data.bus,
                        restoraunt: data.restoraunt,
                        size: data.size,
                    }
                }, {
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
        onSuccess: async () => {
            toast({
                title: "Success",
                description: "Successfully added new post!",
            })
           return await queryClient.invalidateQueries({queryKey: ['posts']})
        }
    });
};

export default useAddPost;