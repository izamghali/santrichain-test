'use client'
import React, { useEffect, useState } from "react"
import ProductFilter from "./ProductFilter"
import ProductBlock from "./ProductBlock"
import { Product } from "@/lib/constant"
import { Toaster } from "sonner"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { url } from "@/lib/utils"

export default function ProductSection({ products, totalPage }:{ products: Product[], totalPage: number }) {
    
    const router = useRouter()
    const [ productData, setProductData ] = useState(products)
    const [ selectedLimit, setSelectedLimit ] = useState<number>(12)
    const [ selectedSortOption, setSelectedSortOption ] = useState<string>('-stock')
    const [ selectedPage, setSelectedPage ] = useState<number>(1)
    const [ selectedTotalPage, setSelectedTotalPage ] = useState<number>(totalPage)
    const [ selectedPlatform, setSelectedPlatform ] = useState<string[]>([])
    const [ selectedCategory, setSelectedCategory ] = useState<string[]>([])
    
    async function fetchProducts(platform: string[] | [], category: string[] | [], limit?: number, sortOption?: string, page?: number) {
        try {
            let completeURL = `${url}?page=${ page != undefined && page > 0 && page <= selectedTotalPage ? page?.toString() : 1 }&limit=${limit}&sort_by=${sortOption}`
            if (selectedPlatform.length == 1) {
                completeURL += `&platform=${platform[0]}`
            } 

            if (selectedCategory.length > 0 && selectedCategory.length < 4) {
                for (const item of category) {
                    completeURL += `&category=${item}`
                }
            }

            const res = await fetch(completeURL)
            const data = await res.json()
            if (res.ok) {
                setProductData(data.data.products)
                setSelectedTotalPage(data.data.total_pages)
                router.refresh()
            } else {
                toast.error('Error fetching products!')    
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error fetching products!')
        }

    }

    useEffect(() => {
        fetchProducts(selectedPlatform, selectedCategory, selectedLimit, selectedSortOption, selectedPage)
    }, [ selectedLimit, selectedSortOption, selectedPage, selectedPlatform, selectedCategory ])
    

    return (
        <div className="flex justify-center max-md:flex-col py-8">
            <div className="sticky top-[8.36rem] z-10">
                <div className="md:sticky md:top-24 max-md:border-b-[1px] md:border-[1px] border-black/60 md:rounded-sm h-fit overflow-hidden">
                    <ProductFilter 
                        selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} 
                        setSelectedPlatform={setSelectedPlatform}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>
            </div>
            <ProductBlock products={ productData } 
                setSelectedLimit={setSelectedLimit} 
                selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption}
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                selectedTotalPage={selectedTotalPage}
            />
            <Toaster position="top-center" richColors />
        </div>
    )
};

