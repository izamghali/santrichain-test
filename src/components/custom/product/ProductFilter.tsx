import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ProductCategoryMenu from "./filter/ProductMobileMenu"
import CustomCheckBox from "@/components/dynamic/CustomCheckBox"
import ProductMobileFilter from "./filter/ProductMobileFilter"
import ProductMobileSortFilter from "./filter/ProductMobileSortFilter"
import ProductSortMenu from "./filter/ProductSortMenu"

export default function ProductFilter() {
    return (
        <div className="p-2 md:p-4 min-w-64 space-y-4 bg-white">
            <div className="mb-0 md:mb-8 max-md:flex max-md:justify-between">
                <h2 className="font-bold">Filter</h2>
                <div className="md:hidden space-x-2 flex items-center">
                    <ProductMobileSortFilter />
                    <ProductMobileFilter />
                </div>
            </div>

            <Accordion defaultValue="item-1" type="single" collapsible className="w-full max-md:hidden">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="pt-1">Kategori</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                        <ProductCategoryMenu />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="pt-1">Platform</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                        <CustomCheckBox text={"B2B"} idName={"b2b"} checkedStatus={false} />
                        <CustomCheckBox text={"Marketplace"} idName={"marketplace"} checkedStatus={false} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="max-md:hidden lg:hidden">
                <h2 className="mb-4 font-bold">Sort</h2>
                <ProductSortMenu />
            </div>
        </div>
    )
};

