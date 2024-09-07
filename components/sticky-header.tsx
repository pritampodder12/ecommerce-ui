"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ShoppingCart, Menu } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Component() {
  const [isSticky, setIsSticky] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  const NavItems = () => (
    <>
      <li>
        <Button variant="ghost">Home</Button>
      </li>
      <li>
        <Button variant="ghost">About</Button>
      </li>
      <li>
        <Button variant="ghost">Services</Button>
      </li>
      <li>
        <Button variant="ghost">Contact</Button>
      </li>
    </>
  );

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
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-10 ${
        isSticky
          ? "bg-background shadow-md py-2"
          : "bg-background/60 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Shopping App</div>
          <nav className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4">
              <NavItems />
            </ul>
            <ThemeToggle />
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            <Link href="/cart" className="mr-2">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-4">
                  <ul className="flex flex-col space-y-2">
                    <NavItems />
                  </ul>
                  <ThemeToggle />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
