interface Props {
    text: string;
    isSecondary?: boolean;
    isDanger?: boolean
}

export default function TypographyP({text, isSecondary, isDanger}: Props) {
  return (
    <p className={`leading-7 ${isSecondary ? 'text-gray-400' : ''} ${isDanger ? 'text-red-600' : ''}`}>
        {text}
    </p>
  )
}
