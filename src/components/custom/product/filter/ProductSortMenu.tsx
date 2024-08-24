import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React from "react"

export default function ProductSortMenu({ selectedSortOption, setSelectedSortOption }: { selectedSortOption: string, setSelectedSortOption:any }) {
    return (
        <RadioGroup onValueChange={(value) => setSelectedSortOption(value)} defaultValue={selectedSortOption} className="space-y-2 max-md:space-y-4">
            <div className="flex items-center space-x-2">
                <RadioGroupItem checked={selectedSortOption == '-stock' ? true: false} value="-stock" id="r1" />
                <Label className="text-black/60" htmlFor="r1">Availability</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem checked={selectedSortOption == '-price' ? true: false} value="-price" id="r2" />
                <Label className="text-black/60" htmlFor="r2">Price (High - Low)</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem checked={selectedSortOption == 'price' ? true: false} value="price" id="r3" />
                <Label className="text-black/60" htmlFor="r3">Price (Low - High)</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem checked={selectedSortOption == 'name' ? true: false} value="name" id="r4" />
                <Label className="text-black/60" htmlFor="r4">A - Z</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem checked={selectedSortOption == '-name' ? true: false} value="-name" id="r5" />
                <Label className="text-black/60" htmlFor="r5">Z - A</Label>
            </div>
        </RadioGroup>
    )
};

