
export default function SinglePageBtn({ content, onClickFunc }: { content: string | number, onClickFunc?: any }) {
    return (
        <div onClick={onClickFunc} className="rounded-sm w-10 h-10 flex hover:bg-slate-100 hover:border-slate-100 cursor-pointer justify-center items-center"><span>{ content }</span></div>
    )
};

