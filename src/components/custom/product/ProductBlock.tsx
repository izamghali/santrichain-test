import React, { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { Product } from "@/lib/constant"
import { Skeleton } from "@/components/ui/skeleton"
import ProductLimitFilter from "./filter/ProductLimitFilter"
import ProductSortFilter from "./filter/ProductSortFilter"
import { CataloguePagination } from "../CataloguePagination"
import ProductMobileSortFilter from "./filter/ProductMobileSortFilter"

export default function ProductBlock(
    { products, setSelectedLimit, selectedSortOption, setSelectedSortOption, selectedPage, setSelectedPage, selectedTotalPage }: 
    { products: Product[], setSelectedLimit: any, selectedSortOption: string, setSelectedSortOption:any, selectedPage: number, setSelectedPage:any, selectedTotalPage: number }) {

    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        if (products.length > 0) {
            setIsLoading(true)
        }
    }, [])

    return (
        <div className="std-max-w md:w-fit w-full px-4 space-y-4">
            <div className="flex items-center justify-between">
                <div className="max-md:hidden">
                    <ProductLimitFilter setSelectedLimit={setSelectedLimit}/>
                </div>
                <div className="max-lg:hidden">
                    <ProductSortFilter selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} />
                </div>
                <div className="lg:hidden max-md:hidden">
                    <ProductMobileSortFilter selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} />
                </div>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 max-xs:grid-cols-1 gap-4 sm:gap-10">
                {
                    isLoading && products?.length > 0 ?
                        products?.map((product: Product, idx: number) => {
                            return <div key={idx} className="max-md:flex max-md:justify-center">
                                <ProductCard
                                    name={product.name}
                                    imgUrl={product.image_urls[0]}
                                    slug={product.slug}
                                    price={product?.price_range?.min || product.price || 0}
                                    // price={product.stock != 0 || product.price != null ? product.price_range.min || product.price : 0}
                                    slashPrice={product.price_range?.max || product.price || 0}
                                    // slashPrice={product.stock != 0 ? product.price_range.min_slash || product.price_range.max : 0}
                                    stock={product.stock}                           />
                            </div>
                        })
                    :
                    <>
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                        <Skeleton className="card-width h-[21rem] rounded-sm justify-self-center" />
                    </>
                }
            </div>

            <div className="max-md:hidden">
                <CataloguePagination selectedPage={selectedPage} setSelectedPage={setSelectedPage} selectedTotalPage={selectedTotalPage} />
            </div>
        </div>
    )
};

