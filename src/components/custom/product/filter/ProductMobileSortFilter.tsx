import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import React from "react"
import { PiArrowsDownUp } from "react-icons/pi"
import ProductSortMenu from "./ProductSortMenu"

export default function ProductMobileSortFilter() {
    return (
        <>
        <Sheet>
            <SheetTrigger className="border-[1px] border-black/60 p-1 rounded-sm flex items-center">
                <PiArrowsDownUp size={`1.2rem`}/><span className="max-sm:hidden">Sort</span>
            </SheetTrigger>
            <SheetContent className="md:hidden space-y-4" side={'bottom'}>
                <div>
                    <SheetTitle className="font-bold text-xl">Sorting by</SheetTitle>
                    <SheetDescription className="hidden">Lorem ipsum dolor sit amet.</SheetDescription>
                </div>
                <ProductSortMenu />
            </SheetContent>
        </Sheet>
        </>
    )
};

