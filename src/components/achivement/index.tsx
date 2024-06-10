import {stats} from "@/data/data.ts";
import TypographyP from "@/components/typography/TypographyP.tsx";
import TypographyH2 from "@/components/typography/TypographyH2.tsx";
import './achievement.css'

function Achievement() {
    return <>
        <div className="mx-auto">
            <ul className={'list'}>
                {stats.map((stat, index) => <li key={index}>
                    <TypographyH2 text={stat.numbers.toString()}/>
                    <TypographyP isSecondary={true} text={stat.name}/>
                </li>)}
            </ul>
        </div>
    </>
}

export default Achievement;