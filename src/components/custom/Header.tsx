"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { PiShoppingCart, PiSignIn, PiUser, PiUserCircle } from "react-icons/pi"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import MobileDrawer from "./MobileDrawer"
import SearchBar from "./SearchBar"

export function Header() {

    return (
        <NavigationMenu>
            <NavigationMenuList className="md:border-b-2 flex max-md:flex-col max-md:items-start w-screen justify-between gap-6 p-4 max-md:bg-std">
                <div className="flex items-center max-md:justify-between max-md:w-full gap-6">
                    <NavigationMenuItem>
                        <Link href={'/'}>
                            <Image
                                priority
                                className="bg-std p-2 rounded-sm min-w-40"
                                width={180}
                                height={180}
                                // src={"https://marketplace.santrichain.id/_next/image?url=%2Fassets%2Fimages%2Fsc-logo-green.png&w=640&q=75"}
                                src={"https://marketplace.santrichain.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sc-beta.589013b2.png&w=256&q=75"}
                                alt={"santrichain-logo"}
                            />
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="max-md:hidden font-light"><Link href={'/catalog'}>Catalog</Link></NavigationMenuItem>
                    <MobileDrawer />
                </div>
                <NavigationMenuItem className="text-md max-w-[50rem] w-full">
                    <SearchBar placeholder={"Apa yang Anda cari"} />
                </NavigationMenuItem>
                <div className="flex items-center gap-6 max-md:hidden">
                    <div>
                        <PiShoppingCart size={'1.2rem'} />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="focus-visible:outline-0"><PiUser size={'1.2rem'} /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <Link href={""}>
                                <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
                                    <PiSignIn/>Masuk
                                </DropdownMenuItem>
                            </Link>
                            <Link href={""}>
                                <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
                                    <PiUserCircle/>Daftar
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
