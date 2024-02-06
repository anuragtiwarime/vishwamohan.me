"use client";
import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="py-5 px-10 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-8 bg-cyan-500" />
        <p className="text-2xl font-semibold">Vishwa Mohan</p>
      </div>

      {/* for menu items */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger
            className={`${
              pathname === "/" ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link href="#">Home</Link>
          </MenubarTrigger>
          <MenubarTrigger
            className={`${
              pathname === "/blog" ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link href="#">Blog</Link>
          </MenubarTrigger>
          <MenubarTrigger
            className={`${
              pathname === "newsletter"
                ? "bg-accent text-accent-foreground"
                : ""
            }`}
          >
            <Link href="#">Newsletter</Link>
          </MenubarTrigger>
          <MenubarTrigger
            className={`${
              pathname === "/connect" ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link href="#">Connect</Link>
          </MenubarTrigger>
          <MenubarTrigger
            className={`${
              pathname === "/email" ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link href="#">@</Link>
          </MenubarTrigger>
          <MenubarTrigger
            className={`${
              pathname === "/youtube" ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link href="#">Youtube</Link>
          </MenubarTrigger>
          <MenubarTrigger
            className={`${
              pathname === "/about" ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link href="#">About me</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};

export default Navbar;
