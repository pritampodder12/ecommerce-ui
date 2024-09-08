"use client";

import { Button } from "@/components/ui/button";

// This would typically come from a database or API
const products = [
  {
    id: 1,
    name: "Leather Jacket",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "T-Shirt",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Watch",
    price: 299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "Backpack",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Dress",
    price: 149.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to FashionStore
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the latest trends in fashion. Shop our curated
                collection of stylish clothing and accessories.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Shop Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button className="mt-2 w-full">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
