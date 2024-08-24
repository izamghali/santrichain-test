import React, { MouseEventHandler, ReactElement, ReactEventHandler, useState } from "react"
import { Checkbox } from "../ui/checkbox"

export default function CustomCheckBox(
    { text, value, func, isChecked }: 
    { text: string, value: string, func: any, isChecked?: boolean }
    ) {

    return (
        <div className="flex items-center space-x-2">
            <Checkbox onClick={func} value={value} type="button" checked={isChecked} />
            <label
                htmlFor={value}
                className="text-sm text-black/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >{ text }
            </label>
        </div>
    )
};

