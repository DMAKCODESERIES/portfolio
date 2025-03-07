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
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import NavList from "./navList";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/routes/about" },
    { name: "Resume", path: "/routes/resume" },
    { name: "Projects", path: "/routes/projects" },
    { name: "Contact", path: "/routes/contact" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <nav className="bg-gray-800 fixed w-full shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-[#7BFC7C] font-bold text-lg">
                        Daniyal Musadiq
                    </Link>

                    {/* Desktop Navigation */}
                    <NavList />

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                            <DrawerTrigger asChild>
                                <Button className="p-2" aria-label="Open Menu">
                                    <Image
                                        src="/bars-solid.svg"
                                        height={24}
                                        width={24}
                                        alt="hamburger menu icon"
                                    />
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className="p-4 fixed start-0 h-full w-[80%] bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out">
                                <DrawerHeader>
                                    <DrawerTitle>
                                        <Link href="/" className="text-[#7BFC7C] font-semibold">
                                            Daniyal Musadiq
                                        </Link>
                                    </DrawerTitle>
                                </DrawerHeader>
                                <div className="flex flex-col gap-4 mt-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.path}
                                            onClick={() => setDrawerOpen(false)}
                                            className="px-4 py-2 rounded hover:bg-[#7BFC7C] transition"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
