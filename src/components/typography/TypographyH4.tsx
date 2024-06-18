interface Props {
    text: string
}

export function TypographyH4({ text }: Props) {
  return (
    <h4 className="scroll-m-20 leading-5 text-lg font-medium tracking-tight">
        {text}
    </h4>
  )
}