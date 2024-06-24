
interface ButtonOutlineProps {
    text: string;
}

function ButtonOutline({text}: ButtonOutlineProps) {
    return <>
        <button
            className={'hover:outline hover:outline-red-800 ' +
                'transform transition ease-in-out 300ms py-2 px-5 outline outline-secondary rounded-md'}>{text}</button>
    </>
}

export default ButtonOutline;