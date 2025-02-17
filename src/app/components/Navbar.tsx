"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarProps {
  links: { name: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="hidden sm:flex flex-row justify-between md:gap-14 text-xl font-medium items-center">
      {links.map((link) => (
        <Link key={link.href} href={link.href} legacyBehavior>
          <a
            className={`relative pb-1 transition-all duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:rounded-lg
              ${
                pathname === link.href
                  ? "after:h-[3px] after:bg-gray-700"
                  : "hover:after:h-[3px] hover:after:bg-gray-500 after:h-0"
              }`}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
