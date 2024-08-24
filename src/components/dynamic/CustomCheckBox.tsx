import React, { MouseEventHandler, ReactElement, ReactEventHandler, useState } from "react"
import { Checkbox } from "../ui/checkbox"

export default function CustomCheckBox(
    { text, value, func }: 
    { text: string, value: string, func: any }
    ) {

    return (
        <div className="flex items-center space-x-2">
            <Checkbox onClick={func} value={value} type="button" />
            <label
                htmlFor={value}
                className="text-sm text-black/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >{ text }
            </label>
        </div>
    )
};

