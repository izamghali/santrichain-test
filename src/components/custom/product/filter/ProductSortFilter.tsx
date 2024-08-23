import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from "react"

export default function ProductSortFilter({ selectedSortOption, setSelectedSortOption }: { selectedSortOption:string, setSelectedSortOption:any }) {
    return (
        <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <Select onValueChange={(value) => setSelectedSortOption(value)} defaultValue={selectedSortOption}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Availability"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="-stock">Availability</SelectItem>
                        <SelectItem value="-price">Price (High - Low)</SelectItem>
                        <SelectItem value="price">Price (Low - High)</SelectItem>
                        <SelectItem value="name">A - Z</SelectItem>
                        <SelectItem value="-name">Z - A</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
};

