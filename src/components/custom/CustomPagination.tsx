import React from "react"
import { PiCaretLeft, PiCaretRight } from "react-icons/pi"
import SinglePageBtn from "./pagination/SinglePageBtn"
import NavBtn from "./pagination/NavBtn"

export default function CustomPagination({ selectedPage, setSelectedPage, selectedTotalPage }: { selectedPage: number, setSelectedPage: any, selectedTotalPage: number }) {

    function handleNextPage() {
        setSelectedPage((prev: number) => prev + 1)
    }

    function handlePrevPage() {
        setSelectedPage((prev: number) => prev - 1)
    }

    return (
        <div className="h-12 flex items-center justify-center gap-4">
            {
                selectedPage != 1 &&
                <NavBtn 
                    content={<><PiCaretLeft className="translate-y-[1.8px]" size={`1.2rem`} />previous</>} 
                    onClickFunc={handlePrevPage} 
                />
            }
            <div className="flex items-center gap-2">
                {       
                    selectedPage - 3 >= 1 &&
                    <div className="space-x-2 flex items-center">
                        <SinglePageBtn onClickFunc={() => setSelectedPage(1)} content='1' />
                        <SinglePageBtn content="..." />
                    </div>
                }
                {
                    selectedPage > 1 &&
                    <div className=" rounded-sm w-10 h-10 flex hover:bg-slate-100 hover:border-slate-100 cursor-pointer justify-center items-center"><span >{ selectedPage - 1 }</span></div>
                }
                <div className="border-[1px] rounded-sm w-10 h-10 hover:bg-slate-100 hover:border-slate-100 flex justify-center items-center"><span >{ selectedPage }</span></div>
                {
                    selectedPage != selectedTotalPage &&
                    <SinglePageBtn content={selectedPage + 1} />
                }
                {   
                    selectedPage + 3 <= selectedTotalPage &&
                    <div className="space-x-2 flex items-center">
                        <SinglePageBtn content="..." />
                        <SinglePageBtn onClickFunc={() => setSelectedPage(selectedTotalPage)} content={ selectedTotalPage } />
                    </div>
                }
            </div>
            
            {
                selectedPage != selectedTotalPage &&
                <NavBtn 
                    content={<>next<PiCaretRight className="translate-y-[1.5px]" size={`1.2rem`} /></>} 
                    onClickFunc={handleNextPage} 
                />
            }
            
        </div>
    )
};

