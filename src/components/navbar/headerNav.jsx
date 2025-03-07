"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/routes/about" },
    { name: "Resume", path: "/routes/resume" },
    { name: "Projects", path: "/routes/projects" },
    { name: "Contact", path: "/routes/contact" },
];

const HeaderNav = () => {
    const pathname = usePathname();
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className="flex flex-col ">

            <div className="md:hidden">

                <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <DrawerTrigger asChild>
                        <Button className="p-0">
                            <Image
                                src="/bars-solid.svg"
                                height={25}
                                width={25}
                                alt="hamburger menu icon"
                                className="cursor-pointer"
                            />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-4 fixed start-0 left-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0" >
                        <DrawerHeader>
                            <DrawerTitle>
                                <Link href="/" className="text-[#7BFC7C] font-semibold">
                                    Daniyal Musadiq
                                </Link>
                            </DrawerTitle>
                        </DrawerHeader>
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setDrawerOpen(false)}
                                    className="px-3 py-2 rounded hover:bg-[#7BFC7C]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
         
        </div>

    )
}

export default HeaderNav
