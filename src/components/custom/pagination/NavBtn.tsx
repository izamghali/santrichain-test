import React from "react"

export default function NavBtn({ content, onClickFunc }: { content: React.ReactElement, onClickFunc: any }) {
    return (
        <div onClick={onClickFunc} className="flex items-center gap-1 cursor-pointer hover:bg-slate-100 p-2 px-4 rounded-sm">
            { content }
        </div>
    )
};

