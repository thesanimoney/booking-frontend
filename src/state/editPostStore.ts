import {create} from 'zustand';
import {CombinedPostData} from "@/schema/createPost.ts";

const initialData: CombinedPostData = {
    title: null,
    price: 0,
    address: '',
    city: '',
    bedroom: 0,
    bathroom: 0,
    latitude: 0,
    longitude: 0,
    type: '',
    property: '',
    desc: '',
    pet: false,
    size: 0,
    income: 0,
    school: 0,
    bus: 0,
    restoraunt: 0,
};

interface StoreState {
    data: CombinedPostData;
    setData: (key: keyof CombinedPostData, value: CombinedPostData[typeof key]) => void;
    setInitialData: (data: CombinedPostData) => void;
}

const useStorePost = create<StoreState>(set => ({
    data: initialData,
    setData: (key: keyof CombinedPostData, value: CombinedPostData[typeof key]) => set(state => ({
        data: {
            ...state.data,
            [key]: value
        }
    })),
    setInitialData: (data: CombinedPostData) => set(() => ({data})),
}));

export default useStorePost;
