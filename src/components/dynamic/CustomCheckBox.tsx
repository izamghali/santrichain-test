import React from "react"
import { Checkbox } from "../ui/checkbox"

export default function CustomCheckBox({ text, idName, checkedStatus }: { text:string, idName: string, checkedStatus: boolean | false }) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox checked={checkedStatus} id={idName} />
            <label

                htmlFor={idName}
                className="text-sm text-black/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >{ text }
            </label>
        </div>
    )
};

