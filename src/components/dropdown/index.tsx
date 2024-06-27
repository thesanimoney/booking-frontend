import {Check, ChevronsUpDown} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";

interface Property {
    value: string,
    label: string
}

interface Props {
    data: Property[],
    title: string,
    setSearchParams: (value: string) => void,
}

export function Dropdown({data, title}: Props) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    console.log(value)


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={'w-full text-zinc-500'}>
                    {value
                        ? data.find((entity) => entity.value === value)?.label
                        : title}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {data.map((entity) => (
                                <CommandItem
                                    key={entity.value}
                                    value={entity.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === entity.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {entity.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
