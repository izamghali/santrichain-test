import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { toast } from "sonner"
  
export function CataloguePagination({ selectedPage, setSelectedPage, selectedTotalPage }: { selectedPage: number, setSelectedPage: any, selectedTotalPage: number }) {

    function handlePrev() {
        if (selectedPage > 0) {
            setSelectedPage((prev: number) => prev - 1)
        } else {
            toast.error('Cannot access previous page!')
        }
    }

    function handleNext() {
        if (selectedPage < selectedTotalPage) {
            setSelectedPage((prev: number) => prev + 1)
        } else {
            toast.error('You have reached the last page!')
        }
        
    }

    return (
        <Pagination>
            <PaginationContent>
                {
                    selectedPage != 1 &&
                    <PaginationItem onClick={handlePrev}>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                }
                {
                    selectedPage > 1 &&
                    <PaginationItem>
                        <PaginationLink href="#">{ selectedPage - 1 }</PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationLink isActive href="#">{ selectedPage }</PaginationLink>
                </PaginationItem>
                {
                    selectedPage != selectedTotalPage &&
                    <PaginationItem>
                        <PaginationLink href="#">{ selectedPage + 1 }</PaginationLink>
                    </PaginationItem>
                }
                {
                    selectedPage + 3 == selectedTotalPage &&
                    <>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">{ selectedTotalPage }</PaginationLink>
                    </PaginationItem>
                    </>
                }
                {
                    selectedPage != selectedTotalPage &&
                    <PaginationItem onClick={handleNext}>
                        <PaginationNext href="#" />
                    </PaginationItem>
                }
            </PaginationContent>
        </Pagination>
    )
}
  