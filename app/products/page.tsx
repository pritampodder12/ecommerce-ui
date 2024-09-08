"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    category: "Tops",
    color: "White",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 49.99,
    category: "Bottoms",
    color: "Blue",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 199.99,
    category: "Outerwear",
    color: "Black",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 39.99,
    category: "Dresses",
    color: "Floral",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    category: "Shoes",
    color: "Gray",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Wool Sweater",
    price: 69.99,
    category: "Tops",
    color: "Navy",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "Cargo Shorts",
    price: 34.99,
    category: "Bottoms",
    color: "Khaki",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Silk Blouse",
    price: 59.99,
    category: "Tops",
    color: "Red",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const categories = ["All", "Tops", "Bottoms", "Outerwear", "Dresses", "Shoes"];
const colors = [
  "All",
  "White",
  "Blue",
  "Black",
  "Floral",
  "Gray",
  "Navy",
  "Khaki",
  "Red",
];

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  const applyFilters = () => {
    let result = products.filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        (selectedColor === "All" || product.color === selectedColor) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.color.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    switch (sortBy) {
      case "priceLowToHigh":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        result.sort((a, b) => b.price - a.price);
        break;
      case "nameAZ":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameZA":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // featured sorting - no change to order
        break;
    }

    setFilteredProducts(result);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Search</h2>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-500 dark:text-stone-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && applyFilters()}
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <Select
                value={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Color</h2>
              <Select
                value={selectedColor}
                onValueChange={(value) => setSelectedColor(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Price Range</h2>
              <Slider
                min={0}
                max={200}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <Button onClick={applyFilters} className="w-full">
              Apply Filters
            </Button>
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-stone-500 dark:text-stone-400">
              {filteredProducts.length} products
            </p>
            <Select
              value={sortBy}
              onValueChange={(value) => {
                setSortBy(value);
                applyFilters();
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="priceLowToHigh">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="priceHighToLow">
                  Price: High to Low
                </SelectItem>
                <SelectItem value="nameAZ">Name: A to Z</SelectItem>
                <SelectItem value="nameZA">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-stone-500 mb-2 dark:text-stone-400">
                    {product.category} - {product.color}
                  </p>
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
