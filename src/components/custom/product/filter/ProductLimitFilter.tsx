import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductLimitFilter({ setSelectedLimit }: { setSelectedLimit: any }) {

    return (
        <div className="flex items-center gap-2">
            <span>Show</span>
            <Select defaultValue="12" onValueChange={(value) => setSelectedLimit(Number(value))}>
                <SelectTrigger className="w-[70px]">
                    <SelectValue placeholder="12" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="8">8</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="16">16</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="28">28</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <span>result per page</span>
        </div>
    )
};

