interface Props {
    text: string
}

export function TypographyH4({ text }: Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {text}
    </h4>
  )
}