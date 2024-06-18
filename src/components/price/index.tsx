import {Badge} from "@/components/ui/badge.tsx";

interface Props {
    price: number;
}

function Price({price}: Props) {
    return <> <span className={'text-2xl'}>
        <Badge className={'text-2xl mr-2'} variant="default">${price}</Badge>
     per month
 </span>
    </>
}

export default Price;