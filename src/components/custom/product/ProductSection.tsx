'use client'
import React, { useEffect, useState } from "react"
import ProductFilter from "./ProductFilter"
import ProductBlock from "./ProductBlock"
import { Product } from "@/lib/constant"
import { Toaster } from "sonner"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { url } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ProductSection({ products, totalPage }:{ products: Product[], totalPage: number }) {
    
    const router = useRouter()
    const [ productData, setProductData ] = useState(products)
    const [ selectedLimit, setSelectedLimit ] = useState<number>(12)
    const [ selectedSortOption, setSelectedSortOption ] = useState<string>('-stock')
    const [ selectedPage, setSelectedPage ] = useState<number>(1)
    const [ selectedTotalPage, setSelectedTotalPage ] = useState<number>(totalPage)
    const [ selectedPlatform, setSelectedPlatform ] = useState<string[]>([])
    const [ selectedCategory, setSelectedCategory ] = useState<string[]>([])
    const [ atBottom, setAtBottom ] = useState<boolean>(false)
    const [ totalProduct, setTotalProduct ] = useState<number>(0)
    
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
                setTotalProduct(data.data.total)
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

    useEffect(() => {
        let mobileScreen = window.matchMedia("(max-width: 549px)").matches
        window.onscroll = function() {
            const scrolledTo = window.scrollY + window.innerHeight;
            const isReachBottom = document.body.scrollHeight === scrolledTo;
            if (mobileScreen) {
                if (isReachBottom) {
                    setAtBottom(true)
                    // setSelectedLimit((prev: number) => prev + 4)
                } else setAtBottom(false)
    
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById('scroll-up-btn')?.classList.remove('hidden')
                } else document.getElementById('scroll-up-btn')?.classList.add('hidden')
            }
        }
    }, [])

    return (
        <div className="flex justify-center max-md:flex-col py-8">
            <div className="sticky top-[8.36rem] z-10">
                <div className="md:sticky md:top-24 max-md:border-b-[1px] md:border-[1px] border-black/60 md:max-w-64 md:rounded-sm h-fit overflow-hidden">
                    <ProductFilter 
                        selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} 
                        selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform}
                        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                    />
                </div>
            </div>
            <ProductBlock products={ productData } 
                selectedLimit={selectedLimit} setSelectedLimit={setSelectedLimit} 
                selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption}
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                selectedTotalPage={selectedTotalPage}
                atBottom={atBottom} totalProduct={totalProduct}
            />
            <Button className="hidden fixed bottom-2 right-2 z-10 w-10 h-10 p-2" id="scroll-up-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp /></Button>
            <Toaster position="top-center" richColors />
        </div>
    )
};

