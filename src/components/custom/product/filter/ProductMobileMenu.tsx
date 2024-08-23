import CustomCheckBox from "@/components/dynamic/CustomCheckBox"
import React from "react"

export default function ProductCategoryMenu() {
    return (
        <>
            <div className="space-y-2">
                <CustomCheckBox text={"Sembako"} idName={"sembako"} checkedStatus={false} />
                <CustomCheckBox text={"Kesehatan"} idName={"kesehatan"} checkedStatus={false} />
                <CustomCheckBox text={"Kebutuhan Rumah"} idName={"kebutuhan-rumah"} checkedStatus={false} />
                <CustomCheckBox text={"Makanan dan Minuman"} idName={"makanan-dan-minuman"} checkedStatus={false} />
            </div>
        </>
    )
};

