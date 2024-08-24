import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductSortFilter({ selectedSortOption, setSelectedSortOption }: { selectedSortOption:string, setSelectedSortOption:any }) {

    const sortList = [
        {
            text: 'Availability',
            value: '-stock'
        },
        {
            text: 'Price (High - Low)',
            value: '-price'
        },
        {
            text: 'Price (Low - High)',
            value: 'price'
        },
        {
            text: 'A - Z',
            value: 'name'
        },
        {
            text: 'Z - A',
            value: '-name'
        },
    ]

    return (
        <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <Select onValueChange={(value) => setSelectedSortOption(value)} value={selectedSortOption}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            sortList.map((item: { text: string, value: string }, idx: number) => {
                                return <div key={idx}>
                                    <SelectItem value={item.value}>{ item.text }</SelectItem>
                                </div>
                            })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
};

