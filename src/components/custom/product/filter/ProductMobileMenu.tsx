import CustomCheckBox from "@/components/dynamic/CustomCheckBox"
import { handleCheckboxChange } from "@/lib/utils"

export default function ProductCategoryMenu({ selectedCategory, setSelectedCategory }: { selectedCategory: string[], setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>> }) {

    const categoryList = [
        {
            text: "Sembako",
            value: "sembako"
        },
        {
            text: "Kesehatan",
            value: "kesehatan"
        },
        {
            text: "Kebutuhan Rumah",
            value: "kebutuhan-rumah"
        },
        {
            text: "Makanan dan Minuman",
            value: "makanan-dan-minuman"
        },
    ]

    function handleChange(e: React.MouseEvent<HTMLButtonElement>) {
        handleCheckboxChange(e, setSelectedCategory)
    }

    return (
        <>
            <div className="space-y-2">
                {
                    categoryList.map((item: { text:string, value: string }, idx: number) => {
                        if (selectedCategory.includes(item.value)) {
                            return <div key={idx}>
                                <CustomCheckBox isChecked={true} text={item.text} value={item.value} func={handleChange}/>
                            </div>
                        } else {
                            return <div key={idx}>
                                <CustomCheckBox isChecked={false} text={item.text} value={item.value} func={handleChange}/>
                            </div>
                        }
                    })
                }
            </div>
        </>
    )
};

