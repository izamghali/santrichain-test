import React from "react"
import { Input } from "../ui/input"
import { PiMagnifyingGlass } from "react-icons/pi"

export default function SearchBar({ placeholder }: { placeholder: string }) {
    return (
        <div className="relative flex">
            <Input className="font-medium" placeholder={placeholder} />
            <PiMagnifyingGlass className="absolute my-auto top-0 bottom-0 right-4" size={`1.2rem`} />
        </div>
    )
};

