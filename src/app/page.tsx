import CatalogueParticles from "@/components/custom/CatalogueParticles";
import ProductBlock from "@/components/custom/product/ProductBlock";
import ProductDashboard from "@/components/custom/product/ProductDashboard";
import { Product } from "@/lib/constant";

export default async function Home() {
    const url = `https://api-dev-konteks.santrichain.id/api/v1/catalogue`
    const res = await (await fetch(`${url}?category=kebutuhan-rumah&page=1&limit=12&sort_by=-stock&platform=b2b`)).json()
    const products: Product[] = res.data.products

    return (
        <main className="">
            <CatalogueParticles />
            <div className="flex justify-center max-md:flex-col py-8">
                <div className="sticky top-[8.36rem] z-10">
                    <ProductDashboard />
                </div>
                <ProductBlock products={ products && products.length > 0 ? products : [] } />
            </div>
        </main>
    );
}