import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ProductCategoryMenu from "./filter/ProductMobileMenu"
import CustomCheckBox from "@/components/dynamic/CustomCheckBox"
import ProductMobileFilter from "./filter/ProductMobileFilter"
import ProductMobileSortFilter from "./filter/ProductMobileSortFilter"
import { handleCheckboxChange } from "@/lib/utils"

export default function ProductFilter(
    { selectedSortOption, setSelectedSortOption, setSelectedPlatform, setSelectedCategory }: 
    { selectedSortOption:string, setSelectedSortOption:any, setSelectedPlatform:React.Dispatch<React.SetStateAction<string[]>>, setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>> }) {

    function handleChange(e: React.MouseEvent<HTMLButtonElement>) {
        handleCheckboxChange(e, setSelectedPlatform)
    }

    return (
        <div className="p-2 md:p-4 min-w-64 space-y-4 bg-white">
            <div className="mb-0 md:mb-8 max-md:flex max-md:justify-between">
                <h2 className="font-bold">Filter</h2>
                <div className="md:hidden space-x-2 flex items-center">
                    <ProductMobileSortFilter selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} />
                    <ProductMobileFilter setSelectedPlatform={setSelectedPlatform} setSelectedCategory={setSelectedCategory} />
                </div>
            </div>

            <Accordion defaultValue={["item-1", "item-2"]} type="multiple" className="w-full max-md:hidden">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="pt-1">Kategori</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                        <ProductCategoryMenu setSelectedCategory={setSelectedCategory} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="pt-1">Platform</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                        <CustomCheckBox text={"B2B"} value={"b2b"} func={handleChange} />
                        <CustomCheckBox text={"Marketplace"} value={"marketplace"} func={handleChange} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
};

