import CustomCheckBox from "@/components/dynamic/CustomCheckBox"
import { handleCheckboxChange } from "@/lib/utils"
import React from "react"

export default function ProductCategoryMenu({ setSelectedCategory }: { setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>> }) {

    function handleChange(e: React.MouseEvent<HTMLButtonElement>) {
        handleCheckboxChange(e, setSelectedCategory)
    }

    return (
        <>
            <div className="space-y-2">
                <CustomCheckBox text={"Sembako"} value={"sembako"} func={handleChange}/>
                <CustomCheckBox text={"Kesehatan"} value={"kesehatan"} func={handleChange}/>
                <CustomCheckBox text={"Kebutuhan Rumah"} value={"kebutuhan-rumah"} func={handleChange}/>
                <CustomCheckBox text={"Makanan dan Minuman"} value={"makanan-dan-minuman"} func={handleChange}/>
            </div>
        </>
    )
};

