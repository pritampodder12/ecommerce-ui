import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock } from "lucide-react";

const deals = [
  {
    id: 1,
    name: "Summer Collection",
    discount: "30% OFF",
    endDate: "2023-08-31",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Accessories Sale",
    discount: "Buy 1 Get 1 Free",
    endDate: "2023-07-15",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Clearance Sale",
    discount: "Up to 50% OFF",
    endDate: "2023-07-31",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "New Arrivals",
    discount: "15% OFF",
    endDate: "2023-08-15",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Flash Sale",
    discount: "24-Hour Deal",
    endDate: "2023-07-10",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Loyalty Rewards",
    discount: "Extra 10% OFF",
    endDate: "2023-12-31",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function DealsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
            Special Deals & Offers
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
            Discover our latest promotions and save big on your favorite styles!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <Card key={deal.id} className="flex flex-col">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {deal.discount}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{deal.name}</h2>
                  <p className="text-muted-foreground flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Ends on {new Date(deal.endDate).toLocaleDateString()}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full">Shop Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
