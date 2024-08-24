import CatalogueParticles from "@/components/custom/CatalogueParticles";
import ProductSection from "@/components/custom/product/ProductSection";
import { Product } from "@/lib/constant";
import { url } from "@/lib/utils";
import Head from "next/head";

export default async function Home() {

    const res = await (await fetch(`${url}?page=1&limit=12&sort_by=-stock`)).json();
    const productData: Product[] = res.data.products
    const totalPage: number = res.data.total_pages 

    return (
        <main className="">
            <Head>
                <title>Product Catalog - Recruitment Test for PT. Digdaya</title>
                <link
                    rel="canonical"
                    href="https://santrichain-takehome-test.vercel.app/"
                    key="canonical"
                />
            </Head>
            <CatalogueParticles />
            <ProductSection totalPage={totalPage} products={productData} />
        </main>
    );
}