interface Props {
    text: string;
    isSecondary?: boolean;
}

export default function TypographyP({text, isSecondary}: Props) {
  return (
    <p className={`leading-7 ${isSecondary ? 'text-gray-400' : ''}`}>
        {text}
    </p>
  )
}
