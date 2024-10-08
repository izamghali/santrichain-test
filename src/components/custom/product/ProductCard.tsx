'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { PiArrowRight, PiHeart, PiLego } from "react-icons/pi"
import { ToolTip } from "@/components/dynamic/ToolTip"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { formatToIDR, truncateString } from "@/lib/utils"
import { toast } from "sonner"

export function ProductCard(
    { name, imgUrl, slug, stock, price, slashPrice }:
    { name: string, imgUrl: string, slug: string, stock: number, price: number, slashPrice?: number }) {
    
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isImageAvailable, setIsImageAvailable ] = useState<boolean | null>(true)
    const router = useRouter()
    let addedPrice = 0
    if (slashPrice == price ) {
        addedPrice += slashPrice + 3000
    }

    {/*
        // info to display
        // @seller
    */}

    async function checkStatusCode(url:string) {
        if (url.includes('blob')) {
            setIsImageAvailable(false)
            return
        } else {
            try {
                const res = await fetch(url);
                if (res.ok) {
                    setIsImageAvailable(true)
                } else {
                    toast.error(`Error fetching ${ name } image!`)
                    setIsImageAvailable(false)
                }
            } catch (error) {
                toast.error(`Error fetching ${ name } image!`)
            }
        }
    }

    useEffect(() => {
        checkStatusCode(imgUrl)
    }, [])

    return (
        <div className="rounded-sm card-width relative cursor-pointer z-[8] group" >
            <div onClick={() => { setIsLoading(true); router.push(`/products/${slug}`) } }>
                {
                    isImageAvailable ?
                    <div>
                        <Image priority width={900} height={900} className={`object-cover rounded-t-sm card-width card-img-height border-t-[1px] border-x-[1px] ${ stock == 0 ? 'grayscale' :'' }`} src={imgUrl} alt={name} />
                    </div>
                    :
                    <div className="border-t-[1px] border-x-[1px] border-gray-100 flex flex-col relative rounded-t-sm bg-gray-100">
                        <PiLego className="p-10 md:p-16 h-40 sm:h-52 card-width fill-black/60" />
                        <span className="text-center w-full absolute bottom-2 text-black/60">Image not available</span>
                    </div>
                }
                {
                    stock == 0 ? <span className="absolute right-0 top-0 bg-black/70 p-1 rounded-bl-sm rounded-tr-sm text-[10px] text-white">Stock empty</span> : '' 
                }
                {
                    name.includes('Miras') ? <span className="absolute left-0 top-0 bg-white/70 p-1 rounded-tl-sm rounded-br-sm text-[10px] text-black">21+</span> : '' 
                }
            </div>

            <div  className="shadow-sm h-32 rounded-br-sm rounded-bl-sm border-[1px] border-gray-100 p-2 flex flex-col gap-2" onClick={() => { setIsLoading(true); router.push(`/products/${slug}`) } }>
                <h4 className="font-bold text-lg">{ truncateString(name) }</h4>
                {
                    stock != 0 && slashPrice != undefined ?
                    <div className=" ">
                        <div className="flex items-center gap-1">
                            <p className="bg-orange-200 p-1 text-xs rounded-sm">{ slashPrice == price ? Math.round(100 - (price / addedPrice * 100)) : price != 0 ? Math.round(price / slashPrice * 100) : 'Free' }% OFF</p>
                            <p className="text-xs line-through text-black/40">{ formatToIDR( slashPrice == price ? addedPrice : slashPrice ) }</p>
                        </div>
                        <p className="font-bold ">{ price != 0 ? formatToIDR( price ) : 'Free' }</p>
                    </div>
                    :
                    <></>
                }
            </div>
            <PiHeart onClick={() => console.log('clicked')} className="fill-red-400 cursor-pointer absolute bottom-2 right-2" size={`1.2rem`} />
        </div>
    )
}
