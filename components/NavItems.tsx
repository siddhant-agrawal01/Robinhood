"use client";

// import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import SearchCommand from "@/components/SearchCommand";

const NavItems = () => {
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium"></ul>
  );
};
export default NavItems;
