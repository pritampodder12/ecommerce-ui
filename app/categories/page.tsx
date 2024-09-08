"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Clothing",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: 150,
  },
  {
    id: 2,
    name: "Shoes",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: 80,
  },
  {
    id: 3,
    name: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: 120,
  },
  {
    id: 4,
    name: "Sportswear",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: 90,
  },
  {
    id: 5,
    name: "Outerwear",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: 60,
  },
  {
    id: 6,
    name: "Swimwear",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: 40,
  },
];

export default function CategoriesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
          Product Categories
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
          Explore our wide range of product categories and find exactly what
          you're looking for.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/categories/${category.id}`}
              key={category.id}
              className="no-underline"
            >
              <Card className="overflow-hidden transition-transform hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.itemCount} items
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
