import CatalogueParticles from "@/components/custom/CatalogueParticles";
import ProductSection from "@/components/custom/product/ProductSection";
import { Product } from "@/lib/constant";
import { url } from "@/lib/utils";

export default async function Home() {

    const res = await (await fetch(`${url}?category=kebutuhan-rumah&page=1&limit=12&sort_by=-stock`)).json();
    const productData: Product[] = res.data.products
    const totalPage: number = res.data.total_pages 

    return (
        <main className="">
            <CatalogueParticles />
            <ProductSection totalPage={totalPage} products={productData} />
        </main>
    );
}