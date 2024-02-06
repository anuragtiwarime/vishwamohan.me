"use client";
import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "./ui/drawer";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="md:py-5 md:px-10 px-5 py-2 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-2">
        <div className="w-[2px] md:w-1 h-6 md:h-8 bg-cyan-500" />
        <p className="text-lg md:text-2xl font-semibold">Vishwa Mohan</p>
      </div>

      {/* menu items for desktop view */}
      <Menubar className="hidden md:flex">
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
              pathname === "/about" ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Link href="#">About me</Link>
          </MenubarTrigger>
          <MenubarTrigger className="hover:bg-transparent">
            <Link href="#">
              <Image
                src={"/assets/social/gmail.png"}
                alt="email"
                width={35}
                height={35}
              />
            </Link>
          </MenubarTrigger>
          <MenubarTrigger className="hover:bg-transparent">
            <Link href="#">
              <Image
                src={"/assets/social/youtube.svg"}
                alt="email"
                width={28}
                height={20}
              />
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      {/* drawer for mobile screen */}
      <Drawer>
        <DrawerTrigger asChild className="block md:hidden">
          <Button variant="outline" size={"sm"}>
            <Menu size={20} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="block md:hidden">
          <div className="mx-auto w-full max-w-sm">
            <div className="p-4 pb-0">
              <div className="grid grid-cols-2 gap-2">
                <Link href="#">
                  <Button
                    className="w-full"
                    variant={pathname === "/" ? "default" : "outline"}
                  >
                    Home
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    className="w-full"
                    variant={pathname === "/blog" ? "default" : "outline"}
                  >
                    Blog
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    className="w-full"
                    variant={pathname === "/newsletter" ? "default" : "outline"}
                  >
                    Newsletter
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    className="w-full"
                    variant={pathname === "/connect" ? "default" : "outline"}
                  >
                    Connect
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    className="w-full"
                    variant={pathname === "/about" ? "default" : "outline"}
                  >
                    About me
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    className="w-full"
                    variant={pathname === "/email" ? "default" : "outline"}
                  >
                    Mail me
                  </Button>
                </Link>
                <Link href="#" className="col-span-2">
                  <Button className="w-full text-white" variant={"destructive"}>
                    Youtube
                  </Button>
                </Link>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
