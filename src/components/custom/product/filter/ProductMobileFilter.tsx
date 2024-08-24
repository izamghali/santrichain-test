import { PiSlidersHorizontal } from "react-icons/pi"
import ProductCategoryMenu from "./ProductMobileMenu"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import CustomCheckBox from "@/components/dynamic/CustomCheckBox"
import { handleCheckboxChange } from "@/lib/utils"

export default function ProductMobileFilter({ setSelectedPlatform, setSelectedCategory }: { setSelectedPlatform:React.Dispatch<React.SetStateAction<string[]>>, setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>> }) {

    function handleChange(e: React.MouseEvent<HTMLButtonElement>) {
        handleCheckboxChange(e, setSelectedPlatform)
    }

    return (
        <>
            <Sheet>
                <SheetTrigger className="border-[1px] border-black/60 p-1 rounded-sm flex items-center">
                    <PiSlidersHorizontal size={`1.2rem`}/><span className="max-sm:hidden">Filter</span>
                </SheetTrigger>
                <SheetContent className="md:hidden space-y-4" side={'bottom'}>
                    <div>
                        <SheetTitle className="font-bold text-xl">Filter</SheetTitle>
                        <SheetDescription className="hidden">Lorem ipsum dolor sit amet.</SheetDescription>
                    </div>
                    <div className="space-y-2">
                        <h3 className="filter-heading-mobile">Category</h3>
                        <ProductCategoryMenu setSelectedCategory={setSelectedCategory} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="filter-heading-mobile">Platform</h3>
                        <div className="space-y-2">
                            <CustomCheckBox text={"B2B"} value={"b2b"} func={handleChange} />
                            <CustomCheckBox text={"Marketplace"} value={"marketplace"} func={handleChange}/>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
};

