'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/routes/about" },
    { name: "Resume", path: "/routes/resume" },
    { name: "Projects", path: "/routes/projects" },
    { name: "Contact", path: "/routes/contact" },
];
const NavList = () => {
    const pathname = usePathname();
  return (
      <div className="hidden md:flex gap-6">
          {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                  <Link
                      key={item.name}
                      href={item.path}
                      className={`px-3 py-1 transition duration-300 rounded-md font-poppins text-white hover:bg-[#7BFC7C]/20 ${isActive ? "text-[#7BFC7C] border-b-2 border-[#7BFC7C]" : ""
                          }`}
                  >
                      {item.name}
                  </Link>
              );
          })}
      </div>
  )
}

export default NavList
