import {useEffect} from "react";
import {AxiosError} from "axios";
import {useToast} from "@/components/ui/use-toast.ts";


interface NotificationProps {
    isSuccess: boolean
    isError: boolean
    error: AxiosError | null
    successText: string | undefined
    errorTitle: string
}

export default function NotificationCenter({isSuccess, isError, error, successText, errorTitle}: NotificationProps) {
    const {toast} = useToast()

    useEffect(() => {
        isSuccess &&
        toast({
            description: successText,
        });

        isError && toast({
            title: errorTitle,
            variant: 'destructive',
            description: error!.response?.data as string
        });
    }, [isSuccess, isError, toast, error, successText, errorTitle])
}
