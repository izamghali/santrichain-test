import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Product } from "@/lib/constant";
import { url } from "@/lib/utils";
import { toast } from "sonner";
import Image from "next/image";
import { PiLego } from "react-icons/pi";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ReactDOM from 'react-dom/client'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./_components/EmblaCarousel";

export default async function Page(params : { params: { slug: string } }) {

    const { slug } = params.params;
    let product: Product | null = null;
    let isImageAvailable: boolean = false;

    const OPTIONS: EmblaOptionsType = {
        
    }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    try {
        let completeURL = url + '/' + slug;
        const res = await fetch(completeURL)
        const data = await res.json()
        product = data.data
        
    } catch (error) {
        toast.error(`Error fetching ${ slug }`)
    }

    if (product?.image_urls[0]) {
        if (url.includes('blob')) {
            isImageAvailable = false
            return
        } else {
            try {
                const res = await fetch(url);
                if (res.ok) {
                    isImageAvailable = true
                } else {
                    toast.error(`Error fetching ${ product?.name } image!`)
                    isImageAvailable = false
                }
            } catch (error) {
                toast.error(`Error fetching ${ product?.name } image!`)
            }
        }
    }
    
    return (
        <div className="flex justify-center">
            <div className="std-max-w w-full p-4 flex max-md:flex-col gap-8">
                <div className="space-y-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Catalogue</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Products</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{ product?.name }</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex max-sm:justify-center">
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <div className="w-[22rem] h-[22rem] border-[1px] border-gray-300 rounded-sm overflow-hidden">
                            {
                                product?.image_urls[0] && isImageAvailable ?
                                <Image priority width={900} height={900} className={`object-cover w-full h-full ${ product?.stock == 0 ? 'grayscale' :'' }`} src={product?.image_urls[0]} alt={product?.name} />
                                :
                                <div className="flex flex-col relative bg-gray-100">
                                    <PiLego className="p-10 md:p-16 w-96 h-96 fill-black/60" />
                                    <span className="text-center w-full absolute bottom-2 text-black/60">Image not available</span>
                                </div>
                            }
                        </div>
                        <div className="max-lg:hidden border-2 border-green-400 w-[22rem]">
                            <Carousel orientation="horizontal" className="">
                                <CarouselContent className="max-h-96 space-y-0 flex">
                                    {Array.from({ length: 3 }).map((_, index) => (
                                    <CarouselItem key={index} className="w-full h-full p-0 m-0">
                                        <div className="">
                                            <Card>
                                                <CardContent className="flex items-center justify-center p-6">
                                                <span className="text-2xl font-semibold">{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div> */}
                    <h1 className="font-bold text-2xl lg:text-3xl">{ product?.name }</h1>
                </div>
                <div className="flex gap-8 max-lg:flex-col">
                    <div className="p-4 py-8 border-2 border-red-400 min-w-72">
                        <h2 className="font-semibold text-lg">Description</h2>
                        <p className="text-black/60">{ product?.short_description }</p>
                    </div>
                    <div className="min-w-72 border-[1px] h-96">

                    </div>

                </div>
            </div>
        </div>
    )
}