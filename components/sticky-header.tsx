"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function StickyHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const ThemeToggle = () => (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-stone-950/95 dark:supports-[backdrop-filter]:bg-stone-950/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <ShoppingCart className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                FashionStore
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/products">Products</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/deals">Deals</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            onClick={toggleDrawer}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-500 dark:text-stone-400" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full bg-white pl-8 md:w-[300px] md:focus:w-[500px] lg:w-[300px] lg:focus:w-[600px] dark:bg-stone-950"
                  />
                </div>
              </form>
            </div>
            <nav className="flex items-center">
              <Link
                href="/cart"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      {/* Side Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={toggleDrawer}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close Menu</span>
          </Button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/products"
                  className="text-lg font-medium"
                  onClick={toggleDrawer}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-lg font-medium"
                  onClick={toggleDrawer}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/deals"
                  className="text-lg font-medium"
                  onClick={toggleDrawer}
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={toggleDrawer}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
}
