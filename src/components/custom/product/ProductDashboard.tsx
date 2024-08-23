import React from "react"
import ProductFilter from "./ProductFilter"

export default function ProductDashboard() {
    return (
        <div className="md:sticky md:top-24 max-md:border-b-[1px] md:border-[1px] border-black/60 md:rounded-sm h-fit overflow-hidden">
            <ProductFilter />
        </div>
    )
};

