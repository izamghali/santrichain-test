import React from "react"
import { ProductCard } from "./ProductCard"


export default function ProductBlock() {
    return (
        <div className="std-max-w w-full p-4 flex gap-4 overflow-scroll">
            <ProductCard name={"product1"} imgUrl={""} slug={""} price={1000}/>
            <ProductCard name={"product1"} imgUrl={""} slug={""} price={1000}/>
            <ProductCard name={"product1"} imgUrl={""} slug={""} price={1000}/>
            <ProductCard name={"product1"} imgUrl={""} slug={""} price={1000}/>
        </div>
    )
};

