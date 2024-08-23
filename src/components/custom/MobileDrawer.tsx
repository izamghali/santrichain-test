import React from "react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { PiList, PiShoppingCart, PiSignIn, PiUser, PiUserCircle } from "react-icons/pi"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Image from "next/image"
import { Separator } from "../ui/separator"

export default function MobileDrawer() {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden"><PiList className="max-md:fill-white" size={`1.5rem`} /></SheetTrigger>
            <SheetContent className="p-0" side={'right'}>
                <div className="w-full bg-std h-[8rem] relative">
                    <SheetTitle className="absolute left-2 bottom-5">
                        <Image priority className="w-auto h-auto min-w-20"
                            width={180} height={180}
                            src={"https://marketplace.santrichain.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sc-beta.589013b2.png&w=256&q=75"}
                            alt={"santrichain-logo"}
                        />
                    </SheetTitle>
                    <SheetDescription className="hidden">Lorem ipsum dolor sit amet.</SheetDescription>
                </div>
                <div className="p-1 absolute top-2 left-2">
                    <PiShoppingCart size={'1.2rem'} className="fill-white" />
                </div>
                <div className="p-2 space-y-2">
                    <h2 className="font-semibold">Akun</h2>
                    <ul className="space-y-1">
                        <Link className="flex items-center gap-2" href={"https://marketplace.santrichain.id/login"}>
                            <PiSignIn size={'1.2rem'} />Masuk
                        </Link>
                        <Link className="flex items-center gap-2" href={"https://marketplace.santrichain.id/register"}>
                            <PiUserCircle size={'1.2rem'} />Daftar
                        </Link>
                    </ul>
                </div>
                <Separator />
            </SheetContent>
        </Sheet>
    )
};

